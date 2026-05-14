const gameUrls = {
    'retro-bowl': './Games/retro-bowl/index.html',
    'bitlife': './Games/BitLife/index.html',
    'slope': './Games/slope/index.html'
};

function launchGame(gameKey) {
    // Switch Screens
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('game-stage').classList.add('active');
    
    // Load Game
    const frame = document.getElementById('game-frame');
    frame.src = gameUrls[gameKey];
    document.getElementById('current-title').innerText = gameKey.toUpperCase();
}

function backToMenu() {
    // Stop the game and switch back
    const frame = document.getElementById('game-frame');
    frame.src = ""; // Clears the game so it doesn't run in background
    
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
