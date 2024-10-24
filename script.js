document.getElementById('adina-btn').addEventListener('click', function() {
    var sound1 = document.getElementById('fart-sound');
    var sound2 = document.getElementById('bandicam-sound');
    
    // Воспроизведение первого звука
    sound2.play();
    
    // После окончания первого звука воспроизводим второй
    sound2.onended = function() {
        sound1.play();
    };
});
