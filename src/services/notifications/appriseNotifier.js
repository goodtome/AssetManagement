/**
 * Apprise Notification Service for DumbAssets
 * Encapsulates Apprise CLI integration for sending notifications about asset events.
 * Handles message formatting, CLI invocation, and error logging.
 */

const { spawn } = require('child_process');
const { formatDate, sanitizeText } = require('./utils');
const notificationQueue = require('./notificationQueue');

const notificationTranslations = {
  en: {
    assetAdded: 'Asset Added',
    assetDeleted: 'Asset Deleted',
    assetEdited: 'Asset Edited',
    component: 'Component',
    asset: 'Asset',
    parentAsset: 'Parent Asset',
    model: 'Model #',
    serial: 'Serial #',
    purchaseDate: 'Purchase Date',
    price: 'Price',
    warranty: 'Warranty',
    warrantyExpiration: 'Warranty Expiration',
    warrantyExpiring: 'Warranty expiring in {time}',
    expires: 'Expires',
    maintenanceSchedule: 'Maintenance Schedule',
    event: 'Event',
    schedule: 'Schedule',
    notes: 'Notes',
    testNotification: 'Test Notification',
    notification: 'Notification',
    viewAsset: 'View Asset'
  },
  zh: {
    assetAdded: '资产已添加',
    assetDeleted: '资产已删除',
    assetEdited: '资产已编辑',
    component: '组件',
    asset: '资产',
    parentAsset: '父级资产',
    model: '型号',
    serial: '序列号',
    purchaseDate: '购买日期',
    price: '价格',
    warranty: '保修',
    warrantyExpiration: '保修到期',
    warrantyExpiring: '保修将在 {time} 后到期',
    expires: '到期时间',
    maintenanceSchedule: '维护计划',
    event: '事件',
    schedule: '计划',
    notes: '备注',
    testNotification: '测试通知',
    notification: '通知',
    viewAsset: '查看资产'
  }
};

function notifyText(lang, key, params = {}) {
  const locale = notificationTranslations[lang] ? lang : 'en';
  const template = notificationTranslations[locale][key] || notificationTranslations.en[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, token) => (
    Object.prototype.hasOwnProperty.call(params, token) ? params[token] : `{${token}}`
  ));
}

function formatNotification(eventType, assetData, baseUrl = '', lang = 'en') {
  const lines = [];

  let assetLink = '';
  if (assetData.id && baseUrl) {
    assetLink = assetData.parentId
      ? `${baseUrl}?ass=${assetData.parentId}&sub=${assetData.id}`
      : `${baseUrl}?ass=${assetData.id}`;
  }

  if (eventType === 'asset_added') {
    lines.push(notifyText(lang, 'assetAdded'));
    if (assetData.parentId) lines.push(notifyText(lang, 'component'));
  } else if (eventType === 'asset_deleted') {
    lines.push(notifyText(lang, 'assetDeleted'));
    if (assetData.parentId) lines.push(notifyText(lang, 'component'));
    if (assetData.name) lines.push(`${notifyText(lang, 'asset')}: ${assetData.name}`);
    if (assetData.modelNumber) lines.push(`${notifyText(lang, 'model')}: ${assetData.modelNumber}`);
    if (assetData.serialNumber) lines.push(`${notifyText(lang, 'serial')}: ${assetData.serialNumber}`);
    if (assetData.purchaseDate) lines.push(`${notifyText(lang, 'purchaseDate')}: ${assetData.purchaseDate}`);
    if (assetData.price) lines.push(`${notifyText(lang, 'price')}: ${assetData.price}`);
    if (assetData.warranty) {
      if (assetData.warranty.scope) lines.push(`${notifyText(lang, 'warranty')}: ${assetData.warranty.scope}`);
      if (assetData.warranty.expirationDate) {
        lines.push(`${notifyText(lang, 'warrantyExpiration')}: ${assetData.warranty.expirationDate}`);
      }
    }
  } else if (eventType === 'asset_edited') {
    lines.push(notifyText(lang, 'assetEdited'));
    if (assetData.parentId) lines.push(notifyText(lang, 'component'));
  } else if (eventType === 'warranty_expiring') {
    const timeValue = assetData.days ? `${assetData.days}` : (assetData.time || '');
    lines.push(notifyText(lang, 'warrantyExpiring', { time: timeValue }));
    if (assetData.assetType === 'Component') {
      lines.push(`${notifyText(lang, 'component')}: ${assetData.name}`);
    } else {
      lines.push(`${notifyText(lang, 'asset')}: ${assetData.name}`);
    }
    if (assetData.modelNumber) lines.push(`${notifyText(lang, 'model')}: ${assetData.modelNumber}`);
    if (assetData.warrantyType) lines.push(assetData.warrantyType);
    if (assetData.expirationDate) lines.push(`${notifyText(lang, 'expires')}: ${assetData.expirationDate}`);
  } else if (eventType === 'maintenance_schedule') {
    lines.push(notifyText(lang, 'maintenanceSchedule'));
    if (assetData.type === 'Component') {
      lines.push(`${notifyText(lang, 'component')}: ${assetData.name}`);
      if (assetData.parentAsset) lines.push(`${notifyText(lang, 'parentAsset')}: ${assetData.parentAsset}`);
    } else {
      lines.push(`${notifyText(lang, 'asset')}: ${assetData.name}`);
    }
    if (assetData.modelNumber) lines.push(`${notifyText(lang, 'model')}: ${assetData.modelNumber}`);
    if (assetData.eventName) lines.push(`${notifyText(lang, 'event')}: ${assetData.eventName}`);
    if (assetData.schedule) lines.push(`${notifyText(lang, 'schedule')}: ${assetData.schedule}`);
    if (assetData.notes) lines.push(`${notifyText(lang, 'notes')}: ${assetData.notes}`);
  } else if (eventType === 'test') {
    lines.push(notifyText(lang, 'testNotification'));
  } else {
    lines.push(notifyText(lang, 'notification'));
  }

  if (!['asset_deleted', 'maintenance_schedule', 'warranty_expiring'].includes(eventType)) {
    if (assetData.name) lines.push(assetData.name);
    if (assetData.modelNumber) lines.push(assetData.modelNumber);
    if (assetData.description) lines.push(assetData.description);
  }

  if (assetLink) {
    lines.push('');
    lines.push(`${notifyText(lang, 'viewAsset')}: ${assetLink}`);
  }

  return lines.join('\n');
}

async function _sendNotificationImmediate(eventType, assetData, config) {
  const { appriseUrl, appriseMessage, baseUrl, language = 'en' } = config;
  if (!appriseUrl) return;

  try {
    const safeData = {};
    for (const key in assetData) {
      safeData[key] = sanitizeText(assetData[key]);
    }
    safeData.eventType = eventType;
    safeData.date = formatDate(new Date());

    let message = appriseMessage;
    if (!appriseMessage || ['asset_added', 'asset_deleted', 'asset_edited', 'warranty_expiring', 'test', 'maintenance_schedule'].includes(eventType)) {
      message = formatNotification(eventType, safeData, baseUrl, language);
    } else {
      Object.entries(safeData).forEach(([key, value]) => {
        message = message.replace(new RegExp(`{${key}}`, 'g'), value);
      });
    }

    return new Promise((resolve, reject) => {
      const appriseProcess = spawn('apprise', [appriseUrl, '-b', message]);
      appriseProcess.stdout.on('data', (data) => {
        console.info(`Apprise Output: ${data.toString().trim()}`);
      });
      appriseProcess.stderr.on('data', (data) => {
        console.error(`Apprise Error: ${data.toString().trim()}`);
      });
      appriseProcess.on('close', (code) => {
        if (code === 0) {
          console.info(`Notification sent: ${eventType} (${safeData.name || ''})`);
          resolve();
        } else {
          reject(new Error(`Apprise process exited with code ${code}`));
        }
      });
      appriseProcess.on('error', (err) => {
        reject(new Error(`Apprise process failed to start: ${err.message}`));
      });
    });
  } catch (err) {
    console.error(`Failed to send notification: ${err.message}`);
    throw err;
  }
}

async function sendNotification(eventType, assetData, config) {
  notificationQueue.enqueue(_sendNotificationImmediate, [eventType, assetData, config]);
}

module.exports = {
  sendNotification,
  formatNotification
};
