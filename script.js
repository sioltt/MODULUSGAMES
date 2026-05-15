const gameUrls = {
    'retro-bowl': './Games/retro-bowl/index.html',
    'bitlife': './Games/BitLife/index.html',
    'slope': './Games/slope/index.html'
};

// --- MATRIX DATA RAIN LOGIC ---
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;
const rainDrops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
    // Slight black fill to create the trailing fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00f2ff'; // Your Neon Cyan/Blue
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}

// Start the animation loop
const matrixInterval = setInterval(drawMatrix, 30);

// --- BOOT TRANSITION ---
window.addEventListener('load', () => {
    setTimeout(() => {
        const bootScreen = document.getElementById('boot-screen');
        bootScreen.classList.add('boot-fade');
        
        // Stop the matrix calculations once screen is hidden to save battery
        setTimeout(() => {
            clearInterval(matrixInterval);
            bootScreen.style.display = 'none';
        }, 1500);
    }, 3000); // Sequence lasts 3 seconds
});

// Resizing fix
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// 2. CORE NAVIGATION
function launchGame(gameKey) {
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('game-stage').classList.add('active');
    document.getElementById('game-frame').src = gameUrls[gameKey];
    document.getElementById('current-title').innerText = gameKey.toUpperCase().replace('-', ' ');
}

function backToMenu() {
    document.getElementById('game-frame').src = "";
    document.getElementById('game-stage').classList.remove('active');
    document.getElementById('home-screen').classList.add('active');
}

function goToClassroom() {
    window.location.href = "https://classroom.google.com";
}

// 3. FULLSCREEN & iOS SWIPE FIX
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

let touchstartY = 0;
document.addEventListener('touchstart', e => { touchstartY = e.changedTouches[0].screenY; }, {passive: true});
document.addEventListener('touchend', e => {
    const touchendY = e.changedTouches[0].screenY;
    const isStageActive = document.getElementById('game-stage').classList.contains('active');
    
    if (isStageActive && (touchendY > touchstartY + 150)) {
        if (document.fullscreenElement || document.webkitFullscreenElement) {
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        }
    }
}, {passive: true});
