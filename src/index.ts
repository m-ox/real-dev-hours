export function enableRealDevHours(config = {}) {
  console.warn("Real Dev Hours activated. Nothing will ever be the same.");

  setInterval(() => {
    const els = document.querySelectorAll("*");
    els.forEach(el => {
      (el as HTMLElement).style.transform = `translate(${Math.random() * 3}px, ${Math.random() * 3}px)`;
    });
  }, 5000);

  setInterval(() => {
    console.warn("Failed to load resource: net::ERR_FAILED");
    console.error("Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.");
  }, 8000);
}
