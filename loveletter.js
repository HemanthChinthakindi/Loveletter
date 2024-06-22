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
        }, 2000); // Slower timing for letter reveal
    } else {
        // Close the envelope
        letter.classList.remove('open');
        stopAudio();
        setTimeout(function() {
            envelope.classList.remove('open');
        }, 2000); // Slower timing for envelope close
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
