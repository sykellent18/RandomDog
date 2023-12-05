// script.js

document.getElementById('fetch-dog-button').addEventListener('click', fetchRandomDog);

function fetchRandomDog() {
  const apiUrl = 'https://dog.ceo/api/breeds/image/random';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Handle the response data here
      displayDogImage(data.message);
    })
    .catch(error => {
      // Handle errors
      console.error("Error fetching dog data:", error);
    });
}

function displayDogImage(imageUrl) {
  const dogContainer = document.getElementById('dog-container');
  dogContainer.innerHTML = `<img src="${imageUrl}" alt="Random Dog">`;
}
