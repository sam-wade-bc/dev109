function addItem() {
//1. Add variable to track erros
  var errorOccurred = false;

//2. Get the div where error messages will be displayed.
  var errorDiv = document.getElementById('error-message');
//3. Clear any previous error message before we begin.
  errorDiv.textContent = '';

  try {
//4. Get the user input element and its value.
    var inputElement = document.getElementById('itemInput');
    var newItemText = inputElement.value;

//5. Validate the input. If it's empty, throw an error.

    if (newItemText === "") {
      throw new Error("Input field cannot be empty.");
    }

//6. Create a new <li> element.
    var newEl = document.createElement('li');

//7. Create a text node with the user's input and puts it in the list item.
    var newText = document.createTextNode(newItemText);
    newEl.appendChild(newText);

//8. Find the <ul> list and append the new <li> to it.
    var position = document.getElementById('todo'); // Using getElementById is more reliable
    position.appendChild(newEl);

  } catch (e) {
//9. set error indicator and print this to the log.     
    errorOccurred = true;
    console.log(e);

  } finally {
//10. Check our indicator if we need to display an error message.
    if (errorOccurred) {
      errorDiv.textContent = 'Please add an item.';
    }

//11. EXTRA CREDIT HERE: Clear input and refocus for next input
    document.getElementById('itemInput').value = '';
    document.getElementById('itemInput').focus();
  }
}
