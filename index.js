// Wait for the DOM to be fully loaded before manipulating it

document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const contentDiv = document.getElementById('content');
    const gifDisplay = document.getElementById('gifDisplay');
    const buttonDiv = document.getElementById('buttons');
  
    // Create Previous and Next buttons
    const buttonFragment = document.createDocumentFragment();
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    buttonFragment.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    buttonFragment.appendChild(nextButton);

    buttonDiv.appendChild(buttonFragment);
    const emailForm = buttonDiv.nextElementSibling;
  
    // The Gifs
    const gifs = [
      "gifs/gif1.gif",
      "gifs/gif2.gif",
      "gifs/gif3.gif",
      "gifs/gif4.gif",
      "gifs/gif5.gif",
    ];
  
    let currentGifIndex = 0;
  
    // Function to update the displayed GIF
    function updateGif() {
      gifDisplay.src = gifs[currentGifIndex];
    }
  
    // Event listeners and handlers
    prevButton.addEventListener('click', function () {
      if (currentGifIndex > 0) {
        currentGifIndex--;
        updateGif();
        prevButton.style.backgroundColor = 'lightgray';

       
      }
    });
  
    nextButton.addEventListener('click', function () {
      if (currentGifIndex < gifs.length - 1) {
        currentGifIndex++;
        updateGif();
        nextButton.style.backgroundColor = 'gray';

      const emailInput = document.getElementById('email');
      emailInput.placeholder = 'ENTER EMAIL HERE';
      usernameInput.placeholder = 'ENTER FULL NAME';
      }
    });
    
    updateGif();
    
    const usernameInput = document.getElementById('username');
    
    usernameInput.addEventListener('input', function () {
      validateUsername();
    });
    
    function validateUsername() {
      const usernameValue = usernameInput.value();
      const spaceIndex = usernameValue.indexOf(' ');
      if (spaceIndex === -1 || spaceIndex === 0 || spaceIndex === usernameValue.length - 1) {
        // No space or space at the beginning/end
        alert('Please enter both first name and last name.');
      }
    }
    
    
    // Select the button using querySelector
    const submitButton = emailForm.querySelector('button');
    
    // Apply styles to the button with BOM
    submitButton.style.marginLeft= '40px';
    submitButton.style.padding = '3px'; // Padding
    // Add more styles as needed
    
    emailForm.addEventListener('submit', function (e) {
      e.preventDefault();})
      
    });
      