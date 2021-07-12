const scrollLine = document.querySelector('.scroll-bar');
const num = document.querySelector('.num');
// Adding Event listener to the windows 
window.addEventListener('scroll', debounce(fillScrollLine));

// Create the scroll function 
function fillScrollLine() {
    // gettting the Windows height
    const windowsHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;
    const percentageScrolled = (scrolled / (fullHeight - windowsHeight)) * 100;

    scrollLine.style.width = `${percentageScrolled}%`;

    num.innerText = `${percentageScrolled.toFixed(2)}%`;
}

// debounce is an external code
/* Adding code from an external libiary to increase the wait time when the filled occur inother not to overload the browser. */
function debounce(func, wait = 15, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}