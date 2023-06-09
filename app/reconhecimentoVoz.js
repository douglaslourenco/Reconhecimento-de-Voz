window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const elementoChute = document.getElementById('chute');
const btn = document.getElementById('btn');
const feedback = document.getElementById('feedback');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);


function verifica(chute) {
    if (chute == res) {
        feedback.innerText = `Parabéns, você acertou!`;
    } else {
        feedback.innerText = `Você errou!`;
    }
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

function onSpeak(e) {
    var chute = e.results[0][0].transcript
    exibeChuteNaTela(chute);
    verifica(chute);
    console.log(e);
}
var msg;
var reticencia;
function tentarNovamente (chute) {
    reset();
    elementoChute.innerHTML = ``
    msg = feedback.innerHTML = `<div id="feedback" class="feedback">Fale a resposta<span class="teste">|</span></div>`;
    recognition.start();
}

btn.onclick = tentarNovamente;