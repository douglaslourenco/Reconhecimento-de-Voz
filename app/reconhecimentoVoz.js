window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const elementoChute = document.getElementById('chute');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);


function verifica(chute) {
    if (chute == res) {
        document.getElementById('feedback').innerText = `Parabéns, você acertou!`;
    } else {
        document.getElementById('feedback').innerText = `Você errou!`;
    }
}


function onSpeak(e) {
    var chute = e.results[0][0].transcript
    exibeChuteNaTela(chute);
    verifica(chute);
}


function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}