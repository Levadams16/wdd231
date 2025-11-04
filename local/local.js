localStorage.setItem("level", "1");

let level = localStorage.getItem("level");

let title = document.querySelector("h1");

title.textContent = level;

localStorage.setItem("level", "2");

level = localStorage.getItem("level");

let title = document.querySelector("h1");

title.textContent = level;

localStorage.removeItem("level");
localStorage.clear();