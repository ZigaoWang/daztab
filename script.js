const quotes = [
  "Smile, breathe, and go slowly.",
  "Every moment is a new beginning.",
  "You are stronger than you think.",
  "Believe you can and you're halfway there.",
  "Progress, not perfection.",
  "The future depends on what you do today.",
  "Dream big and dare to fail.",
  "Challenges are what make life interesting.",
  "Embrace the uncertainty.",
  "Life is tough, but so are you.",
  "Be kind to yourself.",
  "Keep going, you're making progress.",
  "Difficult roads lead to beautiful destinations.",
  "Inhale confidence, exhale doubt.",
  "The only limit is your mind.",
  "Stay positive. Work hard. Make it happen.",
  "You got this.",
  "The best is yet to come.",
  "The harder you work, the luckier you get.",
  "Be a voice, not an echo.",
  "Rise above the storm and you will find the sunshine.",
  "Make today amazing.",
  "Create your own sunshine.",
  "You are unstoppable.",
  "Every day is a new chance.",
  "Good things take time.",
  "Your vibe attracts your tribe.",
  "Change your thoughts, change your world.",
  "Don't watch the clock; do what it does. Keep going.",
  "Do what you can, with what you have, where you are.",
  "Stay close to people who feel like sunlight.",
  "Believe in yourself and all that you are.",
  "Wake up with determination, go to bed with satisfaction.",
  "You are never too old to set another goal.",
  "Don't wait for opportunity. Create it.",
  "Your life does not get better by chance, it gets better by change.",
  "The only way to predict the future is to create it.",
  "Don't count the days; make the days count.",
  "Dream it, wish it, do it.",
  "Strive for progress, not perfection.",
  "Be yourself; everyone else is already taken.",
  "The power of imagination makes us infinite.",
  "It's not about ideas. It's about making ideas happen.",
  "Doubt kills more dreams than failure ever will.",
  "Stay hungry, stay foolish.",
  "Life is either a daring adventure or nothing at all.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "It's not whether you get knocked down, it's whether you get up.",
  "If you want to lift yourself up, lift up someone else.",
];

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

function updateDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateText = now.toLocaleDateString('en-US', options);
  document.getElementById('date').textContent = dateText;
}

function updateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
}

const imageUpload = document.getElementById('image-upload');
const backgroundContainer = document.getElementById('background-container');
const uploadButton = document.getElementById('upload-button');
const deleteButton = document.getElementById('delete-button');

imageUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      backgroundContainer.style.backgroundImage = `url('${imageUrl}')`;

      // Store background image in localStorage
      localStorage.setItem('backgroundImage', JSON.stringify(imageUrl));
    };
    reader.readAsDataURL(file);
  }
});

uploadButton.addEventListener('click', () => {
  imageUpload.click();
});

deleteButton.addEventListener('click', () => {
  backgroundContainer.style.backgroundImage = 'url(https://bing.shangzhenyang.com/api/1080p)';
  localStorage.removeItem('backgroundImage');
});

document.addEventListener('DOMContentLoaded', () => {
  const cachedBackgroundImage = JSON.parse(localStorage.getItem('backgroundImage'));
  if (cachedBackgroundImage) {
    backgroundContainer.style.backgroundImage = `url('${cachedBackgroundImage}')`;
  } else {
    backgroundContainer.style.backgroundImage = 'url(https://bing.shangzhenyang.com/api/1080p)';
  }

  updateClock();
  setInterval(updateClock, 1000);

  updateDate();
  updateQuote();
});

const aboutButton = document.getElementById('about-button');
const aboutPopup = document.getElementById('about-popup');
const aboutClose = document.getElementById('about-close');

aboutButton.addEventListener('click', () => {
  aboutPopup.style.display = 'flex';
});

aboutClose.addEventListener('click', () => {
  aboutPopup.style.display = 'none';
});
aboutButton.addEventListener('click', () => {
  aboutPopup.classList.add('fade-in');
  aboutPopup.style.display = 'flex';
});

aboutClose.addEventListener('click', () => {
  aboutPopup.classList.add('fade-out');
  setTimeout(() => {
    aboutPopup.classList.remove('fade-out');
    aboutPopup.style.display = 'none';
  }, 300); // 300ms matches the duration of the fade-out animation
});
