let hiddenCard = document.querySelectorAll("#hiddenCard");
let cardShowed = [];
let randomNumberArray = [];
let oneCard;
let randomNumber;

for (i = 1; i <= 30; i++) {
  cardShowed.push(`image_${i}.png`);
}

function getRandomCard() {
  for (let i = 0; i < 250; i++) {
    let added1 = false;
    oneCard = Math.floor(Math.random() * 30);
    do {
      if (!randomNumberArray.includes(oneCard)) {
        randomNumberArray.push(oneCard);
        randomNumberArray.forEach(e => {
        randomNumber = e;
        })
        added1 = true;
      }
    } while ((added1 = false));
  }
  return randomNumber;
}


  hiddenCard.forEach((element) => {
    element.addEventListener("click", () => {
        element.src = `images/${cardShowed[getRandomCard()]}`;
        console.log(randomNumberArray);
      console.log(element);
    });
  });


  console.log(randomNumberArray);
  console.log(randomNumber);