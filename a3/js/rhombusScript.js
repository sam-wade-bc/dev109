/* jshint esversion: 6 */

var rHeight =5;
var colorEven = "orange";
var colorOdd = "black";
var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
upRight(pHeight, pColorEven, pColorOdd, pSymbol);
downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
downRight(pHeight, pColorEven, pColorOdd, pSymbol);

}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=0;i<pHeight;i++){
rLine +="<p>";
//Create each line on the Rhombus
for(j=0;j<=i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";
console.log(rLine);

}

document.getElementById("upRight").innerHTML = rLine;
}


function upLeft(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine = "";
  for (i = 0; i < pHeight; i++) {
    rLine += "<p>";

    // Add left-padding spaces (decrease as i increases)
    for (s = 0; s < pHeight - i - 1; s++) {
      rLine += " "; // double space for visual match
    }

    // Draw the symbols with alternating colors
    for (j = 0; j <= i; j++) {
      if (j % 2 === 0)
        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
      else
        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
    }

    rLine += "</p>";
  }

  document.getElementById("upLeft").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=pHeight;i > 0;i--){
rLine +="<p>";
//Create each line on the Rhombus
for(j=0;j<i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";
console.log(rLine);

}

document.getElementById("downRight").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = "";
  for (i = pHeight - 1; i >= 0; i--) {
    rLine += "<p>";

    // Add left-padding spaces (increases as i decreases)
    for (s = 0; s < pHeight - i - 1; s++) {
      rLine += " ";
    }

    // Draw the symbols with alternating colors
    for (j = 0; j <= i; j++) {
      color = j % 2 === 0 ? pColorOdd : pColorEven;
      rLine += `<span style='color:${color}'>${pSymbol}</span>`;
    }

    rLine += "</p>";
  }

  document.getElementById("downLeft").innerHTML = rLine;
}
