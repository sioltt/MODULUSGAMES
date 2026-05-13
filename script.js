const gameUrls = {
    'retro-bowl': './Games/retro-bowl/index.html',
    'bitlife': './Games/BitLife/index.html',
    'slope': './Games/slope/index.html'
};

function loadGame(gameKey) {
    const frame = document.getElementById('game-frame');
    const title = document.getElementById('current-title');
    const status = document.getElementById('status-line');

    if (gameUrls[gameKey]) {
        frame.src = gameUrls[gameKey];
        title.innerText = gameKey.replace('-', ' ').toUpperCase();
        status.innerText = `> Loading ${gameKey}...`;
        
        // Update active button state
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        event.currentTarget.classList.add('active');
    }
}

function toggleFullscreen() {
    const stage = document.getElementById('stage');
    
    if (!document.fullscreenElement) {
        stage.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Panic Key for stealth
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'p') {
        window.location.href = "https://www.google.com";
    }
});
