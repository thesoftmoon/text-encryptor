const textInputForm = document.getElementById('textEncryptor');
const encryptorBtn = document.getElementById('encryptorBtn');
const decryptorBtn = document.getElementById('decryptorBtn');
const textContainer = document.querySelector('.input-resolver-container');

function createTextDiv(newText) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('text-result-container');
    let newResultText = document.createElement('p');
    newResultText.classList.add('result-text');
    newResultText.textContent = newText;
    newDiv.appendChild(newResultText);
    textContainer.appendChild(newDiv);
}

function encryptText(value) {
    let emptyTextMessage = document.querySelector('.empty-message');
    if (emptyTextMessage) {
        emptyTextMessage.remove();
    }

    let existingResultMessage = document.querySelector('.text-result-container');
    if (existingResultMessage) {
        existingResultMessage.remove();
    }

    let outputText = '';
    for (let i = 0; i < value.length; i++) {
        let currentLetter = value[i];
        if (currentLetter === 'e') {
            outputText += 'enter';
        } else if (currentLetter === 'i') {
            outputText += 'imes';
        }
        else if (currentLetter === 'a') {
            outputText += 'ai';
        }
        else if (currentLetter === 'o') {
            outputText += 'ober';
        }
        else if (currentLetter === 'u') {
            outputText += 'ufat';
        }
        else {
            outputText += currentLetter;
        }
    }

    createTextDiv(outputText);
};

function decryptText(value) {

    let emptyTextMessage = document.querySelector('.empty-message');
    if (emptyTextMessage) {
        emptyTextMessage.remove();
    }

    let existingResultMessage = document.querySelector('.text-result-container');
    if (existingResultMessage) {
        existingResultMessage.remove();
    }

    const replacements = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    for (let word in replacements) {
        const regex = new RegExp(word, 'g');
        value = value.replace(regex, replacements[word]);
    }

    let outputText = value;
    createTextDiv(outputText);
};

encryptorBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let inputText = document.getElementById('inputText');
    encryptText(inputText.value);
    inputText.value = '';
});

decryptorBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let inputText = document.getElementById('inputText');
    decryptText(inputText.value);
    inputText.value = '';
});