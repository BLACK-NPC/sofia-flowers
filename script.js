const FLOWER_EMOJIS = ['🌸', '🌼', '🌺', '💐', '🌷', '🌹', '💛', '✨'];

function createFlower() {
    const container = document.querySelector('.flowers-container');
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.textContent = FLOWER_EMOJIS[Math.floor(Math.random() * FLOWER_EMOJIS.length)];

    const startX = Math.random() * 100;
    const duration = Math.random() * 3 + 3;
    const delay = Math.random() * 2;

    flower.style.left = `${startX}vw`;
    flower.style.bottom = `${Math.random() * 20}vh`;
    flower.style.animationDuration = `${duration}s`;
    flower.style.animationDelay = `${delay}s`;
    flower.style.fontSize = `${Math.random() * 1.5 + 1.2}rem`;

    container.appendChild(flower);

    flower.addEventListener('animationend', () => flower.remove());
}

function launchFlowers() {
    const count = 60;
    for (let i = 0; i < count; i++) {
        setTimeout(createFlower, i * 80);
    }
}

document.getElementById('animateBtn').addEventListener('click', launchFlowers);