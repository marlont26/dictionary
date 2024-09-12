let selectedWord = null;
let selectedImage = null;

const wordsList = document.getElementById('words-list');
const imagesList = document.getElementById('images-list');
const messageElement = document.getElementById('message');

// Añadir evento de clic a las palabras
wordsList.addEventListener('click', function(event) {
    const clickedWord = event.target;
    if (clickedWord.tagName === 'LI') {
        if (selectedWord) {
            selectedWord.classList.remove('selected');
        }
        clickedWord.classList.add('selected');
        selectedWord = clickedWord;
        checkMatch();
    }
});

// Añadir evento de clic a las imágenes
imagesList.addEventListener('click', function(event) {
    const clickedImage = event.target.closest('li');
    if (clickedImage) {
        if (selectedImage) {
            selectedImage.classList.remove('selected');
        }
        clickedImage.classList.add('selected');
        selectedImage = clickedImage;
        checkMatch();
    }
});

// Comprobar si hay coincidencia
function checkMatch() {
    if (selectedWord && selectedImage) {
        const wordMatch = selectedWord.getAttribute('data-match');
        const imageMatch = selectedImage.getAttribute('data-match');

        if (wordMatch === imageMatch) {
            messageElement.textContent = '¡Correcto!';
            selectedWord.classList.add('matched');
            selectedImage.classList.add('matched');
            selectedWord.style.pointerEvents = 'none';
            selectedImage.style.pointerEvents = 'none';
        } else {
            messageElement.textContent = 'Intenta de nuevo.';
        }

        selectedWord.classList.remove('selected');
        selectedImage.classList.remove('selected');
        selectedWord = null;
        selectedImage = null;
    }
}
