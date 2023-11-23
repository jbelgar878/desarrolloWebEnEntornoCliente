let books = {
    "booksList": [
        {
            title: "The Lord of the Rings: The Return of the King",
            genre: "Fantasy",
            author: "J. R. R. Tolkien",
            pages: "416",
            published: 1955,
            read: true,
            website: "",
        },
        {
            title: "Memorias de Idhún I: La Resistencia",
            genre: "Fantasy",
            author: "Laura Gallego",
            pages: "556",
            published: 2004,
            read: true,
            website: "https://www.lauragallego.com/saga/memorias-de-idhun/",
        },
        {
            title: "God is Dead",
            genre: "Philosophy",
            author: "Friedrich Nietzsche",
            pages: "128",
            published: 1882,
            read: false,
            website: "",
        },
    ]
};

const booksData = books.booksList;
const booksTable = document.querySelector(".tableData");

booksData.forEach(book => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.genre}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.published}</td>
        <td>${book.read}</td>
        <td>${book.website}</td>
        `;
    booksTable.append(row);
});

let arrayRead = [];
booksData.forEach(book => {
    document.querySelectorAll("#info")[0].innerHTML += `${book.genre} |-| `;

    if (book.pages > 300) {
        document.querySelectorAll("#info")[1].innerHTML += `${book.title} |-| `;
    }

    let today = new Date();
    if (book.published < (today.getFullYear() - 2)) {
        document.querySelectorAll("#info")[2].innerHTML += `${book.title} |-| `;
    }

    document.querySelectorAll("#info")[3].innerHTML += `${book.author} |-| `;
    let actualAuthor = book.author;
    let count = 0;
    booksData.forEach(book => {
        if (book.author == actualAuthor) {
            count++;
        }
    });
    document.querySelectorAll("#info")[3].innerHTML += `${count} |-| `;

    if (book.read) {
        arrayRead.push(book.title + " |-| ");
    }
});
document.querySelectorAll("#info")[4].innerHTML = `${arrayRead.sort()}`;
// 0 +1 -1
/* arrayRead.sort((a, b) => new Date(a.published) > new Date(b.published));
console.log("sort", books); */



 function showDiv(num) {
    document.querySelectorAll('#info')[`${num}`].style.display = "block";
    document.querySelectorAll('#show')[`${num}`].style.display = "none";
    document.querySelectorAll('#hide')[`${num}`].style.display = "block";
}

function hideDiv(num) {
    document.querySelectorAll('#info')[`${num}`].style.display = "none";
    document.querySelectorAll('#show')[`${num}`].style.display = "block";
    document.querySelectorAll('#hide')[`${num}`].style.display = "none";
} 