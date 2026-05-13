const gameUrls = {
    'bitlife': 'https://3kh0-assets.silvereen.net/3kh0-assets/BitLife/',
    'retro-bowl': 'https://3kh0-assets.silvereen.net/3kh0-assets/retro-bowl/',
    'slope': 'https://3kh0-assets.silvereen.net/3kh0-assets/slope/'
};

function loadGame(gameKey) {
    const frame = document.getElementById('game-frame');
    frame.src = gameUrls[gameKey];
}
