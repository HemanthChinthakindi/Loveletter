function toggleLetter() {
    var envelope = document.querySelector('.envelope');
    var letter = document.getElementById('love-message');
    var flap = document.querySelector('.flap');

    if (!envelope.classList.contains('open')) {
        // Open the envelope
        envelope.classList.add('open');
        setTimeout(function() {
            letter.classList.add('fullSize');
            letter.style.opacity = '1';
            playAudio();
        }, 800);
    } else {
        // Close the envelope
        letter.classList.remove('fullSize');
        letter.style.opacity = '0';
        setTimeout(function() {
            envelope.classList.remove('open');
            stopAudio();
        }, 800);
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
