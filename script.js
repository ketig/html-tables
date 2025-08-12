function showTab(tabId) {
  // Hide all tab contents
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.remove("active"));

  // Remove active class from all tabs
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach((tab) => tab.classList.remove("active"));

  // Show selected tab content
  document.getElementById(tabId).classList.add("active");

  // Add active class to clicked tab
  event.target.classList.add("active");

  // Update progress bar
  updateProgress(tabId);
}

function updateProgress(tabId) {
  const progressBar = document.getElementById("progress");
  const progressMap = {
    overview: "20%",
    github: "40%",
    figma: "60%",
    html: "80%",
    resources: "100%",
  };

  if (progressBar) {
    progressBar.style.width = progressMap[tabId] || "0%";
  }
}

function handleSubmit(event) {
  event.preventDefault();
  alert(
    "Great job! In a real application, this form would be submitted to a server."
  );
}

// Auto-update progress when page loads
window.addEventListener("load", function () {
  updateProgress("overview");
});

// Add some interactive elements
document.querySelectorAll(".exercise").forEach((exercise) => {
  exercise.addEventListener("click", function () {
    this.style.transform =
      this.style.transform === "scale(1.02)" ? "scale(1)" : "scale(1.02)";
  });
});

// Add completion tracking for checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      this.parentElement.style.backgroundColor = "#d4edda";
      this.parentElement.style.borderRadius = "5px";
      this.parentElement.style.padding = "5px";
    } else {
      this.parentElement.style.backgroundColor = "";
      this.parentElement.style.borderRadius = "";
      this.parentElement.style.padding = "";
    }
  });
});
