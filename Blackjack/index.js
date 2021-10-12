let cards = [];
let sum = 0;
let hasblackjack = false;
let msj = " ";
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let mssge = document.getElementById("message-el");

console.log(cards);

//return random number between 1 and 13
//+1 to get the 1 and 13(not 0-12)
function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1;
  if (random === 1) {
    return 11;
  } else if (random > 10) {
    return 10;
  } else {
    return random;
  }
}

function startGame() {
  isalive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cartas: ";

  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Total: " + sum;

  if (sum <= 20) {
    msj = "Desea levantar otra carta?";
  } else if (sum === 21) {
    msj = "Blackjack! Usted gana!";
    hasblackjack = true;
  } else {
    msj = "Usted esta fuera de juego";
    isalive = false;
  }

  //show  result
  mssge.innerText = msj;
}

function newCard() {
  if (isalive === true && hasblackjack === false) {
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
  }
}

/* 
let age = 100;

if (age < 100) {
  console.log("no card");
} else if (age === 100) {
  console.log("here your card");
} else {
  console.log("you already have one ");
}
 */
