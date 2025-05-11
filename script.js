// JavaScript for Pomodoro Timer and Lo-Fi Music Sync
let timerInterval;
let isTimerRunning = false;
let minutes = 25; // default Pomodoro session length
let seconds = 0;
const timerDisplay = document.getElementById('timer');
const musicPlayer = document.getElementById('lofi-audio'); // Lo-Fi audio element
const toggleTimerButton = document.getElementById('toggle-timer');

// Start or stop the timer and music
function toggleTimer() {
  if (isTimerRunning) {
    clearInterval(timerInterval);
    toggleTimerButton.innerText = 'Start';
    isTimerRunning = false;
    musicPlayer.pause(); // Pause the music when timer is stopped
    musicPlayer.currentTime = 0; // Reset music to the beginning
  } else {
    startTimer();
    toggleTimerButton.innerText = 'Pause';
    isTimerRunning = true;
    musicPlayer.play(); // Play the music when timer starts
  }
}

// Start the Pomodoro timer
function startTimer() {
  timerInterval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timerInterval);
        toggleTimerButton.innerText = 'Start';
        isTimerRunning = false;
        musicPlayer.pause(); // Stop the music after the session ends
        alert('Session Ended! Take a Break!');
        musicPlayer.currentTime = 0; // Reset music
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }

    updateTimerDisplay();
  }, 1000);
}

// Update the timer display
function updateTimerDisplay() {
  let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  timerDisplay.innerText = `${formattedMinutes}:${formattedSeconds}`;
}

// Event listener for the timer start/pause button
toggleTimerButton.addEventListener('click', toggleTimer);

// Initial timer display
updateTimerDisplay();

const themeToggle = document.getElementById("theme-toggle");
const app = document.getElementById("app");
const body = document.body;

let isDark = false;

themeToggle.addEventListener("click", () => {
  isDark = !isDark;

  if (isDark) {
    app.classList.replace("from-blue-50", "from-blue-900");
    app.classList.replace("to-blue-100", "to-blue-800");
    body.classList.replace("text-gray-800", "text-white");
    themeToggle.textContent = "Light Mode";
  } else {
    app.classList.replace("from-blue-900", "from-blue-50");
    app.classList.replace("to-blue-800", "to-blue-100");
    body.classList.replace("text-white", "text-gray-800");
    themeToggle.textContent = "Dark Mode";
  }
});
