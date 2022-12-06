//Start

//FIRST STEP
//storing document element ID's as variables
const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');

//SECOND STEP
// Check if there are any items in localStorage
// Check if there are any items in localStorage
if (localStorage.getItem('listItems')) {
    // If there are, get the items and parse them from JSON
    const items = JSON.parse(localStorage.getItem('listItems'));
  
    // Loop through the items and create a li element for each item
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      
  
      // Create a delete button for the li element
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
  
      // Add an event listener to the delete button to listen for the click event
      deleteButton.addEventListener('click', event => {
        // Remove the item from localStorage
        localStorage.removeItem('listItems', JSON.stringify(item));
  
        // Remove the li element from the ul element
        list.removeChild(li);
      });
  
      // Append the delete button to the li element
      li.appendChild(deleteButton);
  
      // Append the li element to the ul element
      list.appendChild(li);
    });
  }

//THIRD STEP
// Add an event listener to the form to listen for the submit event
form.addEventListener('submit', event => {
    // Prevent the default form submission behavior
    event.preventDefault();

    if (input.value !== '') {


        // Create a new li element for the to-do item
        const item = document.createElement('li');

        // Set the text content of the li element to the value of the input field
        item.textContent = input.value;

        // Create a new button element for the delete button
        const deleteButton = document.createElement('button');

        // Set the text content of the button element
        deleteButton.textContent = 'Delete';

        // Add an event listener to the button to listen for the click event
        deleteButton.addEventListener('click', () => {
            // Remove the li element from the ul element
            localStorage.removeItem('listItem', JSON.stringify(item));
            list.removeChild(item);
        });

        // Append the button to the li element
        item.appendChild(deleteButton);

        // Append the li element to the ul element
        list.appendChild(item);

        // Clear the input field
        input.value = '';

        //STEP 4
        // Get the current items from localStorage
        let items = JSON.parse(localStorage.getItem('listItems'));

        // If there are no items in localStorage, create an empty array
        if (!items) {
            items = [];
        }

        // Add the new item to the array
        items.push(item.textContent);

        // Save the updated array to localStorage
        localStorage.setItem('listItems', JSON.stringify(items));

    }

    //STEP 4
    // Get the current items from localStorage
    let items = JSON.parse(localStorage.getItem('listItems'));

    // If there are no items in localStorage, create an empty array
    if (!items) {
        items = [];
    }

    // Add the new item to the array
    items.push(item.textContent);

    // Save the updated array to localStorage
    localStorage.setItem('listItems', JSON.stringify(items));

    //Purge Local Storage
    //Only use if there is an issue and you want to purge the memory
    //Clear localStorage uncomment below
    //localStorage.clear();

});

