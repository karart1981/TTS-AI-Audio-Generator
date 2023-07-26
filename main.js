// Function to generate audio from the entered text
function generateAudio() {
    const textToRead = document.getElementById('text-to-read').value;
    
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(textToRead);

    // speech settings, volume, etc
    utterance.voice = synth.getVoices().find(voice => voice.name === 'Your Preferred Voice');
    utterance.rate = 1.0; // Adjust the speech rate
    utterance.pitch = 1.0; // Increase the pitch
    utterance.volume = 1.0; // Decrease the volume
    
    synth.speak(utterance);

    // Updating audio element source
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = URL.createObjectURL(new Blob([new Uint8Array(0)], { type: 'audio/wav' }));
}

// Attach the event listener to the Generate Audio button
document.getElementById('generate-audio').addEventListener('click', generateAudio);

   