        const inputText = document.getElementById('inputText');
        const searchIcon = document.getElementById('SearchIcon');

        inputText.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                submitText();
            }
        });

        searchIcon.addEventListener('click', submitText);

        function submitText() {
            const text = inputText.value.trim(); 

            if (!text || text.length < 4) {
                alert('Invalid Search !! Please enter at least 4 characters to Search.');
                return; 
            }
            window.location.href = `https://www.google.com/search?q=${inputText.value}`;
            inputText.value = '';
        }

        document.getElementById('SearchIcon').addEventListener('click', () => {
            if (!text || text.length < 4) {
                alert('Invalid Search !! Please enter at least 4 characters to Search.');
                return; 
            }
            // window.location.href = `https://www.google.com/search?q=${document.getElementById('inputText').value}`
            window.location.href = `https://www.google.com/search?q=${inputText}`;
        })




// ///////////////////////////////////////////////////////

const typingText = document.querySelector('.Notify');
const textArray = [ "Welcome to FunGoogle !!", "Don't ask.me, Use @FunGoogle !!","Search anything under the Sun !!", "Search for Code, Design, Course etc.", "Code For Fun !!","Have a Great Time !!"]; 
let currentText = 0;
let charIndex = 0;

function typeWriter() {
    const currentString = textArray[currentText];
    if (charIndex < currentString.length) {
        typingText.textContent += currentString.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 150);
    } else {
        setTimeout(() => {
            charIndex = 0;
            typingText.textContent = '';
            currentText = (currentText + 1) % textArray.length; 
            typeWriter();
        }, 1500); 
    }
}

typeWriter();