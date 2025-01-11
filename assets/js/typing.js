
        const textContainer = document.getElementById('text-container');
        const textToType = [
            "Pioneering tech education",
            "Your No 1 ICT Partner",
            "Trailblazing your tech learning",
            "Your ICT  ally",
            "Forging your path in tech education"
        ];
        let index = 0;
        let wordIndex = 0;
        let typingSpeed = 80; // Adjust the typing speed (milliseconds per character)
        let wordPause = 2000; // Pause between sentences (milliseconds)

        function typeAndClearText() {
            if (wordIndex < textToType[index].length) {
                textContainer.innerHTML += textToType[index].charAt(wordIndex);
                wordIndex++;
                setTimeout(typeAndClearText, typingSpeed);
            } else {
                setTimeout(clearText, wordPause);
            }
        }

        function clearText() {
            textContainer.innerHTML = '';
            wordIndex = 0;
            index = (index + 1) % textToType.length; // Cycle through sentences
            setTimeout(typeAndClearText, typingSpeed);
        }

        // Start typing automatically
        setTimeout(typeAndClearText, typingSpeed);
   