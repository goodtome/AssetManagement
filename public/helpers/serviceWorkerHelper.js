import { joinPath } from '../helpers/paths.js';

// Function to register the service worker
export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
      // Get the app version from window.appConfig
      const appVersion = window.appConfig ? window.appConfig.version : '1.0.0';
      
      // Add both cache-busting timestamp and version parameter to service worker URL
      const timestamp = new Date().getTime(); // Use timestamp for cache busting
      navigator.serviceWorker.register(joinPath(`service-worker.js?v=${appVersion}&t=${timestamp}`))
          .then((reg) => {
              console.log("Service Worker registered:", reg.scope);
              console.log("Using app version:", appVersion);
              
              // Force update check - this ensures we're using the latest service worker
              reg.update()
                .then(() => console.log("Service worker update check completed"));
                
              // Check version immediately after registration
              checkVersion();
              
              // After registration, also send the app version to the service worker
              if (navigator.serviceWorker.controller) {
                  safePostMessage({ type: 'SET_APP_VERSION', version: appVersion });
              }
          })
          .catch((err) => console.log("Service Worker registration failed:", err));
          
      // Listen for version messages from the service worker
      navigator.serviceWorker.addEventListener('message', (event) => {
                            if (event.data.type === 'UPDATE_AVAILABLE') {
                        console.log(`Update available: ${event.data.newVersion} (current: ${event.data.currentVersion})`);
                        // Tell service worker to perform the update
                        safePostMessage({ type: 'PERFORM_UPDATE', version: window.appConfig ? window.appConfig.version : '1.0.0' });
                    } else if (event.data.type === 'UPDATE_COMPLETE') {
            console.log(`Update complete to version: ${event.data.version}`);
            // Only reload if update was successful
            if (event.data.success !== false) {
                console.log("Reloading page to apply new cache");
                window.location.reload();
            }
          }
      });
      
      // Check for version updates when the page becomes visible
      document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible' && navigator.serviceWorker.controller) {
              checkVersion();
          }
      });
      
      // // Also check periodically for version updates
      // setInterval(() => {
      //     if (navigator.serviceWorker.controller) {
      //         checkVersion();
      //     }
      // }, 60 * 60 * 1000); // Check every hour
  }
}
    
// Check the current service worker version
function checkVersion() {
    if (!navigator.serviceWorker.controller) return;
  
  // Create a message channel for the response
  const messageChannel = new MessageChannel();
  
  // Listen for the response
  messageChannel.port1.onmessage = (event) => {
      if (event.data.currentVersion !== event.data.newVersion) {
          console.log("New version available:", event.data.newVersion);
      }
  };
  
  // Get app version from window.appConfig
  const appVersion = window.appConfig ? window.appConfig.version : '1.0.0';
  
  // Ask the service worker for its version
    // Use safePostMessage to avoid uncaught runtime errors when no receiving end exists
    safePostMessage({ type: 'GET_VERSION', appVersion: appVersion }, [messageChannel.port2]);
}

// Helper: send a message to the active service worker controller safely
function safePostMessage(message, transfer) {
    try {
        if (!('serviceWorker' in navigator)) return false;
        const controller = navigator.serviceWorker.controller;
        // If there's an active controller and it's not redundant, use it.
        if (controller && controller.state !== 'redundant') {
            try {
                if (transfer && Array.isArray(transfer)) {
                    controller.postMessage(message, transfer);
                } else {
                    controller.postMessage(message);
                }
                return true;
            } catch (err) {
                // fall through to ready-based post
            }
        }

        // Fallback: use navigator.serviceWorker.ready to get the active worker
        // and post to it (safer for timing issues). Do not throw on failure.
        navigator.serviceWorker.ready.then(reg => {
            try {
                const active = reg && reg.active;
                if (!active) return;
                if (transfer && Array.isArray(transfer)) {
                    active.postMessage(message, transfer);
                } else {
                    active.postMessage(message);
                }
            } catch (err) {
                console.warn('safePostMessage (ready) failed:', err && err.message ? err.message : err);
            }
        }).catch(() => {});
        return false;
    } catch (err) {
        // Some browser extensions or timing issues can cause "Receiving end does not exist".
        // Log at debug level and swallow to avoid uncaught errors.
        console.warn('safePostMessage failed:', err && err.message ? err.message : err);
        return false;
    }
}