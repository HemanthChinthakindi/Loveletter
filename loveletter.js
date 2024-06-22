let isDragging = false;
let startY = 0;
let currentY = 0;

const envelope = document.querySelector('.envelope');
const flap = document.querySelector('.flap');
const zipperHandle = document.querySelector('.zipper-handle');
const letter = document.getElementById('love-message');
const dragHelper = document.querySelector('.drag-helper');

zipperHandle.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', endDrag);

function startDrag(event) {
    isDragging = true;
    startY = event.clientY;
    envelope.classList.add('dragging');
    dragHelper.style.display = 'none'; // Hide drag helper when dragging starts
}

function drag(event) {
    if (!isDragging) return;
    currentY = event.clientY;
    let distance = currentY - startY;
    if (distance < 0) distance = 0;
    let rotation = Math.min(distance / 2, 180); // Control rotation
    flap.style.transform = `rotateX(${-rotation}deg)`;
    if (rotation === 180) {
        envelope.classList.add('open');
        letter.classList.add('open');
        playAudio();
    } else {
        envelope.classList.remove('open');
        letter.classList.remove('open');
        stopAudio();
    }
}

function endDrag(event) {
    isDragging = false;
    flap.style.transform = '';
    envelope.classList.remove('dragging');
    dragHelper.style.display = 'block'; // Show drag helper when dragging ends
    if (envelope.classList.contains('open')) {
        flap.style.transform = 'rotateX(-180deg)';
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
