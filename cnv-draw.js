/* global SMALL_CANVAS_SIZE, LARGE_CANVAS_SIZE, BG_COLOR_HEX, resizeWithCSS , resizeWithCSSPixelated */

console.log("hello");

function cnvRender(parentID, resizeCallback) {
  let parent = document.getElementById(parentID);
  let cnv = document.createElement("canvas");
  let ctx = cnv.getContext("2d");
  parent.appendChild(cnv);

  let s = SMALL_CANVAS_SIZE;
  cnv.width = s;
  cnv.height = s;

 

  //This doesnt seem to make any difference
  // if (parent.className && parent.className.includes("pixelated-rendering")) {
  //     ctx.webkitImageSmoothingEnabled = false;
  //     ctx.mozImageSmoothingEnabled = false;
  //     ctx.imageSmoothingEnabled = false;
  // }

  //bg
  ctx.beginPath();
  ctx.rect(0, 0, s, s);
  ctx.fillStyle = BG_COLOR_HEX;
  ctx.fill();
  ctx.closePath();

  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";

  ctx.lineWidth = 2;
  //Circle
  ctx.beginPath();
  ctx.ellipse(s / 2, s / 2, s / 4, s / 4, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.ellipse(s / 2, s / 2, s / 8, s / 8, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  
  ctx.lineWidth = 1.1;
  //diamond
  ctx.beginPath();
  ctx.moveTo(0, s/2);
  ctx.lineTo(s/2,0);
  ctx.lineTo(s, s/2);
  ctx.lineTo(s/2, s);
  ctx.lineTo(0, s/2)
  ctx.stroke();
  ctx.closePath();
  
   if (resizeCallback) {
    resizeCallback(cnv);
  }
}

cnvRender("cnv-1");
cnvRender("cnv-2", resizeWithCSS);
cnvRender("cnv-3", resizeWithCSSPixelated);
