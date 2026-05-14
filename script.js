const gameUrls = {
    'retro-bowl': './Games/retro-bowl/index.html',
    'bitlife': './Games/BitLife/index.html',
    'slope': './Games/slope/index.html'
};

function launchGame(gameKey) {
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('game-stage').classList.add('active');
    document.getElementById('game-frame').src = gameUrls[gameKey];
    document.getElementById('current-title').innerText = gameKey.toUpperCase();
}

function backToMenu() {
    document.getElementById('game-frame').src = "";
    document.getElementById('game-stage').classList.remove('active');
    document.getElementById('home-screen').classList.add('active');
}

function toggleFullscreen() {
    const stage = document.getElementById('stage-wrapper');
    if (!document.fullscreenElement) {
        stage.requestFullscreen().catch(err => {
            // iOS Fallback logic
            stage.classList.add('ios-full');
        });
    } else {
        document.exitFullscreen();
    }
}
