function toggleLetter() {
    var envelope = document.querySelector('.envelope');
    var letter = document.getElementById('love-message');
    var flap = document.querySelector('.flap');

    if (!envelope.classList.contains('open')) {
        // Open the envelope
        envelope.classList.add('open');
        playAudio(); // Play audio immediately
        setTimeout(function() {
            letter.classList.add('open');
        }, 200); // Faster timing for letter reveal (reduced from 2000 to 200 milliseconds)
    } else {
        // Close the envelope
        letter.classList.remove('open');
        stopAudio();
        setTimeout(function() {
            envelope.classList.remove('open');
        }, 200); // Faster timing for envelope close (reduced from 2000 to 200 milliseconds)
    }
}

function playAudio() {
    var audio = document.getElementById('mylove-audio');
    audio.play()
        .then(() => console.log('Playback started'))
        .catch(error => console.error('Playback could not be started:', error));
}

function stopAudio() {
    var audio = document.getElementById('mylove-audio');
    audio.pause();
    audio.currentTime = 0;
}
