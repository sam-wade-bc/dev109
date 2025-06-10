var slideIndex = 1; // Start with the first slide
var timerDuration = 10; // Duration for each slide in seconds
var timerInterval; // Variable to hold the interval for the timer

showSlides(slideIndex);
startTimer(timerDuration);

// Function to show the slide at a specific index
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  // Handle wrapping around the slide index
  if (n > slides.length) {
    slideIndex = 1; // Wrap around to the first slide
  }
  if (n < 1) {
    slideIndex = slides.length; // Wrap around to the last slide
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";

  // Restart the timer for the new slide
  resetTimer();
}

// Function to navigate forward or backward
function progressPic(n) {
  showSlides(slideIndex += n);
}

// Function to start the automatic slide advancement
function autoSlides() {
  slideIndex++;
  showSlides(slideIndex);
  setTimeout(autoSlides, timerDuration * 1000); // Change image every 10 seconds
}

// Function to start the timer
function startTimer(duration) {
  var timer = duration;
  var timerDisplay = document.getElementById('timer');

  timerInterval = setInterval(function() {
    timerDisplay.textContent = 'Next slide in: ' + timer + 's';
    timer--;

    if (timer < 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  startTimer(timerDuration);
}

// Start automatic slide advancement
autoSlides();
