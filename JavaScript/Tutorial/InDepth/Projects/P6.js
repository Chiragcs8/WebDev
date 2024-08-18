function RandomColor() {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
let intervaleid;
const startchangeingcolor = function () {
  if (!intervaleid) {
    intervaleid = setInterval(changebackgroundcolor, 500);
  }

  function changebackgroundcolor() {
    document.body.style.backgroundColor = `${RandomColor()}`;
  }
};

const stopchangeingcolor = function () {
  clearInterval(intervaleid);
  intervaleid = null;
};
const start = document
  .querySelector("#start")
  .addEventListener("click", startchangeingcolor);
const stop = document
  .querySelector("#stop")
  .addEventListener("click", stopchangeingcolor);
