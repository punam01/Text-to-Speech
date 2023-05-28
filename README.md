# [Text-to-Speech](https://text-to-speech-webspeechapi.netlify.app/)
 This is a simple JavaScript application that converts text into speech using the [SpeechSynthesis API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
 
## Getting Started 📖
To use this application, follow the steps below:
```
Clone or download the repository.
Open the index.html file in a web browser.
```
## Usage 🖱️

1. Enter the text you want to convert to speech in the input field.
2. Select a voice from the dropdown menu.
3. Adjust the rate and pitch sliders if desired.
4. Click the "Speak It" button or press Enter to start the speech synthesis.
5. The application will play the speech using the selected voice, rate, and pitch.

## Requirements 😬

Web browser with support for the SpeechSynthesis API.

## Features ▶️
1. Retrieves available voices from the browser's speech synthesis system.
2. Allows selection of different voices.
3. Adjusts speech rate and pitch.
4. Provides visual feedback with a background animation while speaking.

## Code Explanation 🎙️

1. The synth variable initializes the SpeechSynthesis API.
2. The DOM elements are accessed and stored in variables for manipulation.
3. The getVoices function retrieves available voices and populates the dropdown menu.
4. The onvoiceschanged event is used to update the voices list whenever it changes.
5. The speak function handles the speech synthesis process.
6. Event listeners are set up for form submission, rate and pitch changes, and voice selection.
7. The application dynamically updates the rate and pitch values when changed.

### Feel free to customize and improve upon this code as needed.
