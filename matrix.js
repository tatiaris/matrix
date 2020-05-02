var chars;
var grid;
var scl;
var cGrid;
var pause;

function setup() {
  pause = false;
  var cnv = createCanvas(innerWidth/2, innerHeight/2);
  cnv.parent('sketch-holder');
  scl = 40;
  chars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  grid = [];
  for(var i = 0; i < height/scl; i++){
    grid[i] = [];
    for(var j = 0; j < width/scl; j++)
      grid[i][j] = chars[int(random(0, chars.length))];
  }

  cGrid = [];
  for(var i = 0; i < height/scl; i++){
  cGrid[i] = [];
    for(var j = 0; j < width/scl; j++)
      cGrid[i][j] = 0;
  }
  frameRate(20)
}
function draw() {
  if(!pause){
    // createCanvas(innerWidth, innerHeight);
    background(0);
    displayGrid();
    updateGrid();
    updateCGrid();
  }
}
function displayGrid() {
  stroke(0);
  textSize(24);
  for(var i = 0; i < grid.length - 1; i++){
    for(var j = 0; j < grid[i].length - 1; j++){
      fill(0,cGrid[i][j],0);
      text(grid[i][j], scl*(j+1), scl*(i+1));
    }
  }
}
function updateCGrid() {
  for (var i = 0; i < cGrid[0].length; i++){
    if (cGrid[1][i] - scl > 0)  cGrid[0][i] = cGrid[1][i] - scl;
    else{
      var rand = random(0, 10);
      if(rand < 0.25)  cGrid[0][i] = 255;
      else cGrid[0][i] = 20;
    }
  }
  for (var j = cGrid[0].length - 1; j >= 0; j--)
    for (var i = cGrid.length - 1; i > 0; i--)
      cGrid[i][j] = cGrid[i-1][j];
}
function updateGrid() {
  for(var i = grid.length - 1; i > 0; i--){
    for(var j = grid[i].length - 1; j >= 0; j--){
      grid[i][j] = chars[int(random(0, chars.length))];
    }
  }
}
function keyPressed() {
  if (keyCode == 70){
    var fs = fullscreen();
    fullscreen(!fs);
  }
  if (keyCode == 32){
    pause = !pause;
  }
  if (keyCode == 77){

  }
}
