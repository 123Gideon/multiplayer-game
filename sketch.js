var canvas;
var backgroundImage;
var MyForm, MyPlayer, MyGame;
var myplayercount,mygamestate

function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
   database = firebase.database();
  MyGame = new Game();
  MyGame.start();

  MyGame.getstate()
}


function draw() {
  background(backgroundImage);

  if(myplayercount===2){
    MyGame.UpdateState(1)
  }

  if(mygamestate===1){
    MyGame.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
