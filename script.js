
  
    const playButton = document.getElementById('playButton');
    const sliders = document.querySelectorAll('.slider');
    const audioFiles = {
      rain: new Audio('sounds/rain.mp3'),
      thunder: new Audio('sounds/thunder.mp3'),
      home: new Audio('sounds/home.mp3'),
      silence: new Audio('sounds/silence.mp3'),
      fire: new Audio('sounds/fire.mp3'),
      ocean: new Audio('sounds/ocean.mp3'),
      wind: new Audio('sounds/wind.mp3'),
      night: new Audio('sounds/night.mp3'),
    };
    // Set initial volume for each sound
    for (const slider of sliders) {
      const sound = audioFiles[slider.dataset.sound];
      sound.volume = slider.value / 100;
      slider.addEventListener('input', () => {
        sound.volume = slider.value / 100;
      });
    }
    playButton.addEventListener('click', () => {
      for (const sound of Object.values(audioFiles)) {
        sound.play();
      }
    });