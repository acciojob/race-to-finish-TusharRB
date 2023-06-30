const promises = [
  getRandomTime(1, 5),
  getRandomTime(1, 5),
  getRandomTime(1, 5),
  getRandomTime(1, 5),
  getRandomTime(1, 5)
];

Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = result;
  })
  .catch(error => {
    console.error(error);
  });

function getRandomTime(min, max) {
  const randomTime = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime * 1000);
  });
}
