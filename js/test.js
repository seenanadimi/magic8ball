const input = document.querySelector("#questionArea");
const button = document.querySelector("#ask");
const reset = document.querySelector("#reset");
const answer = document.querySelector("#answer");
const answerArray = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
];

button.addEventListener("click", displayAnswer);
reset.addEventListener("click", resetButton);

function generateRandomNum(num) {
  return Math.floor(Math.random() * num);
}

function resetButton() {
  input.value = "";
  answer.innerHTML = "Ask Again Later";
}

function displayAnswer() {
  if (input.value == "") {
    alert("Enter a question...");
    return;
  }
  answer.innerHTML = answerArray[generateRandomNum(19)];
}
