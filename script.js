function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function booksInLibrary(library) {
  for (let book in library) {
    console.log(book)
  }
}

let myLibrary = []
const harryPotter = new Book("Harry Potter and the Order of the Phoenix", "J.K. Rowling", "576", true)
const bareFootKids = new Book("BareFoot Kids", "Scott Pape", "224", true)
const READMEtxt =  new Book("README.txt", "Chelsea Manning", "224", false)
const safar = new Book("Safar", "Sarah Malik", "168", false)

addBookToLibrary(harryPotter)
addBookToLibrary(bareFootKids)
addBookToLibrary(READMEtxt)
addBookToLibrary(safar)