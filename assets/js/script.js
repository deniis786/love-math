//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');
    
    for (let button of buttons) {
     button.addEventListener('click', function() {
      if (this.getAttribute('data-type') === 'submit') {
        alert('You clicked submit!');
      }  else {
        let gameType = this.getAttribute('data-type');
        alert(`You clicked ${gameType}`);
      }
     })   
    }
})

/**
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {
    // Checks the answer against the first element in
    // the returned calculateCorrectAnswer array
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert('Hey! You got it right! :D');
        incrementScore();
    } else {
        alert(`Awwww...you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongScore();
    }

    runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {
    // Gets the operands (the numbers) and the operator (plus, minus etc.)
    // directly from the DOM
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, 'addition'];
    } else if (operator === '-') {
        return [operand1 - operand2, 'subtract'];
    } else if (operator === 'x') {
        return [operand1 * operand2, 'multiply'];
    } else {
        return [operand1 / operand2, 'division'];
    }
}

function incrementScore() {
    // Gets the current score from the DOM and increments it
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

function incrementWrongScore() {
    // Gets the current incorrect score from the DOM and increments it
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion() {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion() {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}