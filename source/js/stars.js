
  if ( !window.requestAnimationFrame ) {

    window.requestAnimationFrame = ( function() {

      return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

        window.setTimeout( callback, 1000 / 60 );

      };

    } )();

  }

var width = window.innerWidth;
var height = window.innerHeight;
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
var centerX = width/2;
var centerY = height/2;
var mousex;
var mousey;

function setCanvas(){

    c.width = width;
    c.height = height;

    centerX = width/2;
      centerY = height/2;

      mousex = width/2;
      mousey = height/2;
}

window.onload = function(){
  setCanvas();

  animate();
}


function animate() {

    requestAnimationFrame( animate );

    draw();
  }


window.onresize = function(){
  setCanvas();
}

// mouse events
window.onmousemove = function(event){
  mousex = event.clientX;
  mousey = event.clientY;
}

if (window.addEventListener)
        /** DOMMouseScroll is for mozilla. */
        window.addEventListener('DOMMouseScroll', wheel, false);
/** IE/Opera. */
window.onmousewheel = document.onmousewheel = wheel;


function wheel (e) {
   var delta = 0;
   if (e.detail)
   {
      delta = -e.detail / 3;
   }
   else
   {
      delta = e.wheelDelta / 120;
   }
   var doff = (delta/25);
   if (delta > 0 && Z+doff <= 0.5 || delta < 0 && Z+doff >= 0.01)
   {
      Z += (delta/25);
      //console.log(delta +" " +Z);
   }
}

// constants and storage for objects that represent star positions
var warpZ = 10,
    units = 2000,
    stars = [],
    cycle = 0,
    Z = 0 + 1/25;



// function to reset a star object
function resetstar(a)
{
   a.x = (Math.random() * width - (width * 0.5)) * warpZ;
   a.y = (Math.random() * height - (height * 0.5)) * warpZ;
   a.z = warpZ;
   a.px = 0;
   a.py = 0;
}

// initial star setup
for (var i=0, n; i<units; i++)
{
   n = {};
   resetstar(n);
   stars.push(n);
}

// star rendering anim function
function draw()
{
   ctx.fillStyle = "#000";
   ctx.fillRect(0, 0, width, height);

   // mouse position to head towards
   var cx = (mousex - width / 2) + centerX,
       cy = (mousey - height / 2) + centerY;

   // update all stars
   var sat = Math.floor(Z * 500);       // Z range 0.01 -> 0.5
   if (sat > 100) sat = 100;
   for (var i=0; i<units; i++)
   {
      var n = stars[i],            // the star
          xx = n.x / n.z,          // star position
          yy = n.y / n.z
          /*e = (1.0 / n.z + 1) * 1;   // size i.e. z*/

      if (n.px !== 0)
      {
         // hsl colour from a sine wave
         ctx.strokeStyle = "hsl(" + ((cycle * i) % 360) + "," + sat + "%,80%)";
         ctx.lineWidth = 1;
         ctx.beginPath();
         ctx.moveTo(xx + cx, yy + cy);
         ctx.lineTo(n.px + cx, n.py + cy);
         ctx.stroke();
      }

      // update star position values with new settings
      n.px = xx;
      n.py = yy;
      n.z -= Z;

      // reset when star is out of the view field
      if (n.z < Z || n.px > width || n.py > height)
      {
         // reset star
         resetstar(n);
      }
   }

   // colour cycle sinewave rotation
   cycle += 0.01;


};


const noise = () => {
  let canvas, ctx;

  let wWidth, wHeight;

  let noiseData = [];
  let frame = 0;

  let loopTimeout;


  // Create Noise
  const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
          if (Math.random() < 0.5) {
              buffer32[i] = 0xff000000;
          }
      }

      noiseData.push(idata);
  };


  // Play Noise
  const paintNoise = () => {
      if (frame === 9) {
          frame = 0;
      } else {
          frame++;
      }

      ctx.putImageData(noiseData[frame], 0, 0);
  };


  // Loop
  const loop = () => {
      paintNoise(frame);

      loopTimeout = window.setTimeout(() => {
          window.requestAnimationFrame(loop);
      }, (1000 / 25));
  };


  // Setup
  const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;

      canvas.width = wWidth;
      canvas.height = wHeight;

      for (let i = 0; i < 10; i++) {
          createNoise();
      }

      loop();
  };


  // Reset
  let resizeThrottle;
  const reset = () => {
      window.addEventListener('resize', () => {
          window.clearTimeout(resizeThrottle);

          resizeThrottle = window.setTimeout(() => {
              window.clearTimeout(loopTimeout);
              setup();
          }, 200);
      }, false);
  };


  // Init
  const init = (() => {
      canvas = document.getElementById('noise');
      ctx = canvas.getContext('2d');

      setup();
  })();
};

noise();
