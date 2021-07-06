// getting the Ui Vars

const accordion = document.querySelector('.accordion');
const items = accordion.querySelectorAll('li');
const question = document.querySelectorAll('.question');

// Adding the event listerners
question.forEach(question => question.addEventListener('click', toggleAccordion));

function toggleAccordion() {
    const thisItem = this.parentNode;

    // to closeed others while one is open
    items.forEach(item => {
        if (thisItem === item) {
            // toggle between the open class
            thisItem.classList.toggle('open');
            return;
        }
        item.classList.remove('open');
    });

    console.log(thisItem);
}