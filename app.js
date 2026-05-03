const modes = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60
};

let currentMode = 'pomodoro';
let timeLeft = modes[currentMode];
let timerId = null;
let isRunning = false;

// DOM Elements
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const btnStart = document.getElementById('btn-start');
const btnReset = document.getElementById('btn-reset');
const btnPomodoro = document.getElementById('btn-pomodoro');
const btnShortBreak = document.getElementById('btn-short-break');
const btnLongBreak = document.getElementById('btn-long-break');
const modeButtons = [btnPomodoro, btnShortBreak, btnLongBreak];

const btnSettings = document.getElementById('btn-settings');
const settingsModal = document.getElementById('settings-modal');
const btnCloseSettings = document.getElementById('btn-close-settings');
const btnSaveSettings = document.getElementById('btn-save-settings');
const themeToggle = document.getElementById('theme-toggle');
const inputPomodoro = document.getElementById('input-pomodoro');
const inputShortBreak = document.getElementById('input-short-break');
const inputLongBreak = document.getElementById('input-long-break');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
    
    // Update document title
    const modeName = currentMode === 'pomodoro' ? 'Focus' : 'Break';
    document.title = `${minutesEl.textContent}:${secondsEl.textContent} - ${modeName}`;
}

function switchMode(mode, btnElement) {
    if (isRunning) {
        if (!confirm('Timer is running. Are you sure you want to switch?')) {
            return;
        }
        pauseTimer();
    }
    
    modeButtons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    currentMode = mode;
    timeLeft = modes[mode];
    updateDisplay();
}

function toggleTimer() {
    if (isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    isRunning = true;
    btnStart.textContent = 'Pause';
    
    timerId = setInterval(() => {
        timeLeft--;
        updateDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerId);
            isRunning = false;
            btnStart.textContent = 'Start';
            alert('Timer finished!');
            // Reset to current mode's default time
            timeLeft = modes[currentMode];
            updateDisplay();
        }
    }, 1000);
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timerId);
    btnStart.textContent = 'Start';
}

function resetTimer() {
    pauseTimer();
    timeLeft = modes[currentMode];
    updateDisplay();
}

// Event Listeners
btnStart.addEventListener('click', toggleTimer);
btnReset.addEventListener('click', resetTimer);

btnPomodoro.addEventListener('click', () => switchMode('pomodoro', btnPomodoro));
btnShortBreak.addEventListener('click', () => switchMode('shortBreak', btnShortBreak));
btnLongBreak.addEventListener('click', () => switchMode('longBreak', btnLongBreak));

// Settings Event Listeners
btnSettings.addEventListener('click', () => {
    settingsModal.classList.remove('hidden');
});

btnCloseSettings.addEventListener('click', () => {
    settingsModal.classList.add('hidden');
});

// Close modal when clicking outside
settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        settingsModal.classList.add('hidden');
    }
});

// Save Settings
btnSaveSettings.addEventListener('click', () => {
    const newPomodoro = parseInt(inputPomodoro.value);
    const newShortBreak = parseInt(inputShortBreak.value);
    const newLongBreak = parseInt(inputLongBreak.value);
    
    if (newPomodoro > 0) modes.pomodoro = newPomodoro * 60;
    if (newShortBreak > 0) modes.shortBreak = newShortBreak * 60;
    if (newLongBreak > 0) modes.longBreak = newLongBreak * 60;
    
    // Update current time if not running
    if (!isRunning) {
        timeLeft = modes[currentMode];
        updateDisplay();
    }
    
    settingsModal.classList.add('hidden');
});

// Theme Toggle
themeToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// Initialize
updateDisplay();
