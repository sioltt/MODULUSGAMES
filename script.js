const gameUrls = {
    'bitlife': './Games/BitLife/index.html',
    'retro-bowl': './Games/retro-bowl/index.html',
    'slope': 'https://3kh0-assets.silvereen.net/3kh0-assets/slope/'
};

function loadGame(gameKey) {
    const frame = document.getElementById('game-frame');
    frame.src = gameUrls[gameKey];
}
