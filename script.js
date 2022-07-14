//declaration des variables qu"on utilisera tout au long du code
let cardShowed = [];
let randomNumberArray = [];
let oneCard;
let hiddenSection = document.querySelector('.container-card');
let button = document.querySelector('.start-game');
let button2 = document.querySelector('.start-game2');
let button3 = document.querySelector('.choice-level-game');
let active;
let number1;
let number2;
let card1;
let card2;
let expertChoice = false;
let beginnerChoice = false;
let intermediateChoice = false;
let count = 0;
let hiddenCard;

//Mise en place de la navbar en responsive design version mobile 768px
// const link = document.querySelector('.link');
// const link1Animation = document.querySelector('.link1animation');
// const link1 = document.querySelector('.link1');
// const aa = document.querySelector('.aa');
// const span1 = document.querySelector('.span1');
// const navbar = document.querySelector('.main-navbar');

// link1.addEventListener('click', () => {
//   if (link.className == 'link') {
//     link.className = 'responsive';
//     link1Animation.classList.add('link1animation');
//     span1.style.opacity = 1;
//     navbar.classList.add('main-navbar-responsive');
//   } else {
//     link.className = 'link';
//     span1.style.opacity = 0;
//     navbar.classList.remove('main-navbar-responsive');
//     link1Animation.classList.remove('link1animation');
//   }
// })

//recuperation des element pour les 3 niveau de jeu
let beginner = document.querySelector('.beginner');
let intermediate = document.querySelector('.intermediate');
let expert = document.querySelector('.expert');
let btnAndTimer = document.querySelector('.container-timer');
let h1Bienvenue = document.querySelector('.h1-bienvenue');
let h2Bienvenue = document.querySelector('.h2-bienvenue');

btnAndTimer.style.display = 'none'

//evenement pour entrer dans le niveau expert
expert.addEventListener('click', () => {
  ShowcardsGame(1, 5, 6, 'Expert');
  expertChoice = true;
})

//evenement pour entrer dans le niveau intermediaire
intermediate.addEventListener('click', () => {
  ShowcardsGame(1, 4, 5, 'Intermediate');
  intermediateChoice = true;
})

//evenement pour entrer dans le niveau debutant
beginner.addEventListener('click', () => {
  ShowcardsGame(1, 3, 4, 'Beginner');
  beginnerChoice = true;
})


//function avec la boucle pour afficher les cards dans notre section container-card, donc selon le niveau choisi
function ShowcardsGame(num1, num2, num3, niveau) {
  for (let i = num1; i <= num2; i++) {
    const element = document.createElement('div');
    element.setAttribute('class','row bloc-card');
    for (let f = num1; f <= num3; f++) {
      const element2 = document.createElement('div');
      element2.setAttribute('class', 'card p-0 m-1 col');
      element.appendChild(element2);
      const img = document.createElement('img');
      img.setAttribute('src', 'images/Capture d’écran js2.png')
      img.setAttribute('id', 'hiddenCard')
      element2.appendChild(img)
    }
    hiddenSection.appendChild(element);
  } 
  //variable pour recuperer toutes nos card hidden
  hiddenCard = document.querySelectorAll("#hiddenCard");
  //on cache les boutons et les titres quand on choisi un niveau
  button.style.display = 'block';
  button2.style.display = 'none';
  h2Bienvenue.textContent = `Niveau ${niveau}`;
  //h2Bienvenue.style.display = 'none';
  expert.style.display = 'none';
  beginner.style.display = 'none';
  intermediate.style.display = 'none';
  btnAndTimer.style.display = 'flex';
}

//function avec la boucle qui genere des nombres aleatoires selon le choix de niveau
function randomNumberscChoicie(num) {
  for (let i = 0; i < 250; i++) {
    let added1 = false;
    numberRandom = Math.floor(Math.random() * num) + 1;
    do {
      if (!randomNumberArray.includes(numberRandom)) {
              
        randomNumberArray.push(numberRandom);
        added1 = true;
      }
    } while ((added1 = false));
  }
  //console.log(randomNumberArray);
}

//fonction pour generer un tableau où l'on stocke nos numeros aleatoires avec condition selon le niveau de jeu
function randomNumbers() {
  if (beginnerChoice) {
    randomNumberscChoicie(12);   
    randomNumberArray.forEach(e => {
      oneCard = `images/beginner/image_${e}.png`;
      cardShowed.push(oneCard);
    })
  } else if (expertChoice) {
    randomNumberscChoicie(30);   
    randomNumberArray.forEach(e => {
      oneCard = `images/image_${e}.png`;
      cardShowed.push(oneCard);
    })
  } else if (intermediateChoice) {
    randomNumberscChoicie(20);   
    randomNumberArray.forEach(e => {
      oneCard = `images/intermediate/image_${e}.png`;
      cardShowed.push(oneCard);
    })
  } 
}

/*Si ma variable count arrive à 30 -20 ou 12 selon le niveau, cette fonction m'affichera l'animation 'you win'*/ 
function WinGame() {
  if ((expertChoice && count >= 30) || (beginnerChoice && count >= 12) || (intermediateChoice && count >= 20)) {
    console.log('you win');
    let win = document.createElement('p');
    win.textContent = 'You win';
    hiddenSection.appendChild(win);
    cardShowed = [];
    randomNumberArray = [];
  }
}

/*function qui demarre la partie, du coup, quand ell'est appelé un tableau de nombres aleatoires
 selon le niveau sera generé, puis on fait un foreach de hiddencards donc nos cards caché, et on donne un event click pour chaque card.
 Active sera toujours false en premier, du coup en premier on passe toujours par le else tout en bas de la fonction, la
 card selon le nombre aleatoire est affiché.
 Deuxieme clique on passe dans la condition active = true, du coup selon le niveau si on trouve la meme image, les 2 resteront fixes.
 Sinon les 2 vont se cacher à nouveau*/
function startPlay() {
  button.style.display = 'none';
  button2.style.display = 'flex';
  randomNumbers();
  hiddenCard.forEach((e , f) => {
    e.addEventListener("click", () => {
      if (active) {
        number1 = randomNumberArray[f];   
        if (expertChoice && (number1 === (number2+15) || number1 === (number2-15))) {
          e.src = cardShowed[f]
          active = false
          count++;
          //si count = 30 le player gagne!
          WinGame();
         } else if (beginnerChoice && (number1 === (number2+6) || number1 === (number2-6))) {
          e.src = cardShowed[f]
          active = false
          count++;
          //si count = 12 le player gagne!
          WinGame();
         } else if (intermediateChoice && (number1 === (number2+10) || number1 === (number2-10))) {
          e.src = cardShowed[f]
          active = false
          count++;
          //si count = 20 le player gagne!
          WinGame();
        } else {
          e.src = cardShowed[f]
          setTimeout(() => {
            e.src = 'images/Capture d’écran js2.png';
            card1.src = 'images/Capture d’écran js2.png';
          },1000)
          active = false;
          count--;
        }  
       } else {
        card1 = e
        card1.src = cardShowed[f];
        number2 = randomNumberArray[f]; 
        active = true
        count++;
       }
    })
  })  
}

/*avec un event click sur le bouton 'demarrer la partie', on appelle la fonction
en haut pour demarrer le game*/
button.addEventListener('click', startPlay);

//function pour réinitialiser une nouvelle partie
function resetGame() {
  hiddenSection.innerHTML = '';
  randomNumberArray = [];
  cardShowed = [];
  count = 0;
  if (beginnerChoice) {
    ShowcardsGame(1, 3, 4, 'Beginner');
  } else if (intermediateChoice) {
    ShowcardsGame(1, 4, 5, 'Intermediate');
  } else if (expertChoice) {
    ShowcardsGame(1, 5, 6, 'Expert');
  }
  startPlay();
}

//evenement du button pour redemarrer une nouvelle partie
button2.addEventListener('click', resetGame);

//function pour changer de niveau en cours de partie (revenir au menu principal en gros)
function changeLevel() {
  hiddenSection.innerHTML = '';
  randomNumberArray = [];
  cardShowed = [];
  count = 0;
  //h1Bienvenue.textContent = `Bienvenues dans le jeu Memory Game`;
  h2Bienvenue.textContent = 'Choisissez le niveau du jeu';
  expert.style.display = 'block';
  beginner.style.display = 'block';
  intermediate.style.display = 'block';
  btnAndTimer.style.display = 'none';
}

//evenement pour changer de niveau en cours de partie
button3.addEventListener('click', changeLevel);