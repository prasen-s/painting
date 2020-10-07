let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let s;
let started = false;

function makeShape(x,y,w,h,c) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.globalAlpha = 0.6;
  ctx.fillStyle = c;
  ctx.fill();
  ctx.closePath();
}

let wd = 0;

function rotateWheel() {
  wd++;
  wd = (wd > 360) ? 0 : wd;
  return `hsl(${wd},50%,50%)`;
}

function randomXY() {
  return [Math.floor(Math.random()*canvas.width), Math.floor(Math.random()*canvas.height)];
}

function drawRandom() {
  let xy = randomXY();
  let c = rotateWheel();
  let w = 150;
  let h = 100;
  makeShape(xy[0],xy[1],w,h,c)
}

function draw() {
  drawRandom();
}

function startFlow() {
  if (!started) {
    si = setInterval(draw, 75);
    started = true;
  }
}

function pauseFlow() {
  clearInterval(si);
  started = false;
}

document.addEventListener("DOMContentLoaded", startFlow, false);
