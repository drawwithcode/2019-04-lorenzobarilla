var mySong;
var myImage;
var analyzer;

function preload() {
  mySong = loadSound("./assets/winter-song.mp3");
  myImage = loadImage("./assets/snowflakes.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //backgorund image
  imageMode(CENTER); //change origin point of the image
  myImage.filter(GRAY);
  image(myImage, windowWidth / 2, windowHeight / 2, myImage.width / 2, myImage.height / 2);

  //creating analyzer
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
}

function draw() {
  //declaring variables
  var volume = 0;
  var colore = 0;
  var colore2 = 0;

  //map variables
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height / 2);

  colore = analyzer.getLevel();
  colore = map(colore, 0, 1, 0, 155);

  colore2 = analyzer.getLevel();
  colore2 = map(colore2, 0, 1, 0, 100);

  //create snowflake
  push();
  strokeWeight(2.5);
  stroke(100 + colore, 100 + colore, 200 + colore2);
  noFill();
  translate(windowWidth / 2, windowHeight / 2, );
  rotate(frameCount / 100);
  line(-volume, 0, volume, 0);
  line(0, -volume, 0, volume);
  pop();

  //create text
  push();
  textSize(20);
  fill(100, 100, 200);
  noStroke();
  text("click to play/pause", windowWidth - 250, windowHeight - 50);
  pop();
}

//play-pause when mousepressed
function mousePressed() {
  if (!mySong.isPlaying()) {
    mySong.play();
  } else {
    mySong.pause();
  }
}
