function createFlowers() {
    const numFlowers = 80;
    const flowersContainer = document.createElement('div');
    document.body.appendChild(flowersContainer);

    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        const distance = Math.random() * 300 + 100; // random distance between 100 and 400
        const angle = Math.random() * 2 * Math.PI; // random angle in radians

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        flower.style.position = 'absolute';
        flower.style.left = `calc(50% + ${x}px)`;
        flower.style.top = `calc(50% + ${y}px)`;
        flowersContainer.appendChild(flower);
    }

    playSound();
}

function playSound() {
    const audio = new Audio('path/to/multi-note-sound-effect.mp3');
    audio.play();
}

createFlowers();