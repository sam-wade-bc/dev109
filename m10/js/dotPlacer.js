 var dotColor = document.getElementById("dotColor");
 var dotSize = document.getElementById("dotSize");
 var clearButton = document.getElementById("clear");

    // Clear the board when the CLEAR button is clicked
    clearButton.addEventListener("click", function(event) {
      // Remove all dots (div elements)
      var dots = document.getElementsByClassName("dot");
      while (dots.length > 0) {
        dots[0].parentNode.removeChild(dots[0]);
      }
     // Let us stop the propagation of events
      event.stopPropagation();
    });

    // Add a dot at the clicked position
    document.addEventListener("click", function(event) {
      // Prevent dots from being drawn on the controls
      if (event.target.closest("#controls")) {
        return;
      }

      // Create a new dot
      var dot = document.createElement("div");
      dot.className = "dot";
      dot.style.width = dot.style.height = dotSize.value + "px";
      dot.style.backgroundColor = dotColor.value;
      dot.style.left = (event.pageX - dotSize.value / 2) + "px";
      dot.style.top = (event.pageY - dotSize.value / 2) + "px";

      // Add the dot to the document
      document.body.appendChild(dot);
    });
