import { calculateCollapsibleContentHeight, expandSection, collapseSection } from '../js/collapsible.js';

const t = (key, fallback, params = {}) => {
    let template;
    if (window.i18n && window.i18n.t) {
        template = window.i18n.t(key);
        if (!template || template === key) {
            template = fallback;
        }
    } else {
        template = fallback;
    }
    return String(template).replace(/\{(\w+)\}/g, (_, token) => (
        Object.prototype.hasOwnProperty.call(params, token) ? params[token] : `{${token}}`
    ));
};

const localizeUnit = (unit, count = 2) => {
    const normalized = String(unit || '').toLowerCase();
    const singular = Number(count) === 1;
    const keyMap = {
        day: singular ? 'time.day' : 'time.days',
        days: singular ? 'time.day' : 'time.days',
        week: singular ? 'time.week' : 'time.weeks',
        weeks: singular ? 'time.week' : 'time.weeks',
        month: singular ? 'time.month' : 'time.months',
        months: singular ? 'time.month' : 'time.months',
        year: singular ? 'time.year' : 'time.years',
        years: singular ? 'time.year' : 'time.years'
    };
    return keyMap[normalized] ? t(keyMap[normalized], unit) : unit;
};

/**
 * MaintenanceManager - Handles maintenance events for assets and sub-assets
 * Manages the creation, editing, and deletion of maintenance events
 */

export class MaintenanceManager {
    constructor() {
        this.maintenanceEvents = new Map();
        this.initializeEventListeners();
    }

    /**
     * Initialize event listeners for maintenance event buttons
     */
    initializeEventListeners() {
        const addAssetMaintenanceBtn = document.getElementById('addMaintenanceEvent');
        const addSubAssetMaintenanceBtn = document.getElementById('addSubAssetMaintenanceEvent');

        if (addAssetMaintenanceBtn) {
            addAssetMaintenanceBtn.addEventListener('click', () => this.addMaintenanceEvent('asset'));
        }

        if (addSubAssetMaintenanceBtn) {
            addSubAssetMaintenanceBtn.addEventListener('click', () => this.addMaintenanceEvent('subAsset'));
        }

        // Add language change event listener to re-render maintenance events
        document.addEventListener('i18n:changed', () => {
            // Re-render existing maintenance events with updated translations
            this.refreshMaintenanceEvents();
        });
    }

    /**
     * Refresh maintenance events to update translations
     */
    refreshMaintenanceEvents() {
        const assetEvents = document.getElementById('assetMaintenanceEvents');
        const subAssetEvents = document.getElementById('subAssetMaintenanceEvents');
        
        if (assetEvents) {
            const events = assetEvents.querySelectorAll('.maintenance-event');
            events.forEach(event => {
                const typeSelect = event.querySelector('[name="eventType"]');
                if (typeSelect) {
                    // Update option texts
                    Array.from(typeSelect.options).forEach(option => {
                        const value = option.value;
                        switch (value) {
                            case 'cleaning':
                                option.textContent = t('maintenance.type.cleaning', 'Cleaning');
                                break;
                            case 'inspection':
                                option.textContent = t('maintenance.type.inspection', 'Inspection');
                                break;
                            case 'repair':
                                option.textContent = t('maintenance.type.repair', 'Repair');
                                break;
                            case 'replacement':
                                option.textContent = t('maintenance.type.replacement', 'Replacement');
                                break;
                            case 'upgrade':
                                option.textContent = t('maintenance.type.upgrade', 'Upgrade');
                                break;
                            case 'other':
                                option.textContent = t('maintenance.type.other', 'Other');
                                break;
                        }
                    });
                }
            });
        }
        
        if (subAssetEvents) {
            const events = subAssetEvents.querySelectorAll('.maintenance-event');
            events.forEach(event => {
                const typeSelect = event.querySelector('[name="eventType"]');
                if (typeSelect) {
                    // Update option texts
                    Array.from(typeSelect.options).forEach(option => {
                        const value = option.value;
                        switch (value) {
                            case 'cleaning':
                                option.textContent = t('maintenance.type.cleaning', 'Cleaning');
                                break;
                            case 'inspection':
                                option.textContent = t('maintenance.type.inspection', 'Inspection');
                                break;
                            case 'repair':
                                option.textContent = t('maintenance.type.repair', 'Repair');
                                break;
                            case 'replacement':
                                option.textContent = t('maintenance.type.replacement', 'Replacement');
                                break;
                            case 'upgrade':
                                option.textContent = t('maintenance.type.upgrade', 'Upgrade');
                                break;
                            case 'other':
                                option.textContent = t('maintenance.type.other', 'Other');
                                break;
                        }
                    });
                }
            });
        }
    }

    /**
     * Add a new maintenance event to the specified type (asset or sub-asset)
     * @param {string} type - 'asset' or 'subAsset'
     */
    addMaintenanceEvent(type) {
        const container = document.getElementById(`${type}MaintenanceEvents`);
        if (!container) return;

        // Expand the maintenance section if it's collapsed
        this.expandMaintenanceSection(type);

        const eventId = `event_${Date.now()}`;
        const eventHtml = this.createMaintenanceEventHtml(eventId);
        container.insertAdjacentHTML('beforeend', eventHtml);

        // Add event listener for delete button
        const deleteBtn = container.querySelector(`#${eventId} .delete-maintenance-event`);
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => this.deleteMaintenanceEvent(eventId, type));
        }

        // Add event listener for type change
        const newEvent = container.lastElementChild;
        const typeSelect = newEvent.querySelector('[name="eventType"]');
        if (typeSelect) {
            typeSelect.addEventListener('change', (e) => this.handleEventTypeChange(e.target));
        }

        // Recalculate the collapsible section height
        this.recalculateCollapsibleHeight(type);
    }

    /**
     * Create HTML for a maintenance event
     * @param {string} eventId - Unique identifier for the event
     * @returns {string} HTML string for the maintenance event
     */
    createMaintenanceEventHtml(eventId) {
        return `
            <div id="${eventId}" class="maintenance-event">
                <div class="maintenance-event-header">
                    <h4 class="maintenance-event-title">${t('maintenance.eventLabel', 'Event')}</h4>
                    <button type="button" class="delete-maintenance-event" title="${t('maintenance.deleteEvent', 'Delete event')}">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div class="maintenance-event-fields">
                    <div class="maintenance-event-row">
                        <input type="text" name="eventName" placeholder="${t('maintenance.eventName', 'Event Name')}" required>
                    </div>
                    <div class="maintenance-event-row">
                        <select name="eventType">
                            <option value="frequency">${t('maintenance.recurring', 'Recurring')}</option>
                            <option value="specific">${t('date.specific', 'Specific Date')}</option>
                        </select>
                    </div>
                    <div class="maintenance-event-row frequency-fields">
                        <input type="number" name="frequency" min="1" placeholder="${t('maintenance.frequency', 'Frequency')}">
                        <select name="frequencyUnit">
                            <option value="days">${localizeUnit('days')}</option>
                            <option value="weeks">${localizeUnit('weeks')}</option>
                            <option value="months">${localizeUnit('months')}</option>
                            <option value="years">${localizeUnit('years')}</option>
                        </select>
                    </div>
                    <div class="maintenance-event-row frequency-fields">
                        <label for="nextDueDate" class="frequency-due-label">${t('maintenance.nextDueDate', 'Next Due Date:')}</label>
                        <input type="date" name="nextDueDate" title="${t('maintenance.nextDueTitle', 'When should this maintenance be performed next?')}">
                    </div>
                    <div class="maintenance-event-row specific-date-fields" style="display: none;">
                        <input type="date" name="specificDate">
                    </div>
                    <div class="maintenance-event-row">
                        <textarea id="maintenance-notes" name="notes" placeholder="${t('maintenance.notesPlaceholder', 'Notes (optional)')}"></textarea>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Delete a maintenance event
     * @param {string} eventId - ID of the event to delete
     */
    deleteMaintenanceEvent(eventId, type) {
        const eventElement = document.getElementById(eventId);
        if (eventElement) {
            eventElement.remove();
        }
        // Always recalculate the collapsible section height after removal
        this.recalculateCollapsibleHeight(type);
    }

    /**
     * Get all maintenance events for a specific type (asset or sub-asset)
     * @param {string} type - 'asset' or 'subAsset'
     * @returns {Array} Array of maintenance event objects
     */
    getMaintenanceEvents(type) {
        const container = document.getElementById(`${type}MaintenanceEvents`);
        if (!container) return [];

        const events = [];
        container.querySelectorAll('.maintenance-event').forEach(eventElement => {
            const event = {
                name: eventElement.querySelector('[name="eventName"]').value,
                type: eventElement.querySelector('[name="eventType"]').value,
                notes: eventElement.querySelector('[name="notes"]').value
            };

            if (event.type === 'frequency') {
                event.frequency = eventElement.querySelector('[name="frequency"]').value;
                event.frequencyUnit = eventElement.querySelector('[name="frequencyUnit"]').value;
                event.nextDueDate = eventElement.querySelector('[name="nextDueDate"]').value;
            } else {
                event.specificDate = eventElement.querySelector('[name="specificDate"]').value;
            }

            events.push(event);
        });

        return events;
    }

    /**
     * Set maintenance events for a specific type (asset or sub-asset)
     * @param {string} type - 'asset' or 'subAsset'
     * @param {Array} events - Array of maintenance event objects
     */
    setMaintenanceEvents(type, events) {
        const container = document.getElementById(`${type}MaintenanceEvents`);
        if (!container) return;

        // Clear existing events
        container.innerHTML = '';

        // Add each event
        events.forEach(event => {
            const eventId = `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            const eventHtml = this.createMaintenanceEventHtml(eventId);
            container.insertAdjacentHTML('beforeend', eventHtml);

            const eventElement = container.lastElementChild;
            if (eventElement) {
                eventElement.querySelector('[name="eventName"]').value = event.name || '';
                eventElement.querySelector('[name="eventType"]').value = event.type || 'frequency';
                eventElement.querySelector('[name="notes"]').value = event.notes || '';

                if (event.type === 'frequency') {
                    eventElement.querySelector('[name="frequency"]').value = event.frequency || '';
                    eventElement.querySelector('[name="frequencyUnit"]').value = event.frequencyUnit || 'days';
                    eventElement.querySelector('[name="nextDueDate"]').value = event.nextDueDate || '';
                } else {
                    eventElement.querySelector('[name="specificDate"]').value = event.specificDate || '';
                }

                // Add event listener for delete button
                const deleteBtn = eventElement.querySelector('.delete-maintenance-event');
                if (deleteBtn) {
                    deleteBtn.addEventListener('click', () => this.deleteMaintenanceEvent(eventId, type));
                }

                // Add event listener for type change
                const typeSelect = eventElement.querySelector('[name="eventType"]');
                if (typeSelect) {
                    typeSelect.addEventListener('change', (e) => this.handleEventTypeChange(e.target));
                    this.handleEventTypeChange(typeSelect);
                }

            }
        });

        // If there are events to show, expand the section
        if (events && events.length > 0) {
            this.expandMaintenanceSection(type);
        } else {
            this.collapseMaintenanceSection(type);
        }
    }

    /**
     * Handle change in maintenance event type
     * @param {HTMLSelectElement} select - The select element that changed
     */
    handleEventTypeChange(select) {
        const eventElement = select.closest('.maintenance-event');
        if (!eventElement) return;

        const frequencyFields = eventElement.querySelectorAll('.frequency-fields');
        const specificDateFields = eventElement.querySelector('.specific-date-fields');

        if (select.value === 'frequency') {
            frequencyFields.forEach(field => field.style.display = 'flex');
            specificDateFields.style.display = 'none';
        } else {
            frequencyFields.forEach(field => field.style.display = 'none');
            specificDateFields.style.display = 'flex';
        }

        // Recalculate height after changing field visibility
        const container = select.closest('[id$="MaintenanceEvents"]');
        if (container) {
            const containerId = container.id;
            const type = containerId.includes('subAsset') ? 'subAsset' : 'asset';
            this.recalculateCollapsibleHeight(type);
        }
    }

    /**
     * Expand the maintenance section if it's collapsed
     * @param {string} type - 'asset' or 'subAsset'
     */
    expandMaintenanceSection(type) {
        this.recalculateCollapsibleHeight(type);
        const sectionId = type === 'asset' ? '#assetMaintenanceSection' : '#subAssetMaintenanceSection';       
        expandSection(sectionId);
    }

    collapseMaintenanceSection(type) {
        const sectionId = type === 'asset' ? '#assetMaintenanceSection' : '#subAssetMaintenanceSection';        
        collapseSection(sectionId);
    }

    /**
     * Recalculate the height of the collapsible section
     * @param {string} type - 'asset' or 'subAsset'
     */
    recalculateCollapsibleHeight(type) {
        const sectionId = type === 'asset' ? 'assetMaintenanceSection' : 'subAssetMaintenanceSection';
        const section = document.getElementById(sectionId);
        if (section) {
            const content = section.querySelector('.collapsible-content');
            if (content) {
                // Use the generic calculateCollapsibleContentHeight from collapsible.js
                calculateCollapsibleContentHeight(content);
            }
        }
    }
}
