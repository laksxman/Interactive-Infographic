function setupControls() {
  const buttons = document.querySelectorAll(".year-btn");
  const range = document.getElementById("yearRange");
  const label = document.getElementById("yearLabel");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const year = btn.getAttribute("data-year");
      currentYear = year;
      label.textContent = year;
      range.value = year;
      loadChart(year);
    });
  });

  range.addEventListener("input", e => {
    const year = e.target.value;
    label.textContent = year;
    currentYear = year;
    loadChart(year);
  });
}
