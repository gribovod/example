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

}
// -------------------------------------------------------------

// initialization
$(function(){
    canvas = document.getElementById('scene');
    canvas.width  = iXCnt * iCellSize;
    canvas.height = iYCnt * iCellSize;
    context = canvas.getContext('2d');

       // load images
    imgBrick = new Image();
    imgBrick.src = 'images/brick.png';
    imgSteel = new Image();
    imgSteel.src = 'images/steel.png';
    imgWater = new Image();
    imgWater.src = 'images/water.png';
    imgForest = new Image();
    imgForest.src = 'images/forest.png';

    imgTank = new Image();
    imgTank.src = 'images/tank.png';
    oTank = new Tank(iCellSize*9, iCellSize*24, 48, 48, imgTank);

   

    setInterval(drawScene, 40); // loop drawScene
});