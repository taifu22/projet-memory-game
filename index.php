<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <title>Memory game</title>
  </head>
  <body>
    <header>
      <div class="topnav" id="myTopnav">
        <div class="header-logo">
          <img class="logo" alt="logo" src="images/logo.png" />
        </div>
        <div class="theme">
          <p class="paragraphe">Thème</p>
          <div class="main-navbar">
            <div class="link1 link1animation"><a href="#"><i class="icon fa fa-bars"> Theme<span class="span1">:</span></i></a></div>
            <div class="link">
              <a class="aa" href="#">Animals</a>
              <a class="aa" href="#">Objects</a></div>
          </div>
        </div>
      </div>
    </header>
    <hr />
    <main>
      <section class="container-title">
        <h1>Memory Game</h1>
        <div class="container-timer">
          <button class="m-3 btn btn-success">Démarrer la partie</button>
          <div id="icon"></div>
          <div class="coups">Tentatives : 25</div>
        </div>
      </section>
      <section class="container-card m-5">
        <div class="row bloc-card">
          <div class="card card1 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card2 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card3 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card4 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card5 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card6 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
        </div>
        <div class="row bloc-card">
          <div class="card card7 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card8 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card9 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card10 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card11 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card12 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
        </div>
        <div class="row bloc-card">
          <div class="card card13 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card14 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card15 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card16 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card17 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card18 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
        </div>
        <div class="row bloc-card">
          <div class="card card19 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card20 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card21 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card22 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card23 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card24 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
        </div>
        <div class="row bloc-card">
          <div class="card card25 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card26 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card27 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card28 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card29 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
          <div class="card card30 p-0 m-1 col">
            <img src="images/Capture d’écran js2.png" alt="card" />
          </div>
        </div>
      </section>
    </main>

    <footer class="container-fluid bg-dark mt-5 bottom">
      Copyright © 2022 Taoufik/Ludovic/Nassim/Steven All Rights Reserved
    </footer>
    <script src="script.js"></script>
  </body>
</html>
