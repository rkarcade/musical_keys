
//detecting button press


  var numberOfDrumsButton = document.querySelectorAll(".drum").length;

  for (var i = 0; i <numberOfDrumsButton; i++) {


  document.querySelectorAll(".drum")[i].addEventListener("click",function() {

      var buttonInnerHTML = this.innerHTML;

      makeSound (buttonInnerHTML);     

      buttonAnimation(buttonInnerHTML);

      });

  }

//detecting keyboard press

  document.addEventListener("keydown", function (event) {  //if a keydowb property was sent, then makeSound based on that key . if you click W, then it will make a sound
    makeSound(event.key);

    buttonAnimation(event.key);

  });


  function makeSound(key) {
    switch (key) {  
      case "w":
          var tom1 = new Audio ('sounds/tom-1.mp3');
          tom1.play ();
        break;

      case "a":
          var tom2 = new Audio ('sounds/tom-2.mp3');
          tom2.play ();
        break;

      case "s":
          var tom3 = new Audio ('sounds/tom-3.mp3');
          tom3.play ();
        break;

      case "d":
          var tom4 = new Audio ('sounds/tom-4.mp3');
          tom4.play ();
        break;


      case "j":
          var snare = new Audio ('sounds/snare.mp3');
          snare.play ();
        break;

      case "k":
          var crash = new Audio ('sounds/crash.mp3');
          crash.play ();
        break;


      case "l":
          var kick = new Audio ('sounds/kick-bass.mp3');
          kick.play ();
        break;


      default: console.log (buttonInnerHTML);

    }


  }


  function buttonAnimation (currentKey) {

    var activeButton = document.querySelector("." + currentKey); 

    activeButton.classList.add("pressed"); //the problem with this is that once it's pressed, it just stayed shadowed out but we want to it come back to nromal aftrer 0.1 seconds

    setTimeout (function() {
      activeButton.classList.remove("pressed"); //after 0.1 seconds, it goes back to normal
    }, 100);


  }
