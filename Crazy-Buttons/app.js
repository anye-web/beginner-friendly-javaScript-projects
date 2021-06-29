// Steps
// 1. Grap UI varriables
// 2. Add event Listeners
// 3. Create a functions

// Grab the ui Vars
const crazyBtn = document.querySelectorAll(".btn-crazy");

// add event listener
crazyBtn.forEach(button => button.addEventListener('mouseenter', moveButton));

// Call our function 
function moveButton(e) {
    const button = e.target;
    // Get random number for left offset 
    // get random number for right offset
    const offsetLeft = Math.floor(Math.random() * (window.innerWidth - button.clientWidth));
    const offsetTop = Math.floor(Math.random() * (window.innerHeight - button.clientHeight));

    // console.log(offsetLeft, offsetTop);

    // Apply these numbers to the button
    button.style.top = offsetTop + 'px';
    button.style.left = offsetLeft + 'px';
}