let button = document.querySelector("#ask");
let answer = document.querySelector("#answer");
let input = document.querySelector("#questionArea");
let reset = document.querySelector("#reset")

button.addEventListener("click", eightBallFunction);
reset.addEventListener("click", resetButton);

function resetButton(){
  input.value = '';
  answer.innerHTML = "Ask Again Later";
}

function eightBallFunction() {
  //generate random number
  let randomNum = generateRandomNum(8);
  // turn random number into answer
  let answerText = "";
  //alert if no text is entered
  if (input.value == "") {
    alert("You did not enter a question...");
      return;
  }
  //if else statement for answers
  if (randomNum == 0) {
    answerText = "It is certain.";
  } else if (randomNum == 1) {
    answerText = "It is decidedly so.";
  } else if (randomNum == 2) {
    answerText = "Reply hazy try again.";
  } else if (randomNum == 3) {
    answerText = "Cannot predict now.";
  } else if (randomNum == 4) {
    answerText = "My sources say no.";
  } else if (randomNum == 5) {
    answerText = "Outlook not so good.";
  } else if (randomNum == 6) {
    answerText = "Signs point to yes.";
  } else {
    answerText = "Do not count on it.";
  }
  //display answer in answer p tag
  answer.innerHTML = answerText;
  console.log(answerText);
}
//random num gen function
function generateRandomNum(num) {
  return Math.floor(Math.random() * num);
}
