export const formatTime = (input) => {
    // Convert to seconds if input is too large (assumes it's in ms)
    const seconds = input > 86400 ? Math.floor(input / 1000) : input;

    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');

    return hours > 0 ? `${hours}:${mins}:${secs}` : `${mins}:${secs}`;
};
