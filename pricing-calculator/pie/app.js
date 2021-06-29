// Grab all the Ui Components
// Add the Events listeners
// Create the functions

// Ui elements
const quantityInput = document.querySelector('#quantity');
const priceInput = document.querySelector('#price')
const amount = document.querySelector('.amount');
const tip = document.querySelector('.tip');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');


// Event Listener
quantityInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', updatePieQuantity);


// Calculating pie cost
function calculatePieCost() {

    const quantity = quantityInput.value;
    const price = 5;
    const cost = (quantity * price).toFixed(2);

    // Appending cost to amount
    amount.innerText = cost;
    // calculating the tip Amount and appending to tip
    const amountTip = (0.10 * cost).toFixed(2);
    tip.innerText = amountTip;
    // adding the tip and amount together and appending
    const totalAmount = parseFloat(cost) + parseFloat(amountTip);
    total.innerText = totalAmount.toFixed(2);
}

// Update on page load
calculatePieCost()

// Update Pie Quantity
function updatePieQuantity() {
    const quantity = quantityInput.value;
    quantityLabel.innerText = quantity;

}