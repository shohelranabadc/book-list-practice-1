const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

// Event listener add
btn.addEventListener('click', function(e){
    e.preventDefault();
    
    // form validation
    if (title.value == '' && author.value == '' && year.value == ''){
        alert("Please fillup all data");

    } else {
        // Create new Row
        const newRow = document.createElement('tr');

        // Create new title table data
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        // Create new author table data
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        // Create new year table data
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        // all table data append to new row
        bookList.appendChild(newRow);
    }

});