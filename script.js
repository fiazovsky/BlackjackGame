'use script';

// const cards = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
//   21,
//   22,
//   23,
//   24,
//   25,
//   26,
//   27,
//   28,
//   29,
//   30,
//   31,
//   32,
//   33,
//   34,
//   35,
//   36,
//   37,
//   38,
//   39,
//   40,
//   41,
//   42,
//   43,
//   44,
//   45,
//   46,
//   47,
//   48,
//   49,
//   50,
//   51,
//   52,
// ];

// for (let i = 0; i <= cards.length; i++) {
//   cards[i].src = `img/card (${i + 1}).png`;
// }

let scoreElem0 = document.querySelector('.score-0');
let scoreElem1 = document.querySelector('.score-1');

const btnHit = document.querySelector('.hit');
const btnNew = document.querySelector('.new');
const btnEnd = document.querySelector('.end');

const player0 = document.querySelector('.player-0');
const player1 = document.querySelector('.player-1');

const card0 = document.querySelector('.card-0');
const card1 = document.querySelector('.card-1');

let activePlayer, cardScore, score;

const init = function () {
  document.querySelector('.winner').classList.add('hidden');
  cardScore = 0;
  score = 0;
  activePlayer = 0;
  scoreElem0.textContent = 0;
  scoreElem1.textContent = 0;
  player0.classList.remove('player-winner');
  player1.classList.remove('player-winner');
  player0.classList.add('player-active');
  player1.classList.remove('player-active');
  card0.src = `img/gray_back.png`;
  card1.src = `img/gray_back.png`;

  //   document.querySelector('.space1').style.backgroundImage =
  //     "url('img/card (1).png')";
};

init();

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player-active');
  player1.classList.toggle('player-active');
};

btnHit.addEventListener('click', function () {
  const card = Math.trunc(Math.random() * 52) + 1;
  document.querySelector(
    `.card-${activePlayer}`
  ).src = `img/card (${card}).png`;

  console.log(card);

  if (card > 0 && card < 5) {
    cardScore = 1;
    console.log('ace');
  } else if (card > 4 && card < 9) {
    cardScore = 2;
    console.log('2');
  } else if (card > 8 && card < 13) {
    cardScore = 3;
    console.log('3');
  } else if (card > 12 && card < 17) {
    cardScore = 4;
    console.log('4');
  } else if (card > 16 && card < 21) {
    cardScore = 5;
    console.log('5');
  } else if (card > 20 && card < 25) {
    cardScore = 6;
    console.log('6');
  } else if (card > 24 && card < 29) {
    cardScore = 7;
    console.log('7');
  } else if (card > 28 && card < 33) {
    cardScore = 8;
    console.log('8');
  } else if (card > 32 && card < 37) {
    cardScore = 9;
    console.log('9');
  } else if (card > 36) {
    cardScore = 10;
    console.log('10');
  }
  console.log(score);

  score += cardScore;
  console.log(cardScore, score);

  document.querySelector(`.score-${activePlayer}`).textContent = score;
});

btnEnd.addEventListener('click', function () {
  switchPlayer();
  score = 0;
});

btnNew.addEventListener('click', init);
