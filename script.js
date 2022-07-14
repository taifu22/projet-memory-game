let cardShowed = [];
let randomNumberArray = [];
let oneCard;
let hiddenSection = document.querySelector('.container-card');
let button = document.querySelector('.btn-success');
let active;
let card1;
let card2;
let number1;
let number2;

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

//boucles pour afficher les cards dans notre section container-card
for (let i = 1; i <= 5; i++) {
  const element = document.createElement('div');
  element.setAttribute('class','row bloc-card');
  for (let f = 1; f <= 6; f++) {
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
let hiddenCard = document.querySelectorAll("#hiddenCard");

//fonction pour generer un tableau où l'on stocke nos numeros aleatoires
function randomNumbers() {
  for (let i = 0; i < 250; i++) {
    let added1 = false;
    numberRandom = Math.floor(Math.random() * 30) + 1;
    do {
      if (!randomNumberArray.includes(numberRandom)) {
              
        randomNumberArray.push(numberRandom);
        added1 = true;
      }
    } while ((added1 = false));
  }
        
  randomNumberArray.forEach(e => {
    oneCard = `images/image_${e}.png`;
    cardShowed.push(oneCard);
  }) 
}

/*je fais une fonction avec un foreach pour appeller toutes mes cards caché, et à l'intérieur 
je donne un event click pour chaque card, ensuite je fais une condition,
en premier ca rentre dans le else ca me créé une card et la variable ca passe
a flase, donc au deuxieme clique ca passe au if (car active est true)
donc si le number est = à un autre number +-15(car les images identiques ont toujouts +ou moins 15, voir dossier images, pour comprendre).
Si le number1 est = au num2 donc on a cliqué sur la meme images alors active passe en false, et je pourrais choicir une autre image.
Si l'image choisi n'est pas bonne on passe dans le dernie else (condition dans la condition principale),
et on affiche la mauvaise image pendant juste 1 sec*/
function startPlay() {
  randomNumbers();
  console.log(randomNumberArray);
  hiddenCard.forEach((e , f) => {
    e.addEventListener("click", () => {
     if (active) {
      number1 = randomNumberArray[f];   
      if (number2 === (number1+15) || number2 === (number1-15) ) {
        e.src = cardShowed[f]
        card1 = e
        active = false
        //randomNumberArray.pop(number2)
      } else if(number1 === number2) {
        e.src = 'images/Capture d’écran js2.png';
        active = false;
      } else {
        e.src = cardShowed[f]
        setTimeout(() => {
          e.src = 'images/Capture d’écran js2.png';
        },1000)
      }  
     } else {
      e.src = cardShowed[f];
      card2 = e;
      number2 = randomNumberArray[f]; 
      // if (randomNumberArray.indexOf(number2) !== -1) {
      //   randomNumberArray.splice(number2,1) 
      // }
      console.log(number2);
      console.log(randomNumberArray);
      active = true
     }
    })
  })  
}

/*avec un event click sur le bouton 'demarrer la partie', on appelle la fonction
en haut pour demarrer le game*/
button.addEventListener('click', startPlay);




  