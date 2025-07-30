interface RealDevHoursConfig {
  framework?: 'react' | 'vanilla' | 'vue' | 'svelte' | 'angular' | 'solid';
  enableLogs?: boolean;
  enableVisualChaos?: boolean;
  interval?: number;
  consoleNoiseLevel?: 'low' | 'medium' | 'high';
}

export function enableRealDevHours(config: RealDevHoursConfig = {}) {
  const {
    framework = 'vanilla',
    enableLogs = true,
    enableVisualChaos = true,
    interval = 8000,
    consoleNoiseLevel = 'medium',
  } = config;

  if (enableLogs) {
    console.warn("Real Dev Hours activated. Nothing will ever be the same.");

    setInterval(() => {
      const log = (...args: any[]) => {
        if (consoleNoiseLevel === 'low') return;
        console.warn(...args);
      };

      const error = (...args: any[]) => {
        if (consoleNoiseLevel === 'low') return;
        console.error(...args);
      };

      switch (framework) {
        case 'react':
          log("Warning: Each child in a list should have a unique 'key' prop.");
          error("Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          log("Warning: Can't perform a React state update on an unmounted component.");
          break;
        case 'vue':
          log("[Vue warn]: Property or method 'x' is not defined on the instance but referenced during render.");
          error("Uncaught TypeError: Cannot read property 'x' of undefined");
          break;
        case 'svelte':
          log("A component was created with unknown prop 'value'");
          error("Uncaught (in promise): No store found for 'someStore'");
          break;
        case 'angular':
          log("NG0100: ExpressionChangedAfterItHasBeenCheckedError");
          error("core.js:12345 ERROR TypeError: Cannot read property 'foo' of undefined");
          break;
        case 'solid':
          log("Hydration mismatch: unable to reconcile nodes");
          error("Error: Signal value accessed outside reactive context");
          break;
        default:
          log("Failed to load resource: net::ERR_FAILED");
          log("client:1722 WebSocket connection to 'ws://localhost:3000/' failed:");
          error("Uncaught TypeError: Cannot read properties of undefined (reading 'value')");
      }

      if (consoleNoiseLevel === 'high') {
        error("UnhandledPromiseRejectionWarning: ReferenceError: x is not defined");
        log("DevTools failed to load SourceMap: Could not load content for file://...");
      }

    }, interval);
  }

  if (enableVisualChaos) {
    setInterval(() => {
      const els = document.querySelectorAll("*");
      els.forEach(el => {
        (el as HTMLElement).style.transform = `translate(${Math.random() * 3}px, ${Math.random() * 3}px)`;
      });
    }, 5000);
  }
}
