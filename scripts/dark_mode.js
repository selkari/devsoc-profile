let darkToggled = localStorage.getItem('darkToggled');
const themeToggle = document.getElementById('theme-toggle');

function switchThemeDark() {
  localStorage.setItem('darkToggled', 'on');
  console.log('switching to dark');
  // add dark mode class to body and replace relevant images
  document.body.classList.add('dark-mode');
  document.getElementById('lamp-button').setAttribute(
    'src', 'assets/images/icons/lamp_icon_dark.png');
  document.getElementById('bubble-close-img').setAttribute(
    'src', 'assets/images/bubble_close_dark.png');
  document.getElementById('tail').setAttribute(
    'src', 'assets/images/bubble_tail_dark.png');
}

function switchThemeLight() {
  localStorage.setItem('darkToggled', null)
  console.log('switching to lite');

  document.body.classList.remove('dark-mode');
  document.getElementById('lamp-button').setAttribute(
    'src','assets/images/icons/lamp_icon_lite.png');
  document.getElementById('bubble-close-img').setAttribute(
    'src', 'assets/images/bubble_close.png');
  document.getElementById('tail').setAttribute(
    'src', 'assets/images/bubble_tail.png');
}

// set webpage current state to what it remembers
if (darkToggled == 'on') {
  switchThemeDark();
}

themeToggle.addEventListener("click", () => {
  darkToggled = localStorage.getItem('darkToggled');
  if (darkToggled == 'on') {
    switchThemeLight();
  } else {
    switchThemeDark();
  }
});
