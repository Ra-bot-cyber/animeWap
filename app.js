let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode");
const toggle = document.getElementById("#toggle");
const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("darkmode");
  // 2. Update darkMode in localStorage
  //   toggle.style.color = "white";
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkmode");
  // 2. Update darkMode in localStorage
  //   toggle.style.color = "black";
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});
//hamburger
const navMain = document.getElementById("main-nav");
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  navMain.classList.toggle("hide");
  console.log(navMain.classList);
});

//arrowDown
const sideNav = document.getElementById("sidebar");
const arrow = document.getElementById("arrow");
arrow.addEventListener("click", () => {
  sideNav.classList.toggle("hide");
});
