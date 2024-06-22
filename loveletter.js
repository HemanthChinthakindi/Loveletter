let isDragging = false;
let startY = 0;
let startRotation = 0;

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
    startRotation = getCurrentRotation();
    envelope.classList.add('dragging');
    dragHelper.style.display = 'none'; // Hide drag helper when dragging starts
}

function drag(event) {
    if (!isDragging) return;
    let currentY = event.clientY;
    let rotation = startRotation + (currentY - startY) * 0.2; // Adjust multiplier for rotation speed
    
    // Limit rotation to 0 to 180 degrees
    rotation = Math.max(0, Math.min(rotation, 180));
    
    flap.style.transform = `rotateX(${rotation}deg)`;
    
    if (rotation >= 180) {
        envelope.classList.add('open');
        letter.classList.add('open');
        playAudio();
        // Hide drag helper permanently once letter is opened
        dragHelper.style.display = 'none';
    } else {
        envelope.classList.remove('open');
        letter.classList.remove('open');
        stopAudio();
    }
}

function endDrag(event) {
    isDragging = false;
    envelope.classList.remove('dragging');
    // Show drag helper only if the letter is not fully opened
    if (!envelope.classList.contains('open')) {
        dragHelper.style.display = 'block';
    }
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
