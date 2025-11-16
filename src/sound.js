let isSoundEnabled = false;

export const toggleSound = (enabled) => {
  isSoundEnabled = enabled;
};

export const playSfx = (soundFile) => {
  if (isSoundEnabled) {
    const audio = new Audio(soundFile);
    audio.play().catch(error => console.error("Error playing sound:", error));
  }
};