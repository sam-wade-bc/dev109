var myImages =
["https://sam-wade-bc.github.io/dev109/a5/img/pic1.jpg",
 "https://sam-wade-bc.github.io/dev109/a5/img/pic2.jpg",
 "https://sam-wade-bc.github.io/dev109/a5/img/pic3.jpg",
 "https://sam-wade-bc.github.io/dev109/a5/img/pic4.jpg",
 "https://sam-wade-bc.github.io/dev109/a5/img/pic5.jpg"];


var captions =
["Gato Fight: This cat has a sword, how menacing!",
"Gato Love: This cat looks onward with admiration, cute!",
"Gato Explore: Cats are kings of the outdoors, they love to wander and explore!",
"Gato Climb: Cats like to climb stairs, just like this guy!",
"Gato Suspicious: I cant describe the emotion on this cats face, he seems suspicios."];

var altText = 
["Cat with a sword",
 "Cat with heterochromia",
 "Cat outside",
 "Cat on stairs",
 "Cat on a on a ledge"];

 var index=0; 
 var timerDisplay = document.getElementById('timer');
 var timerDuration = 4000;
 var timerInterval;
 var nextButton = document.getElementById("next"); 
 var previousButton = document.getElementById("previous"); 
 var countdown = timerDuration/1000;
 var auto = document.getElementById("auto");
document.getElementById("auto").addEventListener("change", autoSlide);

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= altText[index];
 document.getElementById("caption").textContent = captions[index]; 
} 

function next(){
 if (auto.checked)
 startTimer();
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (auto.checked)
 startTimer();
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 updateImage();
} 


previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide() {
  if (document.getElementById("auto").checked) {
    next(); // Go to next slide when checked
    startTimer(); // Start the timer
  } else {
    stopTimer(); // Stop the timer when checkbox is unchecked
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerDisplay.textContent = "Automatic Slides Paused";
}

function startTimer() {
  clearInterval(timerInterval);
  var duration = countdown; 
  timerInterval = setInterval(function () {
    timerDisplay.textContent = "Next slide in: " + duration + "s";
    duration--; // Decrement the duration
    if (duration < 0) {
      duration = countdown; // Reset the countdown after it reaches 0
      next(); // Move to the next slide
    }
  }, 1000);
}
