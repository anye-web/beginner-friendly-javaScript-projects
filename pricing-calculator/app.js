// Steps to be taken
//  1. Grap everything you need from the dom
//  2. create our event listeners
//  3. create functions that we'll need

// Dom elements
const priceInput = document.querySelector("#price");
const quantityInput = document.querySelector('#quantity');
const total = document.querySelector('#total');
const quantityLabel = document.querySelector('.quantity-label');

// add event listerners
quantityInput.addEventListener('input', calculatePieCost);
priceInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', updateQuantityLabel);

// call the function
function calculatePieCost() {
    const price = priceInput.value;
    const quantity = quantityInput.value;
    const cost = price * quantity;
    total.innerText = '$' + cost.toFixed(2);
}

// On first run
calculatePieCost()

// Update quantity label
function updateQuantityLabel() {
    const quantity = quantityInput.value;
    quantityLabel.innerText = quantity;
}