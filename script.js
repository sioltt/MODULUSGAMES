const gameUrls = {
    'retro-bowl': './Games/retro-bowl/index.html',
    'bitlife': './Games/BitLife/index.html',
    'slope': './Games/slope/index.html'
};

function loadGame(gameKey) {
    const home = document.getElementById('home-menu');
    const stage = document.getElementById('game-stage');
    const frame = document.getElementById('game-frame');
    
    // Hide Home, Show Stage
    home.style.display = 'none';
    stage.classList.add('active');
    
    // Load Game
    if (gameUrls[gameKey]) {
        frame.src = gameUrls[gameKey];
        document.getElementById('current-title').innerText = gameKey.toUpperCase();
    }
}

// Swipe Down to Exit Fullscreen
let touchstartY = 0;
let touchendY = 0;

document.addEventListener('touchstart', e => {
    touchstartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', e => {
    touchendY = e.changedTouches[0].screenY;
    handleGesture();
});

function handleGesture() {
    // If swipe down is long enough and we are in fullscreen
    if (touchendY > touchstartY + 100) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }
}

function toggleFullscreen() {
    const stage = document.getElementById('stage');
    
    // iOS Safari Fix: If standard fullscreen fails, we use a CSS fallback
    if (stage.requestFullscreen) {
        stage.requestFullscreen();
    } else if (stage.webkitRequestFullscreen) { /* iOS/Safari */
        stage.webkitRequestFullscreen();
    } else {
        // Pseudo-fullscreen for iOS Home Screen App
        stage.style.position = 'fixed';
        stage.style.top = '0';
        stage.style.left = '0';
        stage.style.width = '100vw';
        stage.style.height = '100vh';
        stage.style.zIndex = '9999';
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
