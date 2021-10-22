// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}

// Populate the options list
const tts = window.speechSynthesis;
var voices;
var select = document.querySelector("#voice-select");

setTimeout(() => {
  voices = tts.getVoices();
  populateSelect();
}, 50);

function populateSelect(){
  for(var i = 0; i < voices.length; i++){
    var option  = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    option.setAttribute('value', i);
    select.appendChild(option);
  }
}

// Button implementation
var button = document.querySelector('button');
var textArea = document.querySelector('textarea');
var image = document.querySelector('img');
button.addEventListener('click', event => {
  var speech = new SpeechSynthesisUtterance(textArea.value);
  speech.voice = voices[select.value];
  speech.lang = voices[select.value].lang;
  tts.speak(speech);
  console.log(tts.speaking);
  
  speech.onstart = function (event) {
    image.src = "assets/images/smiling-open.png";
  };

  speech.onend = function (event) {
    image.src = "assets/images/smiling.png"; 
  };
});