//  Grab Ui Vars
const body = document.body;
const flooterInput = document.querySelector('input[type=text]');
const overlay = document.querySelector('.overlay');

// Adding Event listeners
flooterInput.addEventListener('focusin', showFlooter);
// flooterInput.addEventListener('focusout', closeFlooter);
overlay.addEventListener('click', closeFlooter);

// Create functions

// add overlay
function showFlooter() {
    body.classList.add('show-flooter');
}
// remove overlay
function closeFlooter() {
    if (body.classList.contains('show-flooter')) {
        body.classList.remove('show-flooter');
    }
}

// *** creating the bookmark ***
const bookmarkList = document.querySelector('.bookmark-list');
const bookmarkForm = document.querySelector('.bookmark-form');
const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
// Appi Keys
const apiUrl = 'https://opengraph.io/api/1.1/site';
const appId = '93b957c0-446e-427c-9434-4b5704d62ae4';

// add to bookmarks on  load
fillBookmarksList(bookmarks);

// adding Event listeners
bookmarkForm.addEventListener('submit', createBookmark);
bookmarkList.addEventListener('click', removeBookmark);

// creating functions

// create bookmark
function createBookmark(e) {
    e.preventDefault();

    if (!flooterInput.value) {
        alert('We need an Input');
        return;
    }
    const url = encodeURIComponent(flooterInput.value);
    // fetch Api
    fetch(`${apiUrl}/${url}?app_id=${appId}`)
        .then(response => response.json())
        .then(data => {
            // add a the new bookmark to the bookmarks
            const bookmark = {
                title: data.hybridGraph.title,
                image: data.hybridGraph.image,
                link: data.hybridGraph.url
            };

            bookmarks.push(bookmark);
            fillBookmarksList(bookmarks);
            storeBookmarks(bookmarks);

            // clear input
            bookmarkForm.reset();
        })

    .catch(error => {
        alert('there was a problem getting info')
    });
    // console.table(bookmarks);
    // then save all of that to local storage

    // creating the bookmark.
    // const title = flooterInput.value;
    // const bookmark = document.createElement('a');
    // bookmark.innerText = title
    // bookmark.className = 'bookmark';
    // bookmark.href = '#';
    // bookmark.target = '_blank';
    // // Append bookmark to bookmark list
    // bookmarkList.appendChild(bookmark);


}

// creating the bookmark
function fillBookmarksList(bookmarks = []) {
    // first
    const bookmarkHtml = bookmarks.map((bookmark, i) => {
        return `<div  class="bookmark" data-id="${i}">
                <div style="background-image:url('${bookmark.image}')" class="img"></div>
                 <a href="${bookmark.link}" target="_blank" class="title"> ${bookmark.title}</a>
                 <span class="far fa-trash-alt"> </span>
               </div> `;
    }).join(" ");

    // second option
    // let bookmarkHtml = '';
    // for (let i = 0; i < bookmarks.length; i++) {
    //     bookmarkHtml += `
    //         <a href="#" target="_blank" class="bookmark">
    //             ${bookmarks[i].title}
    //         </a>
    //     `;
    // };
    bookmarkList.innerHTML = bookmarkHtml;
}

// Store bookmarks to local storage
function storeBookmarks(bookmarks = []) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

// Remove bookmarks from local storage
function removeBookmark(e) {
    // find the index
    // remove from the book using splice
    //  fill the list 
    // store back to local storage

    if (!e.target.matches('.far')) return;

    const index = e.target.parentNode.dataset.id;
    bookmarks.splice(index, 1);
    fillBookmarksList(bookmarks);
    storeBookmarks(bookmarks);
}