const flashSale = document.getElementById('flash-sale');

const messages = [
  `<span class="main-text">Flash Sale Weekend. Up to <span style="font-weight: bold;">70%</span> off</span> 
   <a href="#" class="learn-more">Learn more</a>`
];

const flashSaleElement = document.getElementById('flash-sale');
flashSaleElement.innerHTML = `<div class="flash-slide">${messages[0]}</div>`;



let index = 0;

function showNextMessage() {
  // Remove previous message
  flashSale.innerHTML = '';

  // Create new slide element
  const div = document.createElement('div');
  div.classList.add('flash-slide');
  div.innerHTML = messages[index];
  flashSale.appendChild(div);

  // Switch to next message
  index = (index + 1) % messages.length;
}

// Start immediately and repeat every 3 seconds
showNextMessage();
setInterval(showNextMessage, 3000);