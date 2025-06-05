function addItem(){

var newEl = document.createElement('li');
var list = document.getElementsBy
// Create a text node and store it in a variable.
var newText = document.createTextNode('quinoa');

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);

//try adding item to list
try(newEl)
  
//Catch error or null and print to console


//Finally return to top



}
