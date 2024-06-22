let isDragging = false;
let startMouseY = 0;
let startFlapRotation = 0;
let minDragDistance = 20; // Minimum pixels to drag before opening

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
    startMouseY = event.clientY;
    startFlapRotation = getCurrentRotation();
    envelope.classList.add('dragging');
    dragHelper.style.display = 'none'; // Hide drag helper when dragging starts
}

function drag(event) {
    if (!isDragging) return;
    let currentMouseY = event.clientY;
    let dragDistance = currentMouseY - startMouseY;
    
    // Limit drag distance
    if (dragDistance < 0) dragDistance = 0;
    if (dragDistance > minDragDistance) dragDistance = minDragDistance;
    
    let newRotation = startFlapRotation + (dragDistance / minDragDistance) * 180;
    flap.style.transform = `rotateX(${newRotation}deg)`;
    
    // Open the envelope when minimum drag distance is reached
    if (dragDistance >= minDragDistance) {
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
