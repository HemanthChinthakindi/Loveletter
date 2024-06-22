let isDragging = false;
let startMouseY = 0;
let startFlapRotation = 0;

const envelope = document.querySelector('.envelope');
const flap = document.querySelector('.flap');
const zipperHandle = document.querySelector('.zipper-handle');
const letter = document.getElementById('love-message');

zipperHandle.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', endDrag);

function startDrag(event) {
    isDragging = true;
    startMouseY = event.clientY;
    startFlapRotation = getCurrentRotation();
    envelope.classList.add('dragging');
}

function drag(event) {
    if (!isDragging) return;
    let currentMouseY = event.clientY;
    let dragDistance = currentMouseY - startMouseY;
    
    // Limit drag distance to positive values
    dragDistance = Math.max(0, dragDistance);
    
    let newRotation = startFlapRotation + (dragDistance / 5); // Adjust divisor for rotation speed
    
    flap.style.transform = `rotateX(${newRotation}deg)`;
    
    if (newRotation >= 180) {
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
    envelope.classList.remove('dragging');
}

function getCurrentRotation() {
    let style = window.getComputedStyle(flap);
    let transform = style.getPropertyValue('transform');
    let matrix = transform.split('(')[1].split(')')[0].split(',');
    let angle = Math.round(Math.asin(matrix[1]) * (180/Math.PI));
    return angle;
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
