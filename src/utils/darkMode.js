export const initializeDarkMode = () => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode === "dark") {
      document.body.classList.add("dark-mode");
    }
  };
  
  export const toggleDarkMode = (checked) => {
    if (checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    }
  };