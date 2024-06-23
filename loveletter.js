document.addEventListener("DOMContentLoaded", function() {
    var openMessage = document.getElementById('openMessage');
    openMessage.classList.add('active');
});

function toggleLetter() {
    var envelope = document.querySelector('.envelope');
    var letter = document.getElementById('love-message');
    var flap = document.querySelector('.flap');
    var openMessage = document.getElementById('openMessage');

    if (!envelope.classList.contains('open')) {
        // Open the envelope
        envelope.classList.add('open');
        playAudio(); // Play audio immediately
        setTimeout(function() {
            letter.classList.add('open');
        }, 1000); // Wait for the flap to open completely (1 second) before showing the letter
    } else {
        // Close the envelope
        letter.classList.remove('open');
        stopAudio();
        setTimeout(function() {
            envelope.classList.remove('open');
        }, 1000); // Wait for the letter to hide before closing the envelope (1 second)
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
