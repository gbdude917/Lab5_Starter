// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}

// Apply image depending on selection
var selectElement = document.querySelector("#horn-select");
var image = document.querySelector('img');
var sound = document.querySelector('audio');
var intensity;
selectElement.addEventListener('change', (event) => {
  if(selectElement.value == "air-horn"){
    image.src = "assets/images/air-horn.svg";
    sound.setAttribute('src', 'assets/audio/air-horn.mp3');
    button(sound);
  }
  else if(selectElement.value == "car-horn"){
    image.src = "assets/images/car-horn.svg";
    sound.setAttribute('src', 'assets/audio/car-horn.mp3');
    button(sound);
  }
  else if(selectElement.value == "party-horn"){
    image.src = "assets/images/party-horn.svg";
    sound.setAttribute('src', 'assets/audio/party-horn.mp3');
    hornButton(sound);
  }
});

// Adjust volume image
function getVolume(){
  const volume = document.querySelector("#volume");
  const volImage = document.querySelector("#volume-controls").querySelector('img');
  volume.addEventListener('change', event => {
    if(volume.value == 0){
      volImage.setAttribute('src', 'assets/icons/volume-level-0.svg');
    }
    if(1 <= volume.value && volume.value < 33){
      volImage.setAttribute('src', 'assets/icons/volume-level-1.svg');
    }
    if(33 <= volume.value && volume.value < 67){
      volImage.setAttribute('src', 'assets/icons/volume-level-2.svg');
    }
    if(67 <= volume.value){
      volImage.setAttribute('src', 'assets/icons/volume-level-3.svg');
    }
  });
  return volume.value/100;
}
// Play the sound at proper volume level, party horn has confetti
function button(sound){
  var playButton = document.querySelector('button');
  playButton.addEventListener('click', event => {
    intensity = getVolume();
    sound.volume = intensity;
    sound.load();
    sound.play();
  });
}

function hornButton(sound){
  intensity = getVolume();
  var jsConfetti = new JSConfetti();
  var playButton = document.querySelector('button');
  playButton.addEventListener('click', event => {
    jsConfetti.addConfetti();
    intensity = getVolume();
    sound.volume = intensity;
    sound.load();
    sound.play();
  });
}