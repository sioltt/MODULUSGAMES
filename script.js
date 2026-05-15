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

function goToClassroom() {
    window.location.href = "https://classroom.google.com";
}

// Fullscreen Logic
function toggleFullscreen() {
    const stage = document.getElementById('stage-wrapper');
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (stage.requestFullscreen) stage.requestFullscreen();
        else if (stage.webkitRequestFullscreen) stage.webkitRequestFullscreen();
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    }
}

// iOS Swipe Detection (150px threshold to prevent accidental exits)
let touchstartY = 0;
let touchendY = 0;

document.addEventListener('touchstart', e => {
    touchstartY = e.changedTouches[0].screenY;
}, {passive: true});

document.addEventListener('touchend', e => {
    touchendY = e.changedTouches[0].screenY;
    const isStageActive = document.getElementById('game-stage').classList.contains('active');
    
    // Swipe down 150px or more exits fullscreen
    if (isStageActive && (touchendY > touchstartY + 150)) {
        if (document.fullscreenElement || document.webkitFullscreenElement) {
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        }
    }
}, {passive: true});
