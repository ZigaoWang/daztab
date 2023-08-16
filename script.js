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
  "Do more things that make you forget to check your phone.",
  "Stay curious.",
  "Be yourself, unapologetically.",
  "Embrace the journey.",
  "Shine your light.",
  "Find joy in the ordinary.",
  "Dream without limits.",
  "Leap, then look.",
  "Chase your passions.",
  "Seek adventure.",
  "Love fiercely.",
  "Stay wild.",
  "Live in the moment.",
  "Rise above.",
  "Create your story.",
  "Never settle.",
  "Keep exploring.",
  "Inspire with kindness.",
  "Dare to be bold.",
  "Celebrate small wins.",
  "Find strength within.",
  "Smile often.",
  "Choose happiness.",
  "Embrace change.",
  "Push your limits.",
  "Discover your purpose.",
  "Speak your truth.",
  "Stay positive.",
  "Make it happen.",
  "Grow through challenges.",
  "Radiate positivity.",
  "Keep moving forward.",
  "Savor every moment.",
  "Own your uniqueness.",
  "Elevate your mindset.",
  "Breathe in possibilities.",
  "Be a light.",
  "Conquer your fears.",
  "Follow your heart.",
  "See beauty everywhere.",
  "Live with intention.",
  "Stay unstoppable.",
  "Find magic in simplicity.",
  "Believe in miracles.",
  "Forge your path.",
  "Cherish the journey.",
  "Create your reality.",
  "Rise and shine.",
  "Sparkle with joy.",
  "Leap into the unknown.",
  "Inspire, ignite, impact.",
  "Dance in the rain.",
  "Love and be loved.",
  "Discover new horizons.",
  "Unleash your potential.",
  "Make waves.",
  "Create your legacy.",
  "Find joy in simplicity.",
  "Embrace the unknown.",
  "Celebrate your journey.",
  "Live with purpose.",
  "Ignite your passion.",
  "Dream big dreams.",
  "Keep evolving.",
  "Stay resilient.",
  "Write your own story.",
  "Live without regrets.",
  "Follow your heart.",
  "Redefine possibilities.",
  "Chase what sets your soul on fire.",
  "Leap of faith.",
  "Embrace every moment.",
  "Stay curious and grow.",
  "Radiate positivity.",
  "Lead with kindness.",
  "Believe in yourself.",
  "Keep exploring life.",
  "Keep dreaming, keep achieving.",
  "Focus on the good.",
  "Conquer from within.",
  "Live in the now.",
  "Make today amazing.",
  "Seize the day.",
  "Trust the process.",
  "Unleash your inner strength.",
  "Live your truth.",
  "Create, inspire, repeat.",
  "Never stop learning.",
  "Stay strong and shine on.",
  "Choose happiness.",
  "Step into your power.",
  "Love without limits.",
  "Stay humble, hustle hard.",
  "Make magic happen.",
  "Explore, dream, discover.",
  "Keep pushing forward.",
  "Stay bold and brilliant.",
  "Seek adventure every day.",
  "Be the change you wish to see.",
  "Live with intention.",
  "Embrace the journey ahead.",
  "Strive for greatness.",
  "Believe in your dreams.",
  "Stay kind, stay fierce.",
  "Dream bigger.",
  "Life is short, make it amazing.",
  "Stay positive, be kind.",
  "Dream big. Work hard.",
  "Believe in yourself.",
  "Make it happen.",
  "Stay focused, stay humble.",
  "Keep smiling, keep shining.",
  "Take chances, be brave.",
  "Choose joy, be happy.",
  "You're stronger than you know.",
  "Embrace the journey.",
  "Seize the day.",
  "Shine bright, be you.",
  "Keep moving forward.",
  "Live with purpose.",
  "Find your passion.",
  "Stay curious, keep learning.",
  "Chase your dreams.",
  "Stay true to you.",
  "Create your own sunshine.",
  "Live in the moment.",
  "Be fearless, be free.",
  "Live, love, laugh.",
  "Follow your heart.",
  "Keep growing, keep glowing.",
  "Inspire and be inspired.",
  "Make every moment count.",
  "Spread positivity.",
  "Find beauty in the little things.",
  "Make today amazing.",
  "Life is what you make it.",
  "Choose happiness.",
  "Live more, worry less.",
  "Be present.",
  "Keep your chin up.",
  "Adventure awaits.",
  "Stay humble, hustle hard.",
  "Take a deep breath, keep going.",
  "Dream big, work smart.",
  "Stay strong, keep fighting.",
  "Stay grateful, stay positive.",
  "Life is a gift, cherish it.",
  "Keep moving, keep growing.",
  "Find joy in the journey.",
  "Keep calm and carry on.",
  "Rise above the storm.",
  "You are enough.",
  "Every day is a new beginning.",
  "Live fully, love deeply.",
  "Stay inspired, stay motivated.",
  "Be your own kind of beautiful.",
  "Believe in the magic within you.",
  "You got this!"
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
