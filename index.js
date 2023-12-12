
document.addEventListener('DOMContentLoaded', function () {
// Elements
const contentDiv = document.getElementById('content');
const gifDisplay = document.getElementById('gifDisplay');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// the Gifs
const gifs = [
    "https://www.motionelements.com/stock-image-28156558-hygiene-of-cat-care-pet-care-cat-shedding-a-pile-of-cat-fur-cat-grooming?query_id=dcc6d8a6-17d0-45dc-9806-c43f207ffdfc&position=1",
    "https://www.motionelements.com/stock-image-26235407-cat-in-sunglasses-in-neon-light-cat-in-glasses-cat-at-the-disco-british-cat?query_id=dcc6d8a6-17d0-45dc-9806-c43f207ffdfc&position=2",
    "https://www.motionelements.com/stock-image-23604988-tabby-cat-on-a-rattan-chair-stroking-a-cat-close-up-the-cat-yawns?query_id=dcc6d8a6-17d0-45dc-9806-c43f207ffdfc&position=6",
        ];
//use this format picDiv.innerHTML = `<img src="${url}" alt="${title}">`;

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
    }
});

nextButton.addEventListener('click', function () {
    if (currentGifIndex < gifs.length - 1) {
        currentGifIndex++;
        updateGif();
    }
});


updateGif();
});
