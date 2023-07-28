// Get references to the elements
const outerBox = document.querySelector('.outer-box');
const closeButton = document.querySelector('.close-button');

// Function to close the outer box
function closeBox() {
  outerBox.style.display = 'none';
}

// Function to open the outer box (in case you want to show it again later)
function openBox() {
  outerBox.style.display = 'block';
}
