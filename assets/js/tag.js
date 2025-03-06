function setupTabs(buildElement) {
  const tabs = buildElement.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");
      buildElement
        .querySelectorAll(".tab")
        .forEach((t) => t.classList.remove("active"));
      buildElement
        .querySelectorAll(".tab-content")
        .forEach((c) => c.classList.remove("active"));
      tab.classList.add("active");
      buildElement.querySelector(`#${tabId}`).classList.add("active");
    });
  });
}

// Configurar pestañas para cada build
document.querySelectorAll(".build").forEach(setupTabs);

// Manejar la selección de builds
const buildButtons = document.querySelectorAll(".build-button");
const builds = document.querySelectorAll(".build");

buildButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buildId = button.getAttribute("data-build");
    buildButtons.forEach((b) => b.classList.remove("active"));
    builds.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    document.getElementById(buildId).classList.add("active");
  });
});
