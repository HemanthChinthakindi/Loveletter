let isOpen = false;

const envelope = document.querySelector('.envelope');
const flap = document.querySelector('.flap');
const zipperHandle = document.querySelector('.zipper-handle');
const letter = document.getElementById('love-message');

zipperHandle.addEventListener('click', toggleLetter);

function toggleLetter() {
    if (!isOpen) {
        // Open the letter
        flap.style.transform = 'rotateX(180deg)';
        envelope.classList.add('open');
        letter.classList.add('open');
        playAudio();
        isOpen = true;
    } else {
        // Close the letter
        flap.style.transform = '';
        envelope.classList.remove('open');
        letter.classList.remove('open');
        stopAudio();
        isOpen = false;
    }
}

function playAudio() {
    const audio = document.getElementById('mylove-audio');
    audio.play()
        .then(() => console.log('Playback started'))
        .catch(error => console.error('Playback could not be started:', error));
}

function stopAudio() {
    const audio = document.getElementById('mylove-audio');
    audio.pause();
    audio.currentTime = 0;
}
