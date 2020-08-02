function main() {

    const baseUrl = "https://web-server-book-dicoding.appspot.com";

    const getBook = () => {
        //NOTE  Membuat Instance dari XMLHTTPRequest
        const xhr = new XMLHttpRequest();

        //NOTE menentukan callback jika response sukses atau error
        xhr.onload= function(){
            const responseJson = JSON.parse(this.responseText);
            if(responseJson.error){
                showResponseMessage(responseJson.message);
            }else {
                renderAllBooks(responseJson.books);
            }
        }

        xhr.onerror = function() {
            showResponseMessage();
        }

        // NOTE membuat GET request dan menetapkan target URL 
        xhr.open("GET", `${baseUrl}/list`);
        //NOTE mengirim request
        xhr.send();
    };


    const insertBook = (book) => {
        //NOTE membuat instance dari http Request
        const xhr = new XMLHttpRequest();

        //NOTE menetapkan callback jika response sukses dan error
        xhr.onload= function(){
            const responseJson= JSON.parse(this.responseText);
            showResponseMessage(responseJson.message);
            getBook();
        }
        
        xhr.onerror= function(){
            showResponseMessage();
        }

        //NOTE membuat post request dan menetapkan target URL 
        xhr.open("POST",`${baseUrl}/add`);

        //NOTE menetapkan properti Content-Type dan X-Auth-Token pada Header request
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("X-Auth-Token", "12345");

        //NOTE Mengirimkan request dan menyisipkan JSON.stringify(book) pada body
        xhr.send(JSON.stringify(book));
    };

    const updateBook = (book) => {
        // NOTE Membuat instance dari xmlHttpRequest
        const xhr = new XMLHttpRequest();

        //NOTE menetapkan callback jika response sukses dan error
        xhr.onload= function(){
            const responseJson = JSON.parse(this.responseText);
            showResponseMessage(responseJson.message);
            getBook();
        }

        xhr.onerror= function(){
            showResponseMessage();
        }

        //NOTE membuat PUT request dan menetapkan targe URl 
        xhr.open("PUT", `${baseUrl}/edit/${book.id}`);

        //NOTE Mementapkan properti Content-Type dan X-Auth-Token pada Header request
        xhr.setRequestHeader("Content-Type","application/json");
        xhr.setRequestHeader("X-Auth-Token","12345");

        //NOTE Mengirimkan request dan menyisipkan JSON.stringify(book) pada body
        xhr.send(JSON.stringify(book));
    };

    const removeBook = (bookId) => {
        //NOTE Membuat instance dari XMLHttpRequest
        const xhr = new XMLHttpRequest();

        //NOTE menetapkan callback jika response sukses dan error
        xhr.onload= function(){
            const responseJson = JSON.parse(this.responseText);
            showResponseMessage(responseJson.message);
            getBook();
        }
        xhr.onerror= function(){
            showResponseMessage();
        }

        //NOTE membuat delete request dan menetapkan target URL 
        xhr.open("DELETE", `${baseUrl}/delete/${bookId}`);

        //NOTE ementapkan properti Content-Type dan X-Auth-Token pada Header request
        xhr.setRequestHeader("X-Auth-Token","12345");

        //NOTE Mengirim REquest
        xhr.send();
    };






    /*
        jangan ubah kode di bawah ini ya!
    */

    const renderAllBooks = (books) => {
        const listBookElement = document.querySelector("#listBook");
        listBookElement.innerHTML = "";

        books.forEach(book => {
            listBookElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body">
                            <h5>(${book.id}) ${book.title}</h5>
                            <p>${book.author}</p>
                            <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
                        </div>
                    </div>
                </div>
            `;
        });

        const buttons = document.querySelectorAll(".button-delete");
        buttons.forEach(button => {
            button.addEventListener("click", event => {
                const bookId = event.target.id;
                removeBook(bookId);
            })
        })
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {

        const inputBookId = document.querySelector("#inputBookId");
        const inputBookTitle = document.querySelector("#inputBookTitle");
        const inputBookAuthor = document.querySelector("#inputBookAuthor");
        const buttonSave = document.querySelector("#buttonSave");
        const buttonUpdate = document.querySelector("#buttonUpdate");

        buttonSave.addEventListener("click", function () {
            const book = {
                id: Number.parseInt(inputBookId.value),
                title: inputBookTitle.value,
                author: inputBookAuthor.value
            };
            insertBook(book)
        });

        buttonUpdate.addEventListener("click", function () {
            const book = {
                id: Number.parseInt(inputBookId.value),
                title: inputBookTitle.value,
                author: inputBookAuthor.value
            };

            updateBook(book)
        });
        getBook();
    });
}

export default main;