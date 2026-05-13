const gameUrls = {
    'bitlife': './Games/BitLife/index.html',
    'retro-bowl': './Games/retro-bowl/index.html',
    'slope': './Games/slope/index.html',
};

function loadGame(gameKey) {
    const frame = document.getElementById('game-frame');
    frame.src = gameUrls[gameKey];
}
