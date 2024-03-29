const quotes = [
  "Smile, breathe, and go slowly.",
  "Every moment is a new beginning.",
  "You are stronger than you think.",
  "Believe you can and you're halfway there.",
  "Progress, not perfection.",
  "The future depends on what you do today.",
  "Dream big and dare to fail.",
  "Embrace the uncertainty.",
  "Life is tough, but so are you.",
  "Be kind to yourself.",
  "Inhale confidence, exhale doubt.",
  "The only limit is your mind.",
  "Stay positive. Work hard. Make it happen.",
  "You got this.",
  "The best is yet to come.",
  "The harder you work, the luckier you get.",
  "Be a voice, not an echo.",
  "Make today amazing.",
  "Create your own sunshine.",
  "You are unstoppable.",
  "Every day is a new chance.",
  "Good things take time.",
  "Your vibe attracts your tribe.",
  "Stay hungry, stay foolish.",
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
  "You got this!",
  "Keep pushing forward.",
  "Believe in yourself.",
  "Stay positive, be kind.",
  "Dream big. Work hard.",
  "Make it happen.",
  "Take chances, be brave.",
  "Choose joy, be happy.",
  "You're stronger than you know.",
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
  "Believe in the magic within you."
];

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

function updateDate() {
  const now = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const dateText = now.toLocaleDateString('en-US', options);
  document.getElementById('date').textContent = dateText;
}

function updateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
}

const quoteElement = document.getElementById('quote');

// Function to update the quote with a fade animation
function updateQuoteWithAnimation() {
  quoteElement.classList.remove('fade-in');
  void quoteElement.offsetWidth; // Trigger reflow to restart animation
  quoteElement.classList.add('fade-in');
  updateQuote();
}

// Refresh the quote when clicked with fade animation
quoteElement.addEventListener('click', updateQuoteWithAnimation);

// Refresh the quote when clicked with fade transition
quoteElement.addEventListener('click', () => {
  fadeOutQuote();
  setTimeout(fadeInQuote, 300); // Add a delay to match the fade-out transition duration
});

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
  backgroundContainer.style.backgroundImage = 'url(https://api.zigao.wang/bing-wallpaper)';
  localStorage.removeItem('backgroundImage');
});

document.addEventListener('DOMContentLoaded', () => {
  const cachedBackgroundImage = JSON.parse(localStorage.getItem('backgroundImage'));
  if (cachedBackgroundImage) {
    backgroundContainer.style.backgroundImage = `url('${cachedBackgroundImage}')`;
  } else {
    backgroundContainer.style.backgroundImage = 'url(https://api.zigao.wang/bing-wallpaper)';
  }

  updateClock();
  setInterval(updateClock, 1000);

  updateDate();
  updateQuote();
});

const aboutButton = document.getElementById('about-button');
const aboutPopup = document.getElementById('about-popup');
const aboutClose = document.getElementById('about-close');

aboutClose.addEventListener('click', () => {
  aboutPopup.style.display = 'none';
});

aboutButton.addEventListener('click', () => {
  aboutPopup.classList.add('fadeIn');
  aboutPopup.style.display = 'flex';
});

const dazcheckButton = document.getElementById('dazcheck-button');
const dazcheckPopup = document.getElementById('dazcheck-popup');
const dazcheckClose = document.getElementById('dazcheck-close');

dazcheckButton.addEventListener('click', () => {
  dazcheckPopup.classList.add('fadeIn');
  dazcheckPopup.style.display = 'flex';
});

dazcheckClose.addEventListener('click', () => {
  dazcheckPopup.style.display = 'none';
});

const dazcalcButton = document.getElementById('dazcalc-button');
const dazcalcPopup = document.getElementById('dazcalc-popup');
const dazcalcClose = document.getElementById('dazcalc-close');

dazcalcButton.addEventListener('click', () => {
  dazcalcPopup.classList.add('fadeIn');
  dazcalcPopup.style.display = 'flex';
});

dazcalcClose.addEventListener('click', () => {
  dazcalcPopup.style.display = 'none';
});

const notesButton = document.getElementById('notes-button');
const notesPopup = document.getElementById('notes-popup');
const notesClose = document.getElementById('notes-close');

notesButton.addEventListener('click', () => {
  notesPopup.classList.add('fadeIn');
  notesPopup.style.display = 'flex';
});

notesClose.addEventListener('click', () => {
  notesPopup.style.display = 'none';
});

const settingsButton = document.getElementById('settings-button');
const settingsPopup = document.getElementById('settings-popup');
const settingsClose = document.getElementById('settings-close');

settingsButton.addEventListener('click', () => {
  settingsPopup.classList.add('fadeIn');
  settingsPopup.style.display = 'flex';
});

settingsClose.addEventListener('click', () => {
  settingsPopup.style.display = 'none';
});

var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs < 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    document.getElementById('greet').innerHTML =
        '<div>' + greet + '</div>';

function updateOnlineTime() {
  // Set the start date and time (August 17, 2023, 7:32 PM)
  const startDate = new Date("2023-08-17T19:32:29");
  const currentDate = new Date();
  const timeDifference = currentDate - startDate;
  
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

// Call the updateOnlineTime function initially
updateOnlineTime();

// Update the time every second
setInterval(updateOnlineTime, 1000);

// Get elements from the HTML
const userPhotoElement = document.getElementById("user-photo");
const photoUploadElement = document.getElementById("photo-upload");

// Check if there is a previously uploaded photo in local storage
const storedPhoto = localStorage.getItem("userPhoto");

// If a photo is found in local storage, display it
if (storedPhoto) {
  userPhotoElement.src = storedPhoto;
}

// Add an event listener to the upload button
photoUploadElement.addEventListener("change", function () {
  const file = photoUploadElement.files[0];
  if (file) {
    // Read the uploaded image and set it as the user photo
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageUrl = event.target.result;
      userPhotoElement.src = imageUrl;

      // Store the image in local storage
      localStorage.setItem("userPhoto", imageUrl);
    };
    reader.readAsDataURL(file);
  }
});

// Add an event listener to the delete button
document.getElementById("delete-photo").addEventListener("click", function () {
  // Clear the user photo and remove it from local storage
  userPhotoElement.src = "user.png";
  localStorage.removeItem("userPhoto");
  photoUploadElement.value = ""; // Clear the file input
});

// Add an event listener to the "Choose File" button
document.getElementById("choose-file").addEventListener("click", function () {
  // Trigger the file input when the button is clicked
  document.getElementById("photo-upload").click();
});

// Get elements from the HTML
const setNameButton = document.getElementById("set-name");
const userName = document.getElementById("user-name");

// Try to retrieve the user's name from local storage
const cachedName = localStorage.getItem("userName");

// If a cached name is found, display it
if (cachedName) {
  userName.textContent = cachedName;
  userName.style.display = "block";
}

// Add event listener to the "Set Name" button
setNameButton.addEventListener("click", function () {
  // Use window.prompt to capture the user's name
  const name = window.prompt("Please enter your name:");

  if (name) {
    // Display the user's name underneath the profile picture
    userName.textContent = name;
    userName.style.display = "block";
    
    // Store the user's name in local storage
    localStorage.setItem("userName", name);
  }
});

// Function to set background from uploaded file
function setBackgroundFromFile(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    localStorage.setItem('background', e.target.result); // Save to local storage
    updateBackground();
  };
  reader.readAsDataURL(file);
  localStorage.removeItem('backgroundURL'); // Remove URL if set
}

// Function to set background from URL
function setBackgroundFromURL(url) {
  localStorage.setItem('backgroundURL', url); // Save URL to local storage
  updateBackground();
  localStorage.removeItem('background'); // Remove uploaded image if set
}

// Update the background based on saved data
function updateBackground() {
  const savedImage = localStorage.getItem('background');
  const savedURL = localStorage.getItem('backgroundURL');

  if (savedImage) {
    document.body.style.backgroundImage = `url('${savedImage}')`;
  } else if (savedURL) {
    document.body.style.backgroundImage = `url('${savedURL}')`;
  } else {
    document.body.style.backgroundImage = 'none';
  }
}

// Event listener for the set background button
document.getElementById('set-background').addEventListener('click', function() {
  const fileInput = document.getElementById('image-upload');
  const urlInput = document.getElementById('image-url');

  if (fileInput.files && fileInput.files[0]) {
    setBackgroundFromFile(fileInput.files[0]);
  } else if (urlInput.value) {
    setBackgroundFromURL(urlInput.value);
  }
});

// Event listener for the delete background button
document.getElementById('delete-button').addEventListener('click', function() {
  localStorage.removeItem('background');
  localStorage.removeItem('backgroundURL');
  updateBackground();
});

// Load the background on startup
document.addEventListener('DOMContentLoaded', updateBackground);

// Avatar and name settings logic (placeholder, implement as needed)
document.getElementById('choose-file').addEventListener('click', function() {
  // Logic for choosing avatar photo
});

document.getElementById('delete-photo').addEventListener('click', function() {
  // Logic for deleting avatar photo
});

document.getElementById('set-name').addEventListener('click', function() {
  // Logic for setting user name
});
