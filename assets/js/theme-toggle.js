document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";

  // Apply saved theme
  document.body.classList.add(currentTheme + "-mode");
  toggleBtn.textContent = currentTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";

  toggleBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.replace("dark-mode", "light-mode");
      toggleBtn.textContent = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.replace("light-mode", "dark-mode");
      toggleBtn.textContent = "☀️ Light Mode";
      localStorage.setItem("theme", "dark");
    }
  });
});
