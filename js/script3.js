// inner variables
var canvas, context; // canvas and context objects
var imgBrick, imgSteel, imgWater, imgForest, imgTank; // images
var aMap; // map array
var oTank; // tank object

var iCellSize = 24; // cell wide
var iXCnt = 26; // amount of X cells
var iYCnt = 26; // amount of Y cells

// objects :
function Tank(x, y, w, h, image) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.i = 0;
    this.image = image;
}

// functions
function clear() { // clear canvas function
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawScene() { // main drawScene function
    clear(); // clear canvas

    // fill background
    context.fillStyle = '#111';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // save current context
    context.save();

    // walk through our array
    for (var y = 0; y < iYCnt; y++) { 
        for (var x = 0; x < iXCnt; x++) {
            switch (aMap[y][x]) {
                case 0: // skip
                    break;
                case 1: // draw brick block
                    context.drawImage(imgBrick, 0, 0, iCellSize, iCellSize, x*iCellSize, y*iCellSize, iCellSize, iCellSize);
                    break;
                case 2: // draw steel block
                    context.drawImage(imgSteel, 0, 0, iCellSize, iCellSize, x*iCellSize, y*iCellSize, iCellSize, iCellSize);
                    break;
               
            }
        }
    }

    // restore current context
    context.restore();

    // draw tank
    context.drawImage(oTank.image, oTank.i*oTank.w, 0, oTank.w, oTank.h, oTank.x, oTank.y, oTank.w, oTank.h);
}
// -------------------------------------------------------------

// initialization
$(function(){
    canvas = document.getElementById('scene');
    canvas.width  = iXCnt * iCellSize;
    canvas.height = iYCnt * iCellSize;
    context = canvas.getContext('2d');

    // main scene Map array
    aMap = ([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 4, 4, 4, 4, 1, 1, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0],
      [0, 0, 0, 0, 4, 4, 4, 4, 1, 1, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0],
      [0, 0, 2, 2, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 3, 3, 3, 1, 1, 0, 0, 4, 4, 4, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [3, 3, 3, 3, 1, 1, 0, 0, 4, 4, 4, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2],
      [3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2],
      [0, 0, 1, 1, 4, 4, 4, 4, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 4, 4, 4, 4, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 0, 0, 1, 1, 0, 0],
      [2, 2, 0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 2, 2, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 2, 2, 0, 0, 0, 0]
    ]);

    // load images
    imgBrick = new Image();
    imgBrick.src = 'images/brick.png';
    imgSteel = new Image();
    imgSteel.src = 'images/steel.png';
    imgWater = new Image();
    imgWater.src = 'images/water.png';
    imgForest = new Image();
    imgForest.src = 'images/forest.png';

    
    setInterval(drawScene, 40); // loop drawScene
});