let chart;
let currentYear = 2020;

async function loadChart(year = 2020) {
  const response = await fetch(`assets/data/data_${year}.json`);
  const data = await response.json();

  const ctx = document.getElementById("emissionChart").getContext("2d");
  const labels = data.map(item => item.country);
  const emissions = data.map(item => item.emissions);

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: `CO₂ Emissions (${year})`,
          data: emissions,
          backgroundColor: [
            "#ff6b6b",
            "#ffa36c",
            "#ffd93d",
            "#6bcB77",
            "#4d96ff"
          ],
          borderRadius: 12
        }
      ]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1000,
        easing: "easeOutCubic"
      },
      plugins: {
        legend: { display: true },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.label}: ${ctx.raw} Mt`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "Emissions (Million Tons)" }
        },
        x: {
          ticks: {
            color: "#333",
            font: { size: 14 }
          }
        }
      }
    }
  });
}

// Button event (for switching year)
document.querySelectorAll(".year-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const year = e.target.getAttribute("data-year");
    currentYear = year;
    document.getElementById("yearLabel").textContent = year;
    document.getElementById("yearRange").value = year;
    loadChart(year);
  });
});

//Slider event
const yearRange = document.getElementById("yearRange");
if (yearRange) {
  yearRange.addEventListener("input", e => {
    const year = e.target.value;
    currentYear = year;
    document.getElementById("yearLabel").textContent = year;
    loadChart(year);
  });
}

// Initialize
window.addEventListener("load", () => {
  loadChart(currentYear);
});
