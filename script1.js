document.addEventListener('DOMContentLoaded', () => {
    const dictionary = [
        { word: 'work', image: 'media/work.jpg', audio: 'media/work.mp3', description: 'Trabajar', example: 'He works every day.' },
        { word: 'play', image: 'media/play.jpg', audio: 'media/play.mp3', pronunciation: '/pleɪ/', description: 'Jugar', example: 'The kids play in the park.' },
        { word: 'open', image: 'media/open.jpg', audio: 'media/open.mp3', pronunciation: '/ˈoʊpən/', description: 'Abrir', example: 'She opens the door.' },
        { word: 'close', image: 'media/close.jpg', audio: 'media/close.mp3', pronunciation: '/kloʊz/', description: 'Cerrar', example: 'He closes the window.' },
        { word: 'study', image: 'media/study.jpg', audio: 'media/study.mp3', pronunciation: '/ˈstʌdi/', description: 'Estudiar', example: 'They study English.' },
        { word: 'watch', image: 'media/watch.jpg', audio: 'media/watch.mp3', pronunciation: '/wɑːtʃ/', description: 'Mirar', example: 'We watch a movie.' },
        { word: 'talk', image: 'media/talk.jpg', audio: 'media/talk.mp3', pronunciation: '/tɔːk/', description: 'Hablar', example: 'She talks on the phone.' },
        { word: 'clean', image: 'media/clean.jpg', audio: 'media/clean.mp3', description: 'Limpiar', example: 'He cleans the house.' },
        { word: 'listen', image: 'media/listen.jpg', audio: 'media/listen.mp3', pronunciation: '/ˈlɪsən/', description: 'Escuchar', example: 'They listen to music.' },
        { word: 'help', image: 'media/help.jpg', audio: 'media/help.mp3', pronunciation: '/help/', description: 'Ayudar', example: 'We help our neighbors.' },
        { word: 'walk', image: 'media/walk.jpg', audio: 'media/walk.mp3', description: 'Caminar', example: 'She walks to the store.' },
        { word: 'jump', image: 'media/jump.jpg', audio: 'media/jump.mp3', description: 'Saltar', example: 'He jumps over the fence.' },
        { word: 'dance', image: 'media/dance.jpg', audio: 'media/dance.mp3', description: 'Bailar', example: 'They dance at the party.' },
        { word: 'read', image: 'media/read.jpg', audio: 'media/read.mp3', description: 'Leer', example: 'We read a book.' },
        { word: 'write', image: 'media/write.jpg', audio: 'media/write.mp3', description: 'Escribir', example: 'She writes a letter.' },
        { word: 'cook', image: 'media/cook.jpg', audio: 'media/cook.mp3', description: 'Cocinar', example: 'He cooks dinner.' },
        { word: 'eat', image: 'media/eat.jpg', audio: 'media/eat.mp3', description: 'Comer', example: 'They eat lunch.' },
        { word: 'drink', image: 'media/drink.jpg', audio: 'media/drink.mp3', description: 'Beber', example: 'He drinks water.' },
        { word: 'sleep', image: 'media/sleep.jpg', audio: 'media/sleep.mp3', description: 'Dormir', example: 'She sleeps eight hours.' },
        { word: 'smile', image: 'media/smile.jpg', audio: 'media/smile.mp3', description: 'Sonreír', example: 'They smile in the photo.' }

        
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

            const example = document.createElement('p');
            example.textContent = `Example: ${verb.example}`;
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
