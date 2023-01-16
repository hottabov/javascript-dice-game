window.onload = (event) => {

  const buttons = document.querySelectorAll(".drum");

  function changeColor(key) {
    let elem = document.querySelector("." + key);
    elem.style.color = "white";
    setTimeout(() => {
      elem.style.color = "#DA0463";
    }, 0.5);
  }

  function makeSound(key) {
    switch (key) {
      case "w":
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

      case "a":
        let tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

      case "s":
        let tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

      case "d":
        let tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

      case "j":
        let snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

      case "k":
        let crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

      case "l":
        let kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

      default:
        console.log(key)
    }
  }

  // Detecting Button Press
  buttons.forEach(button => {
    button.addEventListener('click', function play() {

      const buttonInnerHTML = this.innerHTML;
      changeColor(buttonInnerHTML);
      makeSound(buttonInnerHTML);

    });
  })


// Detecting Keyboard Press
  addEventListener("keydown", function (event) {
    makeSound(event.key);

    if (
      event.key === "w" ||
      event.key === "a" ||
      event.key === "s" ||
      event.key === "d" ||
      event.key === "j" ||
      event.key === "k" ||
      event.key === "l"
    ) {
      changeColor(event.key);
    }


  })

}
