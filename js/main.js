window.addEventListener("DOMContentLoaded", () => {
  loadChart(2020);
  setupControls();
  document.querySelector('[data-year="2020"]').classList.add("active");
});
