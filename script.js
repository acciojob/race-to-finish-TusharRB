window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

// Array of promises
const promises = [
  new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 4 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 5 resolved'), getRandomTime()))
];

// Function to get random time between 1 and 5 seconds
function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000; // Random number between 1000 and 6000 (1 to 5 seconds)
}



// Using Promise.any() to wait for the first resolved promise
Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
