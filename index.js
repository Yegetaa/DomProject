document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const contentDiv = document.getElementById('content');
    const gifDisplay = document.getElementById('gifDisplay');
    const buttonDiv = document.getElementById('buttons');
  
    // Create Previous and Next buttons
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
  
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
  
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
      }
    });
  
    // Append buttons to buttonDiv
    buttonDiv.appendChild(prevButton);
    buttonDiv.appendChild(nextButton);
  
    updateGif();
  });
  