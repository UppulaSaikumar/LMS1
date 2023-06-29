let menu = document.querySelector('#menu-bar');
let navbar  = document.querySelector('.navbar');
let header= document.querySelector('.header-2');
menu.addEventListener('click',() =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
});
window.onscroll = () =>{
   menu.classList.remove('fa-times');
   menu.classList.remove('active');

   if(window.scrollY>150){
      header.classList.add('active');
   }
   else{
      header.classList.remove('active');
   }
}

class Book {
    constructor(name, author, genre) {
        this.name = name;
        this.author = author;
        this.genre = genre;
    }
}

class Display {
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.genre}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }
    // addtocart() {

    // }
    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
    
    }
}

// Add submit event listener to libraryForm


function libraryFormSubmit() {
    console.log('YOu have submitted library form');
    let name = document.getElementById('book-name').innerHTML;
    let author = document.getElementById('author-name').innerHTML;
    // let type;
    let genre = document.getElementById('genre').innerHTML;
    console.log(name);
    // let fiction = document.getElementById('fiction');
    // let programming = document.getElementById('programming');
    // let cooking = document.getElementById('cooking');

    // if (fiction.checked) {
    //     type = fiction.value;
    // }
    // else if (programming.checked) {
    //     type = programming.value;
    // }
    // else if (cooking.checked) {
    //     type = cooking.value;
    // }

    let book = new Book(name, author, genre);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    // e.preventDefault();
}

