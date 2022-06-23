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
    random1();
    random2();
    //startTimer();
    arrayCards.forEach(item => {
      item.style.cursor = 'pointer';
    })

card1.addEventListener('click' , () => {
  if (card1t) {
    card1.innerHTML= '<img src="/images/image_'+ number1 +'.png" alt="card1" />';
    card1t = false
    console.log(number1);
  } else if (card1 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
            card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
            card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
            card29 || card30 )) {
              console.log(card1);
    card1.innerHTML = '<img src="/images/image_'+ number1 +'.png" alt="card1" />';
  } else {
    card1.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card1t = true;
  }
})

card2.addEventListener('click' , () => {
  if (card2t) {
    card2.innerHTML = '<img src="/images/image_'+ number2 +'.png" alt="card" />';
    card2t = false;
    console.log(number2);
  } else if (card2 === (card1 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
    card2.innerHTML = '<img src="/images/image_'+ number2 +'.png" alt="card" />';
  } else {
    card2.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card2t = true;
  }
})

card3.addEventListener('click' , () => {
  if (card3t) {
    card3.innerHTML = '<img src="/images/image_'+ number3 +'.png" alt="card" />';
    card3t = false;
    console.log(number3);
  } else if (card3 === (card2 || card1 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
      card3.innerHTML = '<img src="/images/image_'+ number3 +'.png" alt="card1" />';
  } else {
    card3.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card3t = true;
  }
})

card4.addEventListener('click' , () => {
  if (card4t) {
    card4.innerHTML = '<img src="/images/image_'+ number4 +'.png" alt="card" />';
    card4t = false;
    console.log(number4);
  } else if (card4 === (card2 || card3 ||card1 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
      card4.innerHTML = '<img src="/images/image_'+ number4 +'.png" alt="card1" />';
  } else {
    card4.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card4t = true;
  }
})

card5.addEventListener('click' , () => {
  if (card5t) {
    card5.innerHTML = '<img src="/images/image_'+ number5 +'.png" alt="card" />';
    card5t = false;
    console.log(number5);
  } else if (card5 === (card2 || card3 ||card4 || card1 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
      card5.innerHTML = '<img src="/images/image_'+ number5 +'.png" alt="card1" />';
  } else {
    card5.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card5t = true;
  }
})

card6.addEventListener('click' , () => {
  if (card6t) {
    card6.innerHTML = '<img src="/images/image_'+ number6 +'.png" alt="card" />';
    card6t = false;
    console.log(number6);
  } else if (card6 === (card2 || card3 ||card4 || card5 ||card1 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
      card6.innerHTML = '<img src="/images/image_'+ number6 +'.png" alt="card1" />';
  } else {
    card6.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card6t = true;
  }
})

card7.addEventListener('click' , () => {
  if (card7t) {
    card7.innerHTML = '<img src="/images/image_'+ number7 +'.png" alt="card" />';
    card7t = false;
    console.log(number7);
  } else if (card7 === (card2 || card3 ||card4 || card5 ||card6 ||card1 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
      card7.innerHTML = '<img src="/images/image_'+ number7 +'.png" alt="card1" />';
  } else {
    card7.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card7t = true;
  }
})

card8.addEventListener('click' , () => {
  if (card8t) {
    card8.innerHTML = '<img src="/images/image_'+ number8 +'.png" alt="card" />';
    card8t = false;
    console.log(number8);
  } else if (card8 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card1 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
      card8.innerHTML = '<img src="/images/image_'+ number8 +'.png" alt="card1" />';
  } else {
    card8.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card8t = true;
  }
})

card9.addEventListener('click' , () => {
  if (card9t) {
    card9.innerHTML = '<img src="/images/image_'+ number9 +'.png" alt="card" />';
    card9t = false;
    console.log(number9);
  } else if (card9 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card1 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
      card9.innerHTML = '<img src="/images/image_'+ number9 +'.png" alt="card1" />';
  } else {
    card9.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card9t = true;
  }
})

card10.addEventListener('click' , () => {
  if (card10t) {
    card10.innerHTML = '<img src="/images/image_'+ number10 +'.png" alt="card" />';
    card10t = false;
    console.log(number10);
  } else if (card10 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card1 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
      card10.innerHTML = '<img src="/images/image_'+ number10 +'.png" alt="card" />';
  } else {
    card10.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card10t = true;
  }
})

card11.addEventListener('click' , () => {
  if (card11t) {
    card11.innerHTML = '<img src="/images/image_'+ number11 +'.png" alt="card" />';
    card11t = false;
    console.log(number11);
  } else if (card11 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card1 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
      card11.innerHTML = '<img src="/images/image_'+ number11 +'.png" alt="card" />';
  } else {
    card11.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card11t = true;
  }
})

card12.addEventListener('click' , () => {
  if (card12t) {
    card12.innerHTML = '<img src="/images/image_'+ number12 +'.png" alt="card" />';
    card12t = false;
    console.log(number12);
  } else if (card12 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card1 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
      card12.innerHTML = '<img src="/images/image_'+ number12 +'.png" alt="card" />';
  } else {
    card12.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card12t = true;
  }
})

card13.addEventListener('click' , () => {
  if (card13t) {
    card13.innerHTML = '<img src="/images/image_'+ number13 +'.png" alt="card" />';
    card13t = false;
    console.log(number13);
  } else if (card13 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card1 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
      card13.innerHTML = '<img src="/images/image_'+ number13 +'.png" alt="card" />';
  } else {
    card13.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card13t = true;
  }
})

card14.addEventListener('click' , () => {
  if (card14t) {
    card14.innerHTML = '<img src="/images/image_'+ number14 +'.png" alt="card" />';
    card14t = false;
    console.log(number14);
  } else if (card14 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card1 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
      card14.innerHTML = '<img src="/images/image_'+ number14 +'.png" alt="card" />';
  } else {
    card14.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card14t = true;
  }
})

card15.addEventListener('click' , () => {
  if (card15t) {
    card15.innerHTML = '<img src="/images/image_'+ number15 +'.png" alt="card" />';
    card15t = false;
    console.log(number15);
  } else if (card15 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card1 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
      card15.innerHTML = '<img src="/images/image_'+ number15 +'.png" alt="card" />';
  } else {
    card15.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card15t = true;
  }
})

card16.addEventListener('click' , () => {
  if (card16t) {
    card16.innerHTML = '<img src="/images/image_'+ num1 +'.png" alt="card" />';
    card16t = false;
    console.log(num1);
  } else if (card16 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card1 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
    card16.innerHTML = '<img src="/images/image_'+ num1 +'.png" alt="card" />';
  } else {
    card16.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card16t = true;
  }
})

card17.addEventListener('click' , () => {
  if (card17t) {
    card17.innerHTML = '<img src="/images/image_'+ num2 +'.png" alt="card" />';
    card17t = false;
    console.log(num2);
  } else if (card17 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card1 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
    card17.innerHTML = '<img src="/images/image_'+ num2 +'.png" alt="card" />';
  } else {
    card17.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card17t = true;
  }
})

card18.addEventListener('click' , () => {
  if (card18t) {
    card18.innerHTML = '<img src="/images/image_'+ num3 +'.png" alt="card" />';
    card18t = false;
    console.log(num3);
  } 
  else if (card18 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card1 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
    card18.innerHTML = '<img src="/images/image_'+ num3 +'.png" alt="card" />';
  } else {
    card18.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card18t = true;
  }
})

card19.addEventListener('click' , () => {
  if (card19t) {
    card19.innerHTML = '<img src="/images/image_'+ num4 +'.png" alt="card" />';
    card19t = false;
    console.log(num4);
  } else if (card19 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card1 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
    card19.innerHTML = '<img src="/images/image_'+ num4 +'.png" alt="card" />';
  } else {
    card19.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card19t = true;
  }
})

card20.addEventListener('click' , () => {
  if (card20t) {
    card20.innerHTML = '<img src="/images/image_'+ num5 +'.png" alt="card" />';
    card20t = false;
    console.log(num5);
  } else if (card20 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card1 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
    card20.innerHTML = '<img src="/images/image_'+ num5 +'.png" alt="card" />';
  } else {
    card20.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card20t = true;
  }
})

card21.addEventListener('click' , () => {
  if (card21t) {
    card21.innerHTML = '<img src="/images/image_'+ num6 +'.png" alt="card" />';
    card21t = false;
    console.log(num6);
  } else if (card21 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card1 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
    card21.innerHTML = '<img src="/images/image_'+ num6 +'.png" alt="card" />';
  } else {
    card21.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card21t = true;
  }
})

card22.addEventListener('click' , () => {
  if (card22t) {
    card22.innerHTML = '<img src="/images/image_'+ num7 +'.png" alt="card" />';
    card22t = false;
    console.log(num7);
  } else if (card22 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card1 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
    card22.innerHTML = '<img src="/images/image_'+ num7 +'.png" alt="card" />';
  } else {
    card22.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card22t = true;
  }
})

card23.addEventListener('click' , () => {
  if (card23t) {
    card23.innerHTML = '<img src="/images/image_'+ num8 +'.png" alt="card" />';
    card23t = false;
    console.log(num8);
  } else if (card23 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card1 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
    card23.innerHTML = '<img src="/images/image_'+ number8 +'.png" alt="card" />';
  } else {
    card23.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card23t = true;
  }
})

card24.addEventListener('click' , () => {
  if (card24t) {
    card24.innerHTML = '<img src="/images/image_'+ num9 +'.png" alt="card" />';
    card24t = false;
    console.log(num9);
  } else if (card24 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card1 || card25 || card26 || card27 || card28 ||
    card29 || card30 )) {
    card24.innerHTML = '<img src="/images/image_'+ num9 +'.png" alt="card" />';
  } else {
    card24.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card24t = true;
  }
})

card25.addEventListener('click' , () => {
  if (card25t) {
    card25.innerHTML = '<img src="/images/image_'+ num10 +'.png" alt="card" />';
    card25t = false;
    console.log(num10);
  } else if (card25 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card1 || card26 || card27 || card28 ||
    card29 || card30 )) {
    card25.innerHTML = '<img src="/images/image_'+ num10 +'.png" alt="card" />';
  } else {
    card25.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card25t = true;
  }
})

card26.addEventListener('click' , () => {
  if (card26t) {
    card26.innerHTML = '<img src="/images/image_'+ num11 +'.png" alt="card" />';
    card26t = false;
    console.log(num11);
  } else if (card26 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card1 || card27 || card28 ||
    card29 || card30 )) {
    card26.innerHTML = '<img src="/images/image_'+ num11 +'.png" alt="card" />';
  } else {
    card26.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card26t = true;
  }
})

card27.addEventListener('click' , () => {
  if (card27t) {
    card27.innerHTML = '<img src="/images/image_'+ num12 +'.png" alt="card" />';
    card27t = false;
    console.log(num12);
  } else if (card27 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card1 || card28 ||
    card29 || card30 )) { 
      card27.innerHTML = '<img src="/images/image_'+ num12+'.png" alt="card" />';
  } else {
    card27.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card27t = true;
  }
})

card28.addEventListener('click' , () => {
  if (card28t) {
    card28.innerHTML = '<img src="/images/image_'+ num13 +'.png" alt="card" />';
    card28t = false;
    console.log(num13);
  } else if (card28 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card1 ||
    card29 || card30 )) {
    card28.innerHTML = '<img src="/images/image_'+ num13 +'.png" alt="card" />';
  } else {
    card28.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card28t = true;
  }
})

card29.addEventListener('click' , () => {
  if (card29t) {
    card29.innerHTML = '<img src="/images/image_'+ num14 +'.png" alt="card" />';
    card29t = false;
    console.log(num14);
  } else if (card29 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card1 || card30 )) {
    card29.innerHTML = '<img src="/images/image_'+ num14 +'.png" alt="card" />';
  } else {
    card29.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card29t = true;
  }
})

card30.addEventListener('click' , () => {
  if (card30t) {
    card30.innerHTML = '<img src="/images/image_'+ num15 +'.png" alt="card" />';
    card30t = false;
    console.log(num15);
  } else if (card30 === (card2 || card3 ||card4 || card5 ||card6 ||card7 || card8 || card9 || card10 ||
    card11 || card12 || card13 || card14 || card15 || card16 || card17 || card18 || card19 ||
    card20 || card21 || card22 || card23 || card24 || card25 || card26 || card27 || card28 ||
    card29 || card1 )) {
    card30.innerHTML = '<img src="/images/image_'+ num15 +'.png" alt="card" />';
  } else {
    console.log(card30);
    card30.innerHTML = '<img src="/images/Capture d’écran js2.png" alt="card" />';
    card30t = true;
  }
})
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
let cards = document.querySelectorAll('.card');


let arrayCards = [];

cards.forEach(item => {
  arrayCards.push(item)
})
let [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12,
card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23,
card24, card25, card26, card27, card28, card29, card30] = arrayCards

arrayCards.forEach(item => {
  item.style.cursor = 'initial';
})



//variables pour checker les cards
let card1t = true, card2t = true, card3t = true, card4t = true, card5t = true, card6t = true, card7t = true;
let card8t = true, card9t = true,  card10t = true; let card11t = true; let card12t = true; let card13t = true; let card14t = true;
let card15t = true; let card16t = true; let card17t = true; let card18t = true; let card19t = true; let card20t = true; let card21t = true;
let card22t = true; let card23t = true; let card24t = true; let card25t = true; let card26t = true; let card27t = true; let card28t = true;
let card29t = true; let card30t = true;

//fonction pour la génération de nombres aléatoires
function random1() {
  return Math.floor(Math.random()*15+1);
}

let myArray = [];

for (var i=0 ; i<250 ; i++ ) {
  let added1 = false;
 do  {
    let newRandom1 = random1();
    if(!myArray.includes(newRandom1)) {
      myArray.push(newRandom1);
      added1= true;
    }
  }  while (added1=false)
}


let [ number1, number2, number3, number4, number5, number6, 
number7, number8, number9, number10, number11, number12, 
number13, number14, number15] = myArray 

//deuxieme fonction pour la generation des nombres aleatoires
function random2() {
  return Math.floor(Math.random()*15+1);
}

let myArray2 = [];

for (var i=0 ; i<250 ; i++ ) {
  let added2 = false;
 do  {
    let newRandom2 = random2();
    if(!myArray2.includes(newRandom2)) {
      myArray2.push(newRandom2);
      added2 = true;
    }
  }  while (added2=false)
}

let [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15] = myArray2