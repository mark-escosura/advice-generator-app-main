const adviceApi = 'https://api.adviceslip.com/advice';
const diceButton = document.getElementById('dice-button');
const adviceId = document.getElementById('advice-number');
const adviceMessage = document.getElementById('advice-message');
const loader = document.getElementById('loader');
const blockquote = document.querySelector('blockquote');

async function fetchAdvice() {
  await fetch(adviceApi)
    .then((response) => response.json())
    .then((data) => {
      const { id, advice } = data.slip;
      adviceId.textContent = id;
      adviceMessage.textContent = advice;
    })
    .catch((error) => {
      console.error(error.message);
    });
}
// This will run the first time the application loads
fetchAdvice();

// This will run asynchronously when the the button is clicked.
diceButton.addEventListener('click', async () => {
  loader.classList.remove('none');
  blockquote.classList.add('none');
  setTimeout(() => {
    loader.classList.add('none');
    blockquote.classList.remove('none');
    fetchAdvice();
  }, 5000);
});
