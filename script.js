//Global vars
// var pattern = [2, 2, 4, 3]; //test pattern
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.2;
var taps = 0;
var guessCounter = 0;
var difficulty = 3;
var diffsub = 10;
var lives = 3;
var TH = 0;
var name = 124;

//Difficult Settings
var clueHoldTime = 650;
var cluePauseTime = 450;
var nextClueWaitTime = 750;
function diff(mode) {
  difficulty = mode;
  if (mode == 4) {
     diffsub = 15;
  } else if (mode == 5) {
    diffsub = 20;
  } else if (mode == 10){
    diffsub = 25;
  }
}

//Dont worry about it
document.getElementById("body").classList.remove("hidden");

//Starts the game
function startGame() {
  clueHoldTime = 600;
  cluePauseTime = 450;
  nextClueWaitTime = 750;
  pattern = [];
  progress = 0;
  lives = 3;
  gamePlaying = true;
  
  //Secret Pattern
  for(let i = 0; i < (3*difficulty); ++i){
    pattern.push(Math.floor((Math.random()*8)+1))
  }
  //console.log(pattern);
  
  document.getElementById("lives").innerHTML = "Lives: " + lives;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("Easy").classList.add("hidden");
  document.getElementById("Med").classList.add("hidden");
  document.getElementById("Hard").classList.add("hidden");
  document.getElementById("diff_sel").classList.add("hidden");
  document.getElementById("Thunderdome").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("lives").classList.remove("hidden");
  document.getElementById("gameButtonArea").classList.remove("hidden");
  
  playClueSequence();
}

// Stops the game
function stopGame() {
  TH = 0;
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("Easy").classList.remove("hidden");
  document.getElementById("Med").classList.remove("hidden");
  document.getElementById("Hard").classList.remove("hidden");
  document.getElementById("diff_sel").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("lives").classList.add("hidden");
  document.getElementById("gameButtonArea").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 150,
  2: 200,
  3: 250,
  4: 300,
  5: 350,
  6: 400,
  7: 450,
  8: 500,
};

//Plays the tones of each button when pressed
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

// Yes
function Game_Title(){
  ++name;
  document.getElementById("GT").innerHTML = name + " Memory";
  if(name == 420){
    document.getElementById("GT").style.color = "green";
  }else{
    document.getElementById("GT").style.color = "white";
  }
}

//Starts the tone of each button
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function Thunderdome(){
  if(TH == 4){
    document.getElementById("Thunderdome").classList.remove("hidden");
  }else{
    TH++;
  }
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function annoying(){
  ++taps;
  if (taps == 10){
    alert("Stop that and play the game!");
  }else if (taps == 20){
    alert("Now you are really starting to annoy me");
  }else if (taps == 50){
    stopGame();
    alert("You can no longer play! You keep clicking me even though I warned you!");
    document.getElementById("body").classList.add("hidden");
  }
}

function loseGame() {
  stopGame();
  alert("Game over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game over You won.");
}

function loselives(){
  lives--;
  document.getElementById("lives").innerHTML = "Lives: " + lives;
  if (lives == 0){
    loseGame();
  }
}

function guess(btn) {
  // console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (btn == pattern[guessCounter]) {
    taps = 0;
    if (guessCounter == progress) {
      clueHoldTime = clueHoldTime - diffsub;
      cluePauseTime = clueHoldTime * .9;
      // console.log(clueHoldTime +":"+cluePauseTime);
      if (progress == pattern.length - 1) {
        winGame();
        console.log("You won the game!");
        return;
      } else {
        ++progress;
        playClueSequence();
      }
    } else {
      ++guessCounter;
    }
  } else {
    loselives();
    console.log("Get rekt!");
  }
}