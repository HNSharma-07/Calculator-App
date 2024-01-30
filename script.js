const darkBtn = document.querySelector(".dark");
const lightBtn = document.querySelector(".light");
darkBtn.style.display = "none"; //Default Theme is Dark!

//If Dark Theme button Clicked, then switch to dark theme
darkBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");
  window.localStorage.setItem("mode", "dark"); //Set mode value to dark and save it, if user refresh the page, the browser can access this value
  darkBtn.style.display = "none";
  lightBtn.style.display = "inline";
});

//if Light Theme button Clicked, then switch yo light theme
lightBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
  window.localStorage.setItem("mode", "light"); //Set mode value to light and save it, if user refresh the page, the browser can access this value
  darkBtn.style.display = "inline";
  lightBtn.style.display = "none";
});

const mode = window.localStorage.getItem("mode"); //grab mode value
if (mode == "dark") {
  //if user set the theme to dark, then load dark theme
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");
  darkBtn.style.display = "none";
  lightBtn.style.display = "inline";
}

if (mode == "light") {
  //if user set the theme to light, then load light theme
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
  darkBtn.style.display = "inline";
  lightBtn.style.display = "none";
}
