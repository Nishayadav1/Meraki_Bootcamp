const video = document.getElementById('myVideo');
const playButton = document.getElementById('playbutton');
const pauseButton = document.getElementById('puasebutton');

playButton.addEventListener('click', () => {
    video.play(); // Start playing the video
});

pauseButton.addEventListener('click', () => {
    video.pause(); // Pause the video
});

// ----------------------------------------------or-------------------------------------------------------------------------------------------


// document.addEventListener('DOMContentLoaded', function() {
//     const video = document.getElementById('myVideo');
//     const playButton = document.getElementById('playbutton');
//     const pauseButton = document.getElementById('puasebutton');

//     playButton.addEventListener('click', function() {
//         video.play(); // Start playing the video
//         playButton.style.display = 'none'; // Hide the play button
//         pauseButton.style.display = 'inline-block'; // Show the pause button
//     });

//     pauseButton.addEventListener('click', function() {
//         video.pause(); // Pause the video
//         pauseButton.style.display = 'none'; // Hide the pause button
//         playButton.style.display = 'inline-block'; // Show the play button
//     });
// });

