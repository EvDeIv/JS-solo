const inputRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');
const themeRef = localStorage.getItem('theme');
const theme = {
  light: 'light-theme',
  dark: 'dark-theme',
};
function toLight() {
  localStorage.setItem('theme', `${theme.light}`);
  bodyRef.classList.remove(`${theme.dark}`);
  bodyRef.classList.add(`${theme.light}`);
  inputRef.removeAttribute('checked');
}
function toDark() {
  localStorage.setItem('theme', `${theme.dark}`);
  inputRef.setAttribute('checked', 'true');
  bodyRef.classList.remove(`${theme.light}`);
  bodyRef.classList.add(`${theme.dark}`);
}

if (localStorage.getItem('theme') === theme.dark) {
  toDark();
} else {
  toLight();
}

const themeChanger = function () {
  if (localStorage.getItem('theme') === theme.dark) {
    toLight();
  } else {
    toDark();
  }
};

inputRef.addEventListener('input', themeChanger);
