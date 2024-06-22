document.getElementById('playSong').addEventListener('click', function() {
    var audio = document.getElementById('myLoveSong');
    if (audio.paused) {
        audio.play();
        this.textContent = 'Pause Song';
    } else {
        audio.pause();
        audio.currentTime = 0; // Rewind to the beginning
        this.textContent = 'Play Song';
    }
});
