const tooltip = document.getElementById("tooltip");

function handleBarHover(event, elements, data) {
  if (elements.length) {
    const index = elements[0].index;
    const item = data[index];
    tooltip.innerHTML = `<strong>${item.country}</strong><br>${item.emissions} Mt CO₂`;
    tooltip.style.opacity = 1;
    tooltip.style.left = event.clientX + 15 + "px";
    tooltip.style.top = event.clientY - 20 + "px";
  } else {
    tooltip.style.opacity = 0;
  }
}
