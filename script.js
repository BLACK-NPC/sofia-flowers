const animateBtn = document.getElementById('animateBtn');
const flowersContainer = document.querySelector('.flowers-container');

const flowerEmojis = ['🌼', '🌻', '🌷', '🌹', '💛', '⭐', '✨'];

// Create falling flowers continuously
setInterval(() => {
  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
  flower.style.left = Math.random() * 100 + '%';
  flower.style.position = 'fixed';
  flower.style.fontSize = '2rem';
  flower.style.pointerEvents = 'none';
  flowersContainer.appendChild(flower);
  
  setTimeout(() => flower.remove(), 8000);
}, 300);

// Button click animation
animateBtn.addEventListener('click', () => {
  for (let i = 0; i < 60; i++) {
    const flower = document.createElement('div');
    flower.className = 'flower flower-burst';
    flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    flower.style.left = Math.random() * 100 + '%';
    flower.style.top = '50%';
    flower.style.position = 'fixed';
    flower.style.fontSize = '2.5rem';
    flower.style.pointerEvents = 'none';
    flowersContainer.appendChild(flower);
    
    setTimeout(() => flower.remove(), 2000);
  }
  
  // Play sound
  playSound();
});

function playSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.value = 800;
  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.5);
}