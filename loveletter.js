let isOpen = false;

const envelope = document.querySelector('.envelope');
const flap = document.querySelector('.flap');
const zipperHandle = document.querySelector('.zipper-handle');
const letter = document.getElementById('love-message');

zipperHandle.addEventListener('click', toggleLetter);

function toggleLetter() {
    if (!isOpen) {
        flap.style.transform = 'rotateX(180deg)';
        envelope.classList.add('open');
        letter.classList.add('open');
        playAudio();
        isOpen = true;
        
        // Disable further clicks once letter is opened
        zipperHandle.style.pointerEvents = 'none';
        zipperHandle.style.cursor = 'default';
    }
}

function playAudio() {
    const audio = document.getElementById('mylove-audio');
    audio.play()
        .then(() => console.log('Playback started'))
        .catch(error => console.error('Playback could not be started:', error));
}
