// create elements
let container = document.createElement("div");
let gameFrame = document.createElement("div");
let topFrame = document.createElement("div");
let ceilsFrame = document.createElement("div");
let mainGameCon = document.createElement("div");
let ceilsCon = document.createElement("div");
let initiateCon = document.createElement("div");
let header = document.createElement("div");
let headerLogo = document.createElement("div");
let headerMenu = document.createElement("div");
let imgLightMode = document.createElement("img");
let imgNightMode = document.createElement("img");
let topFrameEmpty = document.createElement("div");
let leftPamel = document.createElement("div");
let secondCeilsCon = document.createElement("div");
let thirthCeilsCon = document.createElement("div");
let fourthCeilsCon = document.createElement("div");
let fifthCeilsCon = document.createElement("div");
let sixthCeilsCon = document.createElement("div");
let seventhCeilsCon = document.createElement("div");
let eigthCeilsCon = document.createElement("div");
let tenthCeilsCon = document.createElement("div");
let ceilsContainerAll = document.createElement("div");
let modalTab = document.createElement("div");
let resetButton = document.createElement("div");
let timerCon = document.createElement("div");
let saveGameBtn = document.createElement("div");
let choiceAnotherGameButton = document.createElement("div");
let crossIcon = document.createElement("img");
// audio effects
const winSound = new Audio("audio/winGame.mp3");
const clickSound = new Audio("audio/click.mp3");
const flagSound = new Audio("audio/flag.mp3");
// add path for icons of mode theme 
imgLightMode.src = "icons/1.svg";
imgNightMode.src = "icons/2.svg";
imgLightMode.alt = "LightIcon";
imgNightMode.alt = "NightIcon";



// add class for elements
container.classList = "container";
gameFrame.classList = "game_frame";
topFrame.classList = "top_frame";
mainGameCon.classList = "main_con";
ceilsCon.classList = "cells_con";
header.classList = "header";
headerLogo.classList = "header_logo";
headerMenu.classList = "header_menu";
imgLightMode.classList = "mode_icon";
imgNightMode.classList = "mode_icon";
leftPamel.classList = "left_panel";
ceilsContainerAll.classList = "con_for_general";
secondCeilsCon.classList = "cells_con";
thirthCeilsCon.classList = "cells_con";
fourthCeilsCon.classList = "cells_con";
fifthCeilsCon.classList = "cells_con";
sixthCeilsCon.classList = "cells_con";
seventhCeilsCon.classList = "cells_con";
eigthCeilsCon.classList = "cells_con";
tenthCeilsCon.classList = "cells_con";
crossIcon.classList = "cross_icon";
modalTab.classList = "modal_tab";
resetButton.classList = "reset_game_btn";
choiceAnotherGameButton.classList = "reset_game_btn";
timerCon.classList = "timer_con";
saveGameBtn.classList = "save_game_btn";
saveGameBtn.classList.add("reset_game_btn");
imgLightMode.id = "light";
imgNightMode.id = "night";
// add values for optional btn
headerLogo.innerText = "NonoGrams";

// past elements
let bodyTag = document.querySelector("body");
bodyTag.append(header);
header.append(headerLogo);
header.append(timerCon);
header.append(headerMenu);
headerMenu.append(saveGameBtn);
headerMenu.append(choiceAnotherGameButton);
container.append(resetButton);
resetButton.innerText = "Reset Game";
choiceAnotherGameButton.innerText = "Menu";
localStorage.setItem("nameSaveBtn","Save Game");
saveGameBtn.innerText = localStorage.getItem("nameSaveBtn");
headerMenu.append(imgLightMode);
headerMenu.append(imgNightMode);
bodyTag.append(container);
function simpleLevel() {
  topFrame.innerHTML = "";
  leftPamel.innerHTML = "";
  ceilsCon.innerHTML = "";
  mainGameCon.innerHTML = "";
  ceilsContainerAll.innerHTML = "";
  container.append(gameFrame);
  gameFrame.append(topFrame);
  topFrame.append(topFrameEmpty);
  gameFrame.append(mainGameCon);
  gameFrame.append(initiateCon);
  mainGameCon.append(leftPamel);
  mainGameCon.append(ceilsContainerAll);
  ceilsContainerAll.append(ceilsCon);
  timerCon.innerHTML = `<span class="minutes">00</span><span class="dividor">:</span><span class="seconds">00</span>`;
  for(let i = 0; i < 5; i ++) {
    topFrame.append(document.createElement("div"));
    leftPamel.append(document.createElement("div"));
  }
  for (let i = 0; i < 25; i++) {
    ceilsCon.append(document.createElement("div"));
  }
  let addClass = document.querySelectorAll(".cells_con div");
  addClass.forEach((el) => {
    el.classList = "cells_item";
  });
  // initial top frame 
}
// middle part game 
function middleLevel() {
  simpleLevel();
  ceilsContainerAll.style.maxWidth = "303px";
  secondCeilsCon.innerHTML = ceilsCon.innerHTML;
  thirthCeilsCon.innerHTML = ceilsCon.innerHTML;
  fourthCeilsCon.innerHTML = ceilsCon.innerHTML;
  tenthCeilsCon.innerHTML = ceilsCon.innerHTML;
  ceilsContainerAll.append(secondCeilsCon);
  ceilsContainerAll.append(thirthCeilsCon);
  ceilsContainerAll.append(fourthCeilsCon);
  for(let i = 0; i < 5; i ++) {
    topFrame.append(document.createElement("div"));
    leftPamel.append(document.createElement("div"));
  }
}
// advance level 
function advancedLevel() {
  middleLevel();
  ceilsContainerAll.style.maxWidth = "453px";
  fifthCeilsCon.innerHTML = ceilsCon.innerHTML;
  sixthCeilsCon.innerHTML = ceilsCon.innerHTML;
  seventhCeilsCon.innerHTML = ceilsCon.innerHTML;
  eigthCeilsCon.innerHTML = ceilsCon.innerHTML;
  ceilsContainerAll.append(fifthCeilsCon);
  ceilsContainerAll.append(sixthCeilsCon);
  ceilsContainerAll.append(seventhCeilsCon);
  ceilsContainerAll.append(eigthCeilsCon);
  ceilsContainerAll.append(tenthCeilsCon);
  for(let i = 0; i < 5; i ++) {
    topFrame.append(document.createElement("div"));
    leftPamel.append(document.createElement("div"));
  }

}
// timer 
function startTimer() {
  let seconds = 0;
  let minutes = 0;
  timerCon.innerHTML = `<span class="minutes">00</span><span class="dividor">:</span><span class="seconds">00</span>`;  
  let fieldForMinutes = document.querySelector(".minutes");
  let fieldForSeconds = document.querySelector(".seconds");
  setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes > 9) {
        fieldForMinutes.innerText = minutes;
      } else {
        fieldForMinutes.innerText = "0" + minutes;
      }
    }
    if (seconds > 9) {
      fieldForSeconds.innerText = seconds;
    } else {
      fieldForSeconds.innerText = "0" + seconds;
    }
  }, 1000);
}
// function for dark or light mode
let count = 1;
let bodyPart = document.querySelector("body");
function themeMode() {
  count ++;
  imgLightMode.src = `icons/${count}.svg`;
  header.style.transition = ".6s ease";
  header.style.background = "salmon";
  bodyPart.style.background = "#01797b";
  if (count === 2) {
    bodyPart.style.background = "#2e2e2e";
    header.style.background = "black";
    count = 0;
  }
}
imgLightMode.addEventListener("click", themeMode);

// dog combination
let arrCombination = ["<span>3</span>","<span>1</span><span>2</span>","<span>4</span>","<span>3</span>","<span>1</span>"];
let leftPanelCombination = ["<span>1</span>","<span>3</span><span>1</span>","<span>1</span><span>2</span>","<span>4</span>","<span>1</span><span>1</span>"];
let answerCombination = [2,5,6,7,9,10,12,13,15,16,17,18,21,23];
// some combination
let somePictureTop = ["<span>4</span>","<span>1</span>","<span>1</span>","<span>2</span>","<span>2</span><span>1</span>"];
let somePictureRow = ["<span>1</span><span>1</span>","<span>1</span><span>1</span>","<span>1</span>","<span>4</span>","<span>2</span>"];
let answerSomeCombination = [0,4,5,9,10,15,16,17,18,23,24];
// rock combination
let rockPictureTop = ["<span>2</span>","<span>3</span>","<span>3</span>","<span>2</span><span>1</span>","<span>1</span><span>2</span>"];
let rockPictureRow = ["<span>0</span>","<span>2</span>","<span>3</span>","<span>3</span><span>1</span>","<span>5</span>"];
let answerRockCombination = [8,9,11,12,13,15,16,17,19,20,21,22,23,24];
// smoke combination
let smokePictureTop = ["<span>1</span><span>2</span>","<span>2</span><span>1</span>","<span>4</span>","<span>2</span>","<span>1</span><span>1</span>"];
let smokePictureRow = ["<span>2</span>","<span>2</span><span>1</span>","<span>1</span><span>1</span>","<span>1</span><span>2</span>","<span>4</span>"];
let answerSmokeCombination = [0,1,6,7,9,10,12,15,17,18,21,22,23,24];
// bird combination
let birdPictureTop = ["<span>1</span>","<span>1</span>","<span>4</span>","<span>4</span>","<span>1</span><span>2</span>"];
let birdPictureRow = ["<span>2</span>","<span>1</span><span>3</span>","<span>2</span>","<span>4</span>","<span>1</span>"];
let answerBirdCombination = [2,3,5,7,8,9,12,13,16,17,18,19,24];
// MIDDLE LEVEL
// nature combination
let naturePictureTop = [
  "<span>9</span>",
  "<span>7</span>",
  "<span>2</span><span>3</span><span>1</span>",
  "<span>7</span>",
  "<span>1</span><span>3</span>",
  "<span>1</span><span>7</span>",
  "<span>3</span><span>1</span>",
  "<span>7</span>",
  "<span>1</span><span>3</span><span>2</span>",
  "<span>2</span><span>1</span><span>2</span>"
];
let naturePictureRow = [
  "<span>1</span><span>1</span><span>2</span><span>1</span>",
  "<span>1</span><span>1</span><span>1</span>",
  "<span>1</span><span>1</span><span>1</span>",
  "<span>4</span><span>3</span>",
  "<span>4</span><span>5</span>",
  "<span>4</span><span>1</span><span>2</span>",
  "<span>2</span><span>3</span><span>3</span>",
  "<span>2</span><span>3</span><span>1</span><span>1</span>",
  "<span>2</span><span>6</span>",
  "<span>3</span><span>1</span><span>2</span>"
];
let answerNatureCombination = [0,2,4,5,7,10,15,16,17,18,20,21,22,23,25,28,34,36,39,40,41,42,45,46,47,48,49,50,51,52,53,55,56,58,59,60,61,63,64,65,66,68,69,71,72,73,75,77,78,80,82,83,84,85,87,89,90,91,92,93,95,97,98];
let crazzyPictureTop = [
  "<span>4</span>",
  "<span>1</span><span>1</span><span>1</span>",
  "<span>9</span>",
  "<span>4</span><span>4</span>",
  "<span>5</span>",
  "<span>5</span>",
  "<span>6</span>",
  "<span>1</span><span>1</span><span>5</span>",
  "<span>9</span>",
  "<span>1</span>"
];
let crazzyPictureRow = [
  "<span>1</span><span>2</span>",
  "<span>3</span><span>1</span>",
  "<span>3</span><span>1</span>",
  "<span>4</span><span>3</span>",
  "<span>1</span><span>1</span><span>1</span><span>1</span>",
  "<span>8</span>",
  "<span>1</span><span>2</span><span>4</span>",
  "<span>4</span><span>4</span>",
  "<span>1</span><span>2</span><span>4</span>",
  "<span>1</span><span>1</span><span>3</span>"
];
let answerCrazzyCombination = [3,7,8,9,12,13,14,16,17,18,19,22,24,27,28,33,38,42,43,44,46,48,51,52,53,54,55,57,58,60,61,62,63,65,67,68,70,72,75,76,77,78,80,81,82,83,85,86,87,88,90,91,92,93,95,96,97];
let cancerPictureTop = [
  "<span>5</span><span>2</span>",
  "<span>3</span><span>3</span><span>1</span>",
  "<span>3</span>",
  "<span>5</span><span>2</span>",
  "<span>2</span><span>6</span>",
  "<span>6</span>",
  "<span>1</span><span>5</span><span>1</span>",
  "<span>1</span><span>5</span>",
  "<span>3</span>",
  "<span>2</span>"
];
let cancerPictureRow = [
  "<span>2</span><span>5</span>",
  "<span>6</span><span>1</span>",
  "<span>4</span><span>1</span><span>1</span>",
  "<span>1</span><span>2</span><span>4</span>",
  "<span>1</span><span>5</span>",
  "<span>1</span><span>4</span>",
  "<span>1</span><span>2</span><span>2</span><span>1</span>",
  "<span>1</span><span>2</span><span>2</span><span>1</span>",
  "<span>1</span><span>1</span>",
  "<span>2</span><span>1</span><span>1</span>"
];
let answerCancerCombination = [0,1,3,4,5,6,7,8,9,10,11,12,13,15,17,18,20,23,24,25,26,27,30,33,35,38,40,41,42,43,45,46,47,51,54,56,58,59,61,63,64,65,69,70,71,74,75,76,77,81,82,84,86,87,89,96];
let octopusPictureTop = [
  "<span>6</span><span>1</span>",
  "<span>1</span><span>2</span><span>4</span>",
  "<span>1</span><span>2</span><span>4</span>",
  "<span>3</span><span>5</span>",
  "<span>3</span><span>3</span>",
  "<span>1</span><span>5</span><span>1</span>",
  "<span>4</span>",
  "<span>2</span>",
  "<span>1</span><span>5</span><span>1</span>",
  "<span>8</span>"
];
let octopusPictureRow = [
  "<span>5</span><span>1</span>",
  "<span>1</span><span>3</span><span>1</span>",
  "<span>1</span><span>3</span><span>2</span>",
  "<span>3</span><span>1</span><span>2</span>",
  "<span>2</span><span>1</span><span>2</span>",
  "<span>1</span><span>1</span><span>1</span><span>3</span>",
  "<span>9</span>",
  "<span>7</span><span>1</span>",
  "<span>4</span><span>1</span><span>1</span>",
  "<span>3</span><span>2</span><span>1</span>"
];
let answerOctopusCombination = [0,1,2,3,4,5,8,9,10,12,13,14,15,16,17,20,21,28,30,34,38,39,40,43,44,45,48,49,50,53,56,57,58,59,60,61,62,63,64,66,67,68,69,71,72,73,75,77,78,79,80,81,82,83,84,85,86,89,91,94,94,96,98];
let standPictureTop = [
  "<span>5</span><span>3</span>",
  "<span>2</span>",
  "<span>3</span><span>1</span>",
  "<span>5</span><span>3</span>",
  "<span>4</span>",
  "<span>2</span><span>2</span>",
  "<span>3</span>",
  "<span>4</span>",
  "<span>3</span>",
  "<span>1</span><span>3</span><span>1</span>"
];
let standPictureRow = [
  "<span>1</span><span>2</span><span>1</span>",
  "<span>1</span><span>2</span><span>2</span><span>1</span>",
  "<span>1</span><span>2</span><span>1</span><span>2</span>",
  "<span>1</span><span>2</span><span>1</span><span>1</span>",
  "<span>1</span><span>2</span><span>1</span><span>1</span>",
  "<span>1</span><span>1</span><span>1</span><span>1</span>",
  "<span>1</span><span>2</span><span>1</span><span>1</span>",
  "<span>1</span><span>1</span><span>1</span>",
  "<span>1</span><span>1</span><span>1</span>",
  "<span>1</span><span>1</span><span>1</span><span>1</span>"
];
let answerStandCombination = [0,2,3,5,7,8,10,12,13,15,18,19,20,23,24,25,30,31,33,36,38,39,41,43,47,49,51,54,56,58,59,60,63,65,68,70,72,77,79,82,84,87,90,95,99];
// ADVANCED LEVEL
let dinosaursPictureTop = [
  "<span>14</span>",
  "<span>2</span>",
  "<span>10</span><span>1</span><span>1</span>",
  "<span>12</span>",
  "<span>7</span>",
  "<span>7</span><span>3</span>",
  "<span>12</span><span>1</span>",
  "<span>13</span>",
  "<span>4</span><span>9</span>",
  "<span>8</span><span>2</span>",
  "<span>4</span>",
  "<span>5</span><span>1</span><span>3</span>",
  "<span>1</span><span>12</span>",
  "<span>11</span>",
  "<span>8</span><span>2</span><span>2</span>"
];
let dinosaursPictureRow = [
  "<span>1</span><span>2</span><span>1</span><span>1</span><span>2</span><span>1</span>",
  "<span>1</span><span>7</span><span>1</span><span>1</span>",
  "<span>1</span><span>8</span><span>4</span>",
  "<span>1</span><span>8</span><span>4</span>",
  "<span>1</span><span>6</span><span>1</span><span>4</span>",
  "<span>1</span><span>6</span><span>1</span><span>3</span>",
  "<span>1</span><span>8</span><span>3</span>",
  "<span>1</span><span>8</span><span>3</span>",
  "<span>1</span><span>2</span><span>4</span><span>2</span>",
  "<span>1</span><span>2</span><span>4</span><span>3</span>",
  "<span>1</span><span>1</span><span>3</span><span>5</span>",
  "<span>2</span><span>1</span><span>4</span><span>1</span><span>2</span>",
  "<span>3</span><span>1</span><span>2</span><span>5</span>",
  "<span>1</span><span>8</span><span>1</span>",
  "<span>1</span><span>2</span><span>1</span>"
];
let answerDinosaursCombination = [0,2,3,5,7,8,9,10,12,13,14,15,17,18,19,20,22,23,24,26,28,30,31,32,33,35,36,37,38,39,40,41,42,43,44,45,46,47,49,51,52,54,56,59,61,62,63,64,66,67,68,69,71,72,73,74,75,77,78,79,80,82,83,84,85,87,88,89,90,92,93,95,97,98,100,101,102,104,105,106,107,108,109,110,111,112,113,114,116,117,118,119,121,122,123,124,127,128,129,132,133,134,137,138,139,142,143,147,148,149,150,153,155,156,158,160,161,162,165,172,176,177,178,180,181,182,183,185,187,188,190,191,192,193,194,198,199,200,201,202,203,204,205,207,208,210,211,212,213,214,215,216,217,219,221];
let labirintPictureTop = [
  "<span>14</span>",
  "<span>7</span>",
  "<span>4</span><span>8</span>",
  "<span>4</span><span>2</span><span>4</span>",
  "<span>5</span>",
  "<span>7</span><span>6</span>",
  "<span>10</span><span>1</span>",
  "<span>9</span>",
  "<span>2</span><span>7</span><span>3</span>",
  "<span>2</span><span>10</span>",
  "<span>11</span>",
  "<span>2</span><span>4</span><span>5</span>",
  "<span>12</span>",
  "<span>7</span>",
  "<span>3</span><span>4</span>"
];
let labirintPictureRow = [
  "<span>2</span><span>1</span><span>3</span><span>1</span><span>1</span>",
  "<span>4</span><span>5</span><span>1</span><span>1</span>",
  "<span>4</span><span>3</span><span>1</span><span>1</span><span>1</span>",
  "<span>4</span><span>4</span><span>1</span><span>1</span>",
  "<span>2</span><span>4</span><span>3</span>",
  "<span>2</span><span>10</span>",
  "<span>2</span><span>12</span>",
  "<span>5</span><span>9</span>",
  "<span>1</span><span>1</span><span>7</span><span>3</span>",
  "<span>1</span><span>1</span><span>3</span><span>3</span><span>3</span>",
  "<span>1</span><span>1</span><span>2</span><span>5</span>",
  "<span>1</span><span>2</span><span>1</span><span>5</span>",
  "<span>1</span><span>2</span><span>1</span><span>5</span>",
  "<span>1</span><span>2</span><span>2</span><span>2</span><span>2</span>",
  "<span>1</span><span>2</span><span>2</span><span>1</span>"
];
let answerLabirintCombination = [2,3,5,6,7,8,10,11,12,13,15,16,17,18,20,21,25,27,28,29,30,31,32,33,34,35,36,37,40,41,42,43,45,46,47,48,51,54,56,59,60,62,64,65,67,70,71,72,75,76,79,80,81,83,84,85,86,87,88,89,90,92,94,95,97,99,100,101,102,103,104,105,106,107,108,109,111,112,113,114,115,116,117,118,119,120,121,123,124,125,126,127,128,130,131,132,133,134,135,136,137,138,139,140,142,143,144,145,147,148,149,150,152,155,157,158,160,162,163,165,167,168,170,172,173,175,176,179,180,184,185,188,189,190,191,193,194,198,199,200,201,202,203,205,206,207,208,210,211,212,216,217,221];
let luminatePictureTop = [
  "<span>1</span><span>11</span>",
  "<span>14</span>",
  "<span>1</span><span>4</span>",
  "<span>10</span>",
  "<span>2</span><span>4</span>",
  "<span>1</span><span>8</span>",
  "<span>1</span><span>7</span><span>3</span>",
  "<span>1</span><span>9</span><span>1</span>",
  "<span>7</span><span>1</span>",
  "<span>1</span><span>2</span><span>9</span>",
  "<span>10</span><span>3</span>",
  "<span>5</span><span>7</span>",
  "<span>7</span>",
  "<span>1</span><span>10</span>",
  "<span>12</span>"
];
let luminatePictureRow = [
  "<span>3</span><span>1</span><span>2</span><span>1</span>",
  "<span>2</span><span>2</span><span>1</span><span>1</span><span>2</span>",
  "<span>1</span><span>1</span><span>1</span><span>4</span><span>1</span>",
  "<span>1</span><span>1</span><span>5</span><span>2</span>",
  "<span>2</span><span>1</span><span>3</span><span>2</span><span>2</span>",
  "<span>2</span><span>1</span><span>6</span><span>2</span>",
  "<span>2</span><span>1</span><span>6</span><span>3</span>",
  "<span>2</span><span>1</span><span>10</span>",
  "<span>2</span><span>1</span><span>3</span><span>6</span>",
  "<span>2</span><span>1</span><span>3</span><span>6</span>",
  "<span>2</span><span>3</span><span>1</span><span>4</span>",
  "<span>3</span><span>2</span><span>1</span><span>1</span><span>4</span>",
  "<span>3</span><span>3</span><span>4</span><span>1</span>",
  "<span>3</span><span>3</span><span>3</span><span>1</span>",
  "<span>3</span><span>1</span><span>3</span><span>1</span><span>1</span>"
];
let answerLuminateCombination = [2,3,4,5,6,8,9,11,13,16,18,20,21,23,27,29,31,33,35,38,39,42,43,44,46,47,48,50,53,55,56,60,61,63,65,66,68,69,70,71,73,74,80,81,83,85,86,88,90,91,93,95,96,98,101,102,103,104,106,107,108,109,110,111,112,113,114,115,116,117,119,120,121,122,124,125,126,127,129,130,131,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,155,156,157,159,160,161,162,164,165,166,167,169,170,171,172,174,175,176,177,179,180,182,184,185,186,189,190,191,194,196,197,198,201,202,203,204,206,207,208,209,210,211,212,214,215,216,219,220,224];
let comoPictureTop = [
  "<span>3</span><span>1</span><span>8</span>",
  "<span>10</span>",
  "<span>3</span><span>10</span>",
  "<span>1</span><span>2</span><span>9</span>",
  "<span>4</span><span>4</span>",
  "<span>6</span><span>4</span>",
  "<span>4</span><span>7</span>",
  "<span>1</span><span>9</span><span>1</span>",
  "<span>2</span><span>11</span>",
  "<span>13</span>",
  "<span>2</span>",
  "<span>7</span><span>4</span><span>1</span>",
  "<span>8</span><span>3</span><span>1</span>",
  "<span>9</span>",
  "<span>3</span><span>9</span>"
];
let comoPictureRow = [
  "<span>1</span><span>2</span><span>2</span><span>2</span><span>1</span>",
  "<span>3</span><span>1</span><span>1</span><span>2</span><span>1</span>",
  "<span>7</span><span>1</span><span>2</span><span>1</span>",
  "<span>7</span><span>1</span><span>2</span>",
  "<span>2</span><span>5</span><span>2</span>",
  "<span>2</span><span>5</span><span>3</span>",
  "<span>3</span><span>1</span><span>3</span><span>4</span>",
  "<span>4</span><span>1</span><span>3</span><span>3</span>",
  "<span>5</span><span>4</span><span>1</span><span>2</span>",
  "<span>5</span><span>4</span><span>4</span>",
  "<span>5</span><span>9</span>",
  "<span>1</span><span>13</span>",
  "<span>1</span><span>2</span><span>2</span><span>2</span><span>2</span>",
  "<span>1</span><span>2</span><span>5</span><span>1</span><span>2</span>",
  "<span>1</span><span>2</span><span>2</span><span>2</span><span>1</span><span>1</span>"
];
let answerComoCombination = [0,3,4,5,6,7,9,10,11,12,13,14,16,17,18,19,20,21,27,28,33,35,36,39,40,41,42,44,45,46,47,48,49,51,52,54,56,57,59,61,62,64,66,67,71,72,76,77,81,82,83,85,86,87,88,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,107,108,109,110,112,113,114,116,117,118,119,121,122,123,124,126,127,128,131,132,133,134,137,138,139,141,143,144,146,147,148,149,150,151,152,153,154,155,157,158,159,160,162,163,165,167,168,170,172,173,176,177,178,179,180,181,182,183,184,185,186,188,189,190,191,192,193,194,195,196,198,199,200,201,202,203,204,205,206,207,208,209,213,214,216,218,219,222,224];
let combinationPictureTop = [
  "<span>1</span><span>8</span><span>3</span>",
  "<span>5</span><span>5</span>",
  "<span>8</span><span>4</span>",
  "<span>1</span><span>11</span>",
  "<span>5</span><span>8</span>",
  "<span>5</span>",
  "<span>1</span>",
  "<span>1</span><span>2</span>",
  "<span>1</span><span>6</span><span>3</span>",
  "<span>1</span>",
  "<span>3</span><span>1</span><span>8</span>",
  "<span>1</span><span>4</span><span>7</span>",
  "<span>11</span>",
  "<span>10</span>",
  "<span>1</span><span>5</span><span>2</span>"
];
let combinationPictureRow = [
  "<span>3</span><span>1</span><span>1</span><span>2</span><span>1</span>",
  "<span>4</span><span>1</span><span>1</span><span>1</span>",
  "<span>2</span><span>1</span><span>1</span><span>2</span>",
  "<span>3</span><span>1</span><span>3</span>",
  "<span>5</span><span>4</span>",
  "<span>1</span><span>2</span><span>1</span><span>3</span>",
  "<span>1</span><span>3</span><span>1</span><span>4</span>",
  "<span>1</span><span>3</span><span>1</span><span>1</span><span>3</span>",
  "<span>1</span><span>3</span><span>1</span><span>5</span>",
  "<span>1</span><span>4</span><span>1</span><span>5</span>",
  "<span>6</span><span>1</span><span>5</span>",
  "<span>5</span><span>5</span>",
  "<span>7</span><span>1</span><span>2</span><span>1</span>",
  "<span>2</span><span>2</span><span>2</span><span>2</span><span>1</span>",
  "<span>2</span><span>1</span><span>2</span><span>2</span>"
];
let answerCombinationCombination = [0,1,2,4,6,7,8,9,11,12,14,15,16,17,19,20,21,22,23,24,27,33,50,51,54,55,57,60,62,63,66,67,68,70,71,72,73,75,77,78,80,82,83,84,85,87,88,89,90,93,94,95,97,98,99,103,108,113,115,118,120,123,126,127,128,131,132,133,134,135,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,161,162,163,164,165,166,168,169,170,171,173,175,178,180,184,185,186,188,192,193,197,198,200,201,202,203,204,205,206,207,208,210,211,214,215,216,219,220,221];

let boxWithPlates = document.querySelectorAll(".cells_con div");
function setAnswersBlocks(answerArr) {
  let boxWithPlates = document.querySelectorAll(".cells_con div");
  for (let i = 0; i < answerArr.length; i++) {
    boxWithPlates[answerArr[i]].classList.add("done");
  }
}
let countForCross = 0;
let winCounter = 0;
function addBlackMark(answerArr) {
  stepsArr = [];
  let timerCounter = 0;
  timerCon.style.display = "block";
  let currentDivsForClick = document.querySelectorAll(".cells_con div");
  currentDivsForClick.forEach((el,i) => {
    el.addEventListener("contextmenu", (e) => {
      flagSound.play();
      countForCross++;
      // disable context menu
      e.preventDefault();
      el.innerHTML = "<img src='icons/cross.png' class='cross_icon' alt='crossIcon'>";
      el.classList.toggle("cross_active");
    });
    el.addEventListener("click", (e) => {
      clickSound.play();
      if (timerCounter === 0) {
        startTimer();
        timerCounter = 1;
      }
      el.classList.toggle("active");
      if(el.classList.value === "cells_item done active") {
        if(el.classList.value !== "cells_item done active clicked") {
          console.log("You are right");
          winCounter++;
          console.log(winCounter);
          el.classList.add("clicked");
        }
        if(winCounter === answerArr.length) {
          winSound.play();
          console.log("Player win!!!");
          timerCon.style.display = "none";
          winGame();
        }
      } else {
        console.log("You are wrong");
      }
    });
  })
}
function menuTab() {
  return `<div class="additional_game_block">
        <h2 class="another_game_title">Choice Another Game</h2>
        <div class="easy_topic_title">
          5x5
        </div>
          <div class="easy_topic">
            <div class="easy_topic__block" id="dogGame">
              <img src="img/dog.JPG" alt="IconCard" class="easy_topic__block__img">
              <h3 class="easy_topic__block__title">
                Dog picture
              </h3>
            </div>
            <div class="easy_topic__block" id="someGame">
              <img src="img/something.JPG" alt="IconCard" class="easy_topic__block__img">
              <h3 class="easy_topic__block__title">
                Some Picture
              </h3>
            </div>
            <div class="easy_topic__block" id="rockGame">
              <img src="img/rock.JPG" alt="IconCard" class="easy_topic__block__img">
              <h3 class="easy_topic__block__title">
                Rock Picture
              </h3>
            </div>
            <div class="easy_topic__block" id="smokeGame">
              <img src="img/smoke.JPG" alt="IconCard" class="easy_topic__block__img">
              <h3 class="easy_topic__block__title">
                Smoke Picture
              </h3>
            </div>
            <div class="easy_topic__block" id="birdGame">
              <img src="img/bird.JPG" alt="IconCard" class="easy_topic__block__img">
              <h3 class="easy_topic__block__title">
                Bird Picture
              </h3>
            </div>
          </div>
        <div class="easy_topic_title">
          10x10
        </div>
          <div class="easy_topic">
            <div class="easy_topic__block" id="crossFordGame">
              <img src="img/crossford.JPG" alt="IconCard" class="easy_topic__block__img">
              <h3 class="easy_topic__block__title">
                CrossFord
              </h3>
            </div>
            <div class="easy_topic__block" id="crazzyGame">
              <img src="img/crazzy.JPG" alt="IconCard" class="easy_topic__block__img">
              <h3 class="easy_topic__block__title">
                Crazzy Picture
              </h3>
            </div>
            <div class="easy_topic__block" id="cancerGame">
              <img src="img/cancer.JPG" alt="IconCard" class="easy_topic__block__img">
              <h3 class="easy_topic__block__title">
                Cancer Picture
              </h3>
            </div>
            <div class="easy_topic__block" id="octopusGame">
              <img src="img/octopus.JPG" alt="IconCard" class="easy_topic__block__img">
              <h3 class="easy_topic__block__title">
                Octopus Picture
              </h3>
            </div>
            <div class="easy_topic__block" id="standGame">
              <img src="img/stand.JPG" alt="IconCard" class="easy_topic__block__img">
              <h3 class="easy_topic__block__title">
                Stand Picture
              </h3>
            </div>
          </div>
        <div class="easy_topic_title">
          15x15
        </div>
          <div class="easy_topic">
            <div class="easy_topic__block" id="dinosaursGame">
              <img src="img/dinosaurs.JPG" alt="IconCard" class="easy_topic__block__img">
              <h3 class="easy_topic__block__title">
                Dinosaurs
              </h3>
            </div>
            <div class="easy_topic__block" id="labirintGame">
              <img src="img/labirint.JPG" alt="IconCard" class="easy_topic__block__img">
              <h3 class="easy_topic__block__title">
                Labirint
              </h3>
            </div>
            <div class="easy_topic__block" id="luminateGame">
              <img src="img/luminate.JPG" alt="IconCard" class="easy_topic__block__img">
              <h3 class="easy_topic__block__title">
                Luminate
              </h3>
            </div>
            <div class="easy_topic__block" id="comoGame">
              <img src="img/como.JPG" alt="IconCard" class="easy_topic__block__img">
              <h3 class="easy_topic__block__title">
                Como
              </h3>
            </div>
            <div class="easy_topic__block" id="combinationGame">
              <img src="img/combination.JPG" alt="IconCard" class="easy_topic__block__img">
              <h3 class="easy_topic__block__title">
                Combination
              </h3>
            </div>
          </div>
      </div>`;
}
function addEventsForGames() {
  let topicItem = document.querySelector("#dogGame");
    let topicForSome = document.querySelector("#someGame");
    let topicForRock = document.querySelector("#rockGame");
    let topicForSmoke = document.querySelector("#smokeGame");
    let topicForBird = document.querySelector("#birdGame");
    let topicForCrossFord = document.querySelector("#crossFordGame");
    let topicForCrazzy = document.querySelector("#crazzyGame");
    let topicForCancer = document.querySelector("#cancerGame");
    let topicForOctopus = document.querySelector("#octopusGame");
    let topicForStand = document.querySelector("#standGame");
    let topicForDinosaurs = document.querySelector("#dinosaursGame");
    let topicForLabirint = document.querySelector("#labirintGame");
    let topicForLuminate = document.querySelector("#luminateGame");
    let topicForCombination = document.querySelector("#combinationGame");
    let topicForComo = document.querySelector("#comoGame");
    topicItem.addEventListener("click", () => {
      container.innerHTML = "";
      winCounter = 0;
      container.append(resetButton);
      localStorage.setItem("answer", answerCombination);
      startGame(arrCombination, leftPanelCombination, answerCombination);
    });
    topicForSome.addEventListener("click", () => {
      container.innerHTML = "";
      winCounter = 0;
      container.append(resetButton);
      localStorage.setItem("answer", answerSomeCombination);
      startGame(somePictureTop, somePictureRow, answerSomeCombination);
    });
    topicForRock.addEventListener("click", () => {
      container.innerHTML = "";
      winCounter = 0;
      container.append(resetButton);
      localStorage.setItem("answer", answerRockCombination);
      startGame(rockPictureTop, rockPictureRow, answerRockCombination);
    });
    topicForSmoke.addEventListener("click", () => {
      container.innerHTML = "";
      winCounter = 0;
      container.append(resetButton);
      localStorage.setItem("answer", answerSmokeCombination);
      startGame(smokePictureTop, smokePictureRow, answerSmokeCombination);
    });
    topicForBird.addEventListener("click", () => {
      container.innerHTML = "";
      winCounter = 0;
      container.append(resetButton);
      localStorage.setItem("answer", answerBirdCombination);
      startGame(birdPictureTop, birdPictureRow, answerBirdCombination);
    });
    topicForCrossFord.addEventListener("click", () => {
      container.innerHTML = "";
      winCounter = 0;
      container.append(resetButton);
      localStorage.setItem("answer", answerNatureCombination);
      initialMiddleLevel(naturePictureTop, naturePictureRow, answerNatureCombination);
    });
    topicForCrazzy.addEventListener("click", () => {
      container.innerHTML = "";
      winCounter = 0;
      container.append(resetButton);
      localStorage.setItem("answer", answerCrazzyCombination);
      initialMiddleLevel(crazzyPictureTop, crazzyPictureRow, answerCrazzyCombination);
    });
    topicForCancer.addEventListener("click", () => {
      container.innerHTML = "";
      winCounter = 0;
      container.append(resetButton);
      localStorage.setItem("answer", answerCancerCombination);
      initialMiddleLevel(cancerPictureTop, cancerPictureRow, answerCancerCombination);
    });
    topicForOctopus.addEventListener("click", () => {
      container.innerHTML = "";
      winCounter = 0;
      container.append(resetButton);
      localStorage.setItem("answer", answerOctopusCombination);
      initialMiddleLevel(octopusPictureTop, octopusPictureRow, answerOctopusCombination);
    });
    topicForStand.addEventListener("click", () => {
      container.innerHTML = "";
      winCounter = 0;
      container.append(resetButton);
      localStorage.setItem("answer", answerStandCombination);
      initialMiddleLevel(standPictureTop, standPictureRow, answerStandCombination);
    });
    topicForDinosaurs.addEventListener("click", () => {
      container.innerHTML = "";
      winCounter = 0;
      container.append(resetButton);
      localStorage.setItem("answer", answerDinosaursCombination);
      initialAdvacedLevel(dinosaursPictureTop, dinosaursPictureRow, answerDinosaursCombination);
    });
    topicForLabirint.addEventListener("click", () => {
      container.innerHTML = "";
      winCounter = 0;
      container.append(resetButton);
      localStorage.setItem("answer", answerLabirintCombination);
      initialAdvacedLevel(labirintPictureTop, labirintPictureRow, answerLabirintCombination);
    });
    topicForLuminate.addEventListener("click", () => {
      container.innerHTML = "";
      winCounter = 0;
      container.append(resetButton);
      localStorage.setItem("answer", answerLuminateCombination);
      initialAdvacedLevel(luminatePictureTop, luminatePictureRow, answerLuminateCombination);
    });
    topicForComo.addEventListener("click", () => {
      container.innerHTML = "";
      winCounter = 0;
      container.append(resetButton);
      localStorage.setItem("answer", answerComoCombination);
      initialAdvacedLevel(comoPictureTop, comoPictureRow, answerComoCombination);
    });
    topicForCombination.addEventListener("click", () => {
      container.innerHTML = "";
      winCounter = 0;
      container.append(resetButton);
      localStorage.setItem("answer", answerCombinationCombination);
      initialAdvacedLevel(combinationPictureTop, combinationPictureRow, answerCombinationCombination);
    });
}
function winGame() {
  let fieldForSeconds = document.querySelector(".seconds").innerText;
  let fieldForMinutes = document.querySelector(".minutes").innerText;
  if(fieldForMinutes > 0) {
    container.innerHTML = `<h2 class="winner_title">Great! You have solved the nonogram  in ${fieldForMinutes} minutes and ${fieldForSeconds} seconds!</h2>` + menuTab();
  } else {
    container.innerHTML = `<h2 class="winner_title">Great! You have solved the nonogram  in ${fieldForSeconds} seconds!</h2>` + menuTab();
  }
  addEventsForGames();
}
function looseGame() {
  let currentDivsForClick = document.querySelectorAll(".cells_con div");
  currentDivsForClick.forEach((el) => {
    if(el.classList.value === "cells_item done") {
      el.style.background = "green";
    }
  });
}
function startGame(top,left, answerForCur) {
  localStorage.setItem("answer", answerForCur);
  simpleLevel();
  let topFrameDivs = document.querySelectorAll(".top_frame div");
  let leftPanelDivs = document.querySelectorAll(".left_panel div");
  for (let i = 0; i < topFrameDivs.length-1; i++) {
    topFrameDivs[i+1].innerHTML = top[i];
  }
  for (let i = 0; i < leftPanelDivs.length; i++) {
    leftPanelDivs[i].innerHTML = left[i];
  }
  addBlackMark(answerForCur);
  setAnswersBlocks(answerForCur);
  resetButton.addEventListener("click", () => {
    winCounter = 0;
    startGame(top,left, answerForCur);
  });
}

function initialMiddleLevel(top, left, answerArr) {
  stepsArr.push(answerArr);
  middleLevel();
  addBlackMark(answerArr);
  setAnswersBlocks(answerArr);
  let topFrameDivs = document.querySelectorAll(".top_frame div");
  let leftPanelDivs = document.querySelectorAll(".left_panel div");
  for (let i = 0; i < topFrameDivs.length-1; i++) {
    topFrameDivs[i+1].innerHTML = top[i];
  }
  for (let i = 0; i < leftPanelDivs.length; i++) {
    leftPanelDivs[i].innerHTML = left[i];
  }
  resetButton.addEventListener("click", () => {
    winCounter = 0;
    initialMiddleLevel(top, left, answerArr);
  });
}
function initialAdvacedLevel(top, left, answerArr) {
  stepsArr.push(answerArr);
  advancedLevel();
  addBlackMark(answerArr);
  setAnswersBlocks(answerArr);
  let topFrameDivs = document.querySelectorAll(".top_frame div");
  let leftPanelDivs = document.querySelectorAll(".left_panel div");
  for (let i = 0; i < topFrameDivs.length-1; i++) {
    topFrameDivs[i+1].innerHTML = top[i];
  }
  for (let i = 0; i < leftPanelDivs.length; i++) {
    leftPanelDivs[i].innerHTML = left[i];
  }
  resetButton.addEventListener("click", () => {
    winCounter = 0;
    initialAdvacedLevel(top, left, answerArr);
  });
}
function showMenu() {
  timerCon.style.display = "none";
  container.innerHTML = menuTab();
  addEventsForGames();
}
let newCounterWin = 0;
function saveGameFunction() {
  if(saveGameBtn.innerText === "Save Game") {
    localStorage.setItem("conVal", container.innerHTML);
    localStorage.setItem("nameSaveBtn","Continue Last Game");
    saveGameBtn.innerText = "Continue Last Game";
    localStorage.setItem("currCounter", winCounter)
  }
  if (saveGameBtn.innerText === "Continue Last Game") {
    container.innerHTML = localStorage.getItem("conVal");
    winCounter = localStorage.getItem("currCounter");
    addBlackMark(localStorage.getItem("answer"));
  }
}
saveGameBtn.addEventListener("click", saveGameFunction);
choiceAnotherGameButton.addEventListener("click", showMenu);
startGame(arrCombination, leftPanelCombination, answerCombination);