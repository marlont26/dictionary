document.addEventListener('DOMContentLoaded', () => {
    const dictionary = [
        { word: 'go', image: 'media/go7.jpg', audio: 'media/go.mp3', description: 'Ir', example: 'I go to school every day.' },
        { word: 'come', image: 'media/come.jpg', audio: 'media/come.mp3', description: 'Venir', example: 'She comes home late.' },
        { word: 'see', image: 'media/see.jpg', audio: 'media/see.mp3', description: 'Ver', example: 'He sees the bird.' },
        { word: 'take', image: 'media/take.jpg', audio: 'media/take.mp3', description: 'Tomar', example: 'They take the bus.' },
        { word: 'give', image: 'media/give.jpg', audio: 'media/give.mp3', description: 'Dar', example: 'We give him a gift.' },
        { word: 'make', image: 'media/make.jpg', audio: 'media/make.mp3', description: 'Hacer', example: 'He makes a cake.' },
        { word: 'know', image: 'media/know.png', audio: 'media/know.mp3', description: 'Saber', example: 'She knows the answer.' },
        { word: 'think', image: 'media/think.jpg', audio: 'media/think.mp3', description: 'Pensar', example: 'He thinks a lot.' },
        { word: 'find', image: 'media/find.jpg', audio: 'media/find.mp3', description: 'Encontrar', example: 'They find the key.' },
        { word: 'tell', image: 'media/tell.jpg', audio: 'media/tell.mp3', description: 'Decir', example: 'We tell the story.' },
        { word: 'get', image: 'media/get.jpg', audio: 'media/get.mp3', description: 'Obtener', example: 'He gets a present.' },
        { word: 'have', image: 'media/have.jpg', audio: 'media/have.mp3', description: 'Tener', example: 'I have a car.' },
       
        
    ];

    const dictionaryContainer = document.getElementById('dictionary');
    const searchInput = document.getElementById('search');

    function displayDictionary(verbs) {
        dictionaryContainer.innerHTML = '';
        verbs.forEach((verb) => {
            const verbElement = document.createElement('div');
            verbElement.classList.add('verb');

            const img = document.createElement('img');
            img.src = verb.image;
            verbElement.appendChild(img);

            const word = document.createElement('h2');
            word.textContent = verb.word;
            verbElement.appendChild(word);

            const description = document.createElement('p');
            description.textContent = `Descripción: ${verb.description}`;
            verbElement.appendChild(description);

            const example = document.createElement('p');
            example.textContent = `Ejemplo: ${verb.example}`;
            verbElement.appendChild(example);

            const audio = document.createElement('audio');
            audio.controls = true;
            const source = document.createElement('source');
            source.src = verb.audio;
            source.type = 'audio/mpeg';
            audio.appendChild(source);
            verbElement.appendChild(audio);

            dictionaryContainer.appendChild(verbElement);
        });
    }

    displayDictionary(dictionary);

    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const filteredVerbs = dictionary.filter((verb) => verb.word.toLowerCase().includes(query));
        displayDictionary(filteredVerbs);
    });
});
