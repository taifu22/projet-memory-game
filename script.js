//Mise en place de la navbar en responsive designe version mobile 768px
const link = document.querySelector('.link');
const link1Animation = document.querySelector('.link1animation');
const link1 = document.querySelector('.link1');
const aa = document.querySelector('.aa');
const span1 = document.querySelector('.span1');
const navbar = document.querySelector('.main-navbar');

link1.addEventListener('click', () => {
  if (link.className == 'link') {
    link.className = 'responsive';
    link1Animation.classList.add('link1animation');
    span1.style.opacity = 1;
    navbar.classList.add('main-navbar-responsive');
  } else {
    link.className = 'link';
    span1.style.opacity = 0;
    navbar.classList.remove('main-navbar-responsive');
    link1Animation.classList.remove('link1animation');
  }
})

//Déclanchement du timer/Initialisation du jeu

const startGame = document.querySelector('.btn-success');
  function newGame(){
    random();
    startTimer();
  }
startGame.addEventListener('click', newGame);



//constantes pour le fonctionnement du timer
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 10;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

//affichage du timer dans le DOM
document.getElementById("icon").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

//Fonctions pour le fonctionnement du timer
function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

//récuperation des cards depuis le DOM avec une boucle forEach et destructuring
let cards =document.querySelectorAll('.card');

let arrayCards = [];

cards.forEach(nassim => {
  arrayCards.push(nassim)
})
const [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12,
card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23,
card24, card25, card26, card27, card28, card29, card30] = arrayCards

console.log(card1);

// let card1 =document.querySelector('.card1');
// let card2 =document.querySelector('.card2');
// let card3 =document.querySelector('.card3');
// let card4 =document.querySelector('.card4');
// let card5 =document.querySelector('.card5');
// let card6 =document.querySelector('.card6');
// let card7 =document.querySelector('.card7');
// let card8 =document.querySelector('.card8');
// let card9 =document.querySelector('.card9');
// let card10 =document.querySelector('.card10');
// let card11 =document.querySelector('.card11');
// let card12 =document.querySelector('.card12');
// let card13 =document.querySelector('.card13');
// let card14 =document.querySelector('.card14');
// let card15 =document.querySelector('.card15');
// let card16 =document.querySelector('.card16');
// let card17 =document.querySelector('.card17');
// let card18 =document.querySelector('.card18');
// let card19 =document.querySelector('.card19');
// let card20 =document.querySelector('.card20');
// let card21 =document.querySelector('.card21');
// let card22 =document.querySelector('.card22');
// let card23 =document.querySelector('.card23');
// let card24 =document.querySelector('.card24');
// let card25 =document.querySelector('.card25');
// let card26 =document.querySelector('.card26');
// let card27 =document.querySelector('.card27');
// let card28 =document.querySelector('.card28');
// let card29 =document.querySelector('.card29');
// let card30 =document.querySelector('.card30');

// cards.forEach((card)=> {
//   console.log(card);
// })

//variables pour checker les cards
let card1t = true, card2t = true, card3t = true, card4t = true, card5t = true, card6t = true, card7t = true;
let card8t = true; let card9t = true; let card10t = true; let card11t = true; let card12t = true; let card13t = true; let card14t = true;
let card15t = true; let card16t = true; let card17t = true; let card18t = true; let card19t = true; let card20t = true; let card21t = true;
let card22t = true; let card23t = true; let card24t = true; let card25t = true; let card26t = true; let card27t = true; let card28t = true;
let card29t = true; let card30t = true;
// let checked = true;
// let checked1 = true;

// function genererNombreEntier() {
//   return Math.floor(Math.random() * 15 + 1);
// }

// let number1; let number2; let number3; let number4; let number5; let number6; let number7; let number8; 
// let number9; let number10; let number11; let number12 ;let number13; let number14; let number15;

// while (number1 != number2 != number3 != number4 != number5 != number6) {
//   number1 = genererNombreEntier();
//   number2 = genererNombreEntier();
//   number3 = genererNombreEntier();
//   number4 = genererNombreEntier();
//   number5 = genererNombreEntier();
//   number6 = genererNombreEntier();
// }
// console.log(number1, number2,number3,number4,number5,number6);


// for (let i = 0; i <= 15; i++) {
//   let newrandom = genererNombreEntier();
//   while(i != newrandom && !myArray.includes(newrandom)){
//       myArray.push(newrandom)
//   }
// }

//fonction pour la génération de nombres aléatoires
function random() {
  return Math.floor(Math.random()*30+1);
}

let myArray = [];

for (var i=0 ; i<250 ; i++ ) {
  let added = false;
 do  {
    let newRandom = random();
    if(!myArray.includes(newRandom)) {
      myArray.push(newRandom);
      added= true;
    }
  }  while (added=false)
}

console.log(myArray);

const [ number1, number2, number3, number4, number5, number6, 
number7, number8, number9, number10, number11, number12, 
number13, number14, number15, number16, number17, number18, number19, number20, number21, 
number22, number23, number24, number25, number26, number27, 
number28, number29, number30] = myArray 
////////////////////////////////////////////////////////////////


//déclaration événement pour chaque card
card1.addEventListener('click' , () => {
  if (card1t) {
    card1.innerHTML = '<img src="/images/image_'+ number1 +'.png" alt="card1" />';
    card1t = false
  } else {
    card1.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card1t = true
  }
})

card2.addEventListener('click' , () => {
  if (card2t) {
    card2.innerHTML = '<img src="/images/image_'+ number2 +'.png" alt="card1" />';
    card2t = false;
  } else {
    card2.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card2t = true;
  }
})

card3.addEventListener('click' , () => {
  if (card3t) {
    card3.innerHTML = '<img src="/images/image_'+ number3 +'.png" alt="card1" />';
    card3t = false;
  } else {
    card3.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card3t = true;
  }
})

card4.addEventListener('click' , () => {
  if (card4t) {
    card4.innerHTML = '<img src="/images/image_'+ number4 +'.png" alt="card1" />';
    card4t = false;
  } else {
    card4.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card4t = true;
  }
})

card5.addEventListener('click' , () => {
  if (card5t) {
    card5.innerHTML = '<img src="/images/image_'+ number5 +'.png" alt="card1" />';
    card5t = false;
  } else {
    card5.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card5t = true;
  }
})

card6.addEventListener('click' , () => {
  if (card6t) {
    card6.innerHTML = '<img src="/images/image_'+ number6 +'.png" alt="card1" />';
    card6t = false;
  } else {
    card6.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card6t = true;
  }
})

card7.addEventListener('click' , () => {
  if (card7t) {
    card7.innerHTML = '<img src="/images/image_'+ number7 +'.png" alt="card1" />';
    card7t = false;
  } else {
    card7.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card7t = true;
  }
})

card8.addEventListener('click' , () => {
  if (card8t) {
    card8.innerHTML = '<img src="/images/image_'+ number8 +'.png" alt="card1" />';
    card8t = false;
  } else {
    card8.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card8t = true;
  }
})

card9.addEventListener('click' , () => {
  if (card9t) {
    card9.innerHTML = '<img src="/images/image_'+ number9 +'.png" alt="card1" />';
    card9t = false;
  } else {
    card9.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card9t = true;
  }
})

card10.addEventListener('click' , () => {
  if (card10t) {
    card10.innerHTML = '<img src="/images/image_'+ number10 +'.png" alt="card1" />';
    card10t = false;
  } else {
    card10.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card10t = true;
  }
})

card11.addEventListener('click' , () => {
  if (card11t) {
    card11.innerHTML = '<img src="/images/image_'+ number11 +'.png" alt="card1" />';
    card11t = false;
  } else {
    card11.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card11t = true;
  }
})

card12.addEventListener('click' , () => {
  if (card12t) {
    card12.innerHTML = '<img src="/images/image_'+ number12 +'.png" alt="card1" />';
    card12t = false;
  } else {
    card12.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card12t = true;
  }
})

card13.addEventListener('click' , () => {
  if (card13t) {
    card13.innerHTML = '<img src="/images/image_'+ number13 +'.png" alt="card1" />';
    card13t = false;
  } else {
    card13.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card13t = true;
  }
})

card14.addEventListener('click' , () => {
  if (card14t) {
    card14.innerHTML = '<img src="/images/image_'+ number14 +'.png" alt="card1" />';
    card14t = false;
  } else {
    card14.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card14t = true;
  }
})

card15.addEventListener('click' , () => {
  if (card15t) {
    card15.innerHTML = '<img src="/images/image_'+ number15 +'.png" alt="card1" />';
    card15t = false;
  } else {
    card15.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card15t = true;
  }
})

card16.addEventListener('click' , () => {
  if (card16t) {
    card16.innerHTML = '<img src="/images/image_'+ number16 +'.png" alt="card1" />';
    card16t = false;
  } else {
    card16.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card16t = true;
  }
})

card17.addEventListener('click' , () => {
  if (card17t) {
    card17.innerHTML = '<img src="/images/image_'+ number17 +'.png" alt="card1" />';
    card17t = false;
  } else {
    card17.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card17t = true;
  }
})

card18.addEventListener('click' , () => {
  if (card18t) {
    card18.innerHTML = '<img src="/images/image_'+ number18 +'.png" alt="card1" />';
    card18t = false;
  } else {
    card18.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card18t = true;
  }
})

card19.addEventListener('click' , () => {
  if (card19t) {
    card19.innerHTML = '<img src="/images/image_'+ number19 +'.png" alt="card1" />';
    card19t = false;
  } else {
    card19.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card19t = true;
  }
})

card20.addEventListener('click' , () => {
  if (card20t) {
    card20.innerHTML = '<img src="/images/image_'+ number20 +'.png" alt="card1" />';
    card20t = false;
  } else {
    card20.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card20t = true;
  }
})

card21.addEventListener('click' , () => {
  if (card21t) {
    card21.innerHTML = '<img src="/images/image_'+ number21 +'.png" alt="card1" />';
    card21t = false;
  } else {
    card21.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card21t = true;
  }
})

card22.addEventListener('click' , () => {
  if (card22t) {
    card22.innerHTML = '<img src="/images/image_'+ number22 +'.png" alt="card1" />';
    card22t = false;
  } else {
    card22.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card22t = true;
  }
})

card23.addEventListener('click' , () => {
  if (card23t) {
    card23.innerHTML = '<img src="/images/image_'+ number23 +'.png" alt="card1" />';
    card23t = false;
  } else {
    card23.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card23t = true;
  }
})

card24.addEventListener('click' , () => {
  if (card24t) {
    card24.innerHTML = '<img src="/images/image_'+ number24 +'.png" alt="card1" />';
    card24t = false;
  } else {
    card24.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card24t = true;
  }
})

card25.addEventListener('click' , () => {
  if (card25t) {
    card25.innerHTML = '<img src="/images/image_'+ number25 +'.png" alt="card1" />';
    card25t = false;
  } else {
    card25.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card25t = true;
  }
})

card26.addEventListener('click' , () => {
  if (card26t) {
    card26.innerHTML = '<img src="/images/image_'+ number26 +'.png" alt="card1" />';
    card26t = false;
  } else {
    card26.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card26t = true;
  }
})

card27.addEventListener('click' , () => {
  if (card27t) {
    card27.innerHTML = '<img src="/images/image_'+ number27 +'.png" alt="card1" />';
    card27t = false;
  } else {
    card27.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card27t = true;
  }
})

card28.addEventListener('click' , () => {
  if (card28t) {
    card28.innerHTML = '<img src="/images/image_'+ number28 +'.png" alt="card1" />';
    card28t = false;
  } else {
    card28.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card28t = true;
  }
})

card29.addEventListener('click' , () => {
  if (card29t) {
    card29.innerHTML = '<img src="/images/image_'+ number29 +'.png" alt="card1" />';
    card29t = false;
  } else {
    card29.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card29t = true;
  }
})

card30.addEventListener('click' , () => {
  if (card30t) {
    card30.innerHTML = '<img src="/images/image_'+ number30 +'.png" alt="card1" />';
    card30t = false;
  } else {
    card30.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card30t = true;
  }
})
