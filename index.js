window.onload = (event) => {

  const
    img1 = document.querySelector(".img1"),
    img2 = document.querySelector(".img2"),
    button = document.querySelector(".button"),
    h1 = document.querySelector("h1");

  const getRandomNumber = () => {
      return Math.floor(Math.random() * 6 + 1)
  }

  const makeThrow = () => {

    let a = getRandomNumber();
    let b = getRandomNumber();

    if (a > b) {
      h1.innerHTML = "Player 1 win!";
    } else if (a < b) {
      h1.innerHTML = "Player 2 win!";
    } else {
      h1.innerHTML = "Draw!";
    }

    img1.src = `images/${a}.svg`;
    img2.src = `images/${b}.svg`;
  }

  button.addEventListener('click', () => {
    makeThrow();
  })

};
