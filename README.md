# Calm Pomodoro Timer

A beautifully designed, minimalistic, and customizable Pomodoro Timer application built with HTML, CSS, and JavaScript. 

## Features

- **Pomodoro Cycles**: Standard 25-minute focus sessions to maximize productivity.
- **Short & Long Breaks**: Built-in 5-minute and 15-minute breaks to help you recharge.
- **Customizable Durations**: A settings panel allows you to adjust the duration of your focus sessions and breaks to suit your workflow.
- **Dark Mode**: A seamless toggle switch to activate a stunning dark theme, perfect for low-light environments.
- **Glassmorphic UI**: A premium, frosted-glass aesthetic paired with a calm, sage green color palette.
- **Custom 3D Timer Icon**: Features a beautifully rendered mechanical tomato timer to boost the visual experience.

## How It Works

### Under the Hood

The application relies on three core files:
1. `index.html`: Defines the layout, buttons, timer display, and the settings modal structure.
2. `styles.css`: Powers the glassmorphic aesthetic using backdrop filters, custom CSS variables (`:root`), and smooth transitions between Light and Dark mode.
3. `app.js`: Contains the JavaScript logic that manages state.
    - **Timer Logic**: A `setInterval` loop updates the countdown and dynamically adjusts the document title.
    - **Settings Logic**: Reads custom values entered in the settings modal and overrides the default times, immediately recalculating the current timer if the app isn't actively running.
    - **Theme Logic**: Appends a `.dark-mode` class to the body element which overrides the root CSS variables, instantly transforming the color scheme.

### Usage Guide

1. **Start a Session**: Select your desired mode (Pomodoro, Short Break, or Long Break) and click the **Start** button. The timer will begin counting down.
2. **Pause & Reset**: You can pause the timer at any time or hit **Reset** to return to the full duration.
3. **Change Settings**: Click the gear icon in the top right corner to open the Settings Panel. Here, you can toggle Dark Mode and define custom minute durations for your Pomodoros and breaks. Click **Save Changes** to apply them instantly.

## Setup

Since this is a static frontend project, there's no build step required! Simply double-click on the `index.html` file to open it directly in your web browser, or serve it using a local live server (e.g. VS Code Live Server).
