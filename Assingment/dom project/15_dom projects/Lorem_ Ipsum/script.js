const generateButton = document.querySelector('button');
const inputButton = document.querySelector('input');
const paragraph = document.querySelector('.para p');

function submitButton() {
    const numPara = parseInt(inputButton.value);
    if (numPara <= 0) {
        paragraph.style.display = 'none';
    } else {
        let loremText = '';
        for (let i = 0; i < numPara; i++) {
            loremText += 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corrupti iusto totam, pariatur a iste omnis expedita! Quasi tempore eos corporis autem quibusdam! Error labore ducimus aperiam minus autem similique.';
            if (i < numPara-1) {
                loremText += '\n\n';
            }
        }
        paragraph.innerText = loremText;
        paragraph.style.display = 'block'; 
    }
}
document.addEventListener('click',submitButton)