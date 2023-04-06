/**
 * Initial References
 */
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");
const startBtn = document.getElementById("start");
const controls = document.querySelector(".controls-container");


//Start Game
startBtn.addEventListener("click", () => {
  controls.classList.add("hide");
  init();
});


/**
 * Options values for buttons
 */ 
let options = {
  fruits: [
    "Apple",
    "Blueberry",
    "Mandarin",
    "Pineapple",
    "Pomegranate",
    "Watermelon",
  ],
  animals: [
    "Hedgehog", 
    "Rhinoceros", 
    "Squirrel", "Panther", 
    "Walrus", 
    "Zebra"
  ],
  countries: [
    "India",
    "Hungary",
    "Kyrgyzstan",
    "Switzerland",
    "Zimbabwe",
    "Dominica",
  ],
};


let winCount = 0;
let count = 0;

let chosenWord = "";


const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};


const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};


const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");
 
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  chosenWord = chosenWord.toUpperCase();

  
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');


  userInputSection.innerHTML = displayItem;
  userInputSection.innerHTML += `<div id='chanceCount'>Chances Left: ${lossCount}</div>`;
};


const initializer = () => {
  winCount = 0;
  lossCount = 0;
  count = 0;
  lossCount = 6;

  
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    
    button.innerText = String.fromCharCode(i);
    
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          
          if (char === button.innerText) {
            
            dashes[index].innerText = char;
            
            winCount += 1;

            
            
            if (winCount == charArray.length) {
              resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              
              blocker();

            }
          }
        });
      } else {


        button.classList.add("incorrect");
              lossCount -= 1;
              document.getElementById(
                "chanceCount"
              ).innerText = `Chances Left: ${lossCount}`;
      
        count += 1;
       
        drawMan(count);
       
        if (count == 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          blocker();


        }
      }
      
      button.disabled = true;
    });
    letterContainer.append(button);
  }

  displayOptions();
 
  let { initialDrawing } = canvasCreator();
 
  initialDrawing();
};


const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  /**
   * For drawing lines
   */ 
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  const body = () => {
    drawLine(70, 40, 70, 80);
  };

  const leftArm = () => {
    drawLine(70, 50, 50, 70);
  };

  const rightArm = () => {
    drawLine(70, 50, 90, 70);
  };

  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };

  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };

  //initial frame
  const initialDrawing = () => {
    //clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //bottom line
    drawLine(10, 130, 130, 130);
    //left line
    drawLine(10, 10, 10, 131);
    //top line
    drawLine(10, 10, 70, 10);
    //small top line
    drawLine(70, 10, 70, 20);
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

//draw the man
const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};

/**
 * New Game
 */
newGameButton.addEventListener("click", initializer);
window.onload = initializer;