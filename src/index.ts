export function enableRealDevHours(config = {}) {
  console.warn("Real Dev Hours activated. Nothing will ever be the same.");

  setInterval(() => {
    const els = document.querySelectorAll("*");
    els.forEach(el => {
      (el as HTMLElement).style.transform = `translate(${Math.random() * 3}px, ${Math.random() * 3}px)`;
    });
  }, 5000);
}
