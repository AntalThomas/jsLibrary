// Add new book
let counter = 0
let myLibrary = []
let bookCount = document.querySelector(".bookCount")
const mainDiv = document.querySelector(".main")
const newBook = document.querySelector(".newBook")
const removeBook = document.querySelector(".removeBook")
const toggleDiv = document.querySelector(".toggleDiv")

const newH3 = document.createElement("h3") // Title
const newH4 = document.createElement("h4") // Author
const newInput = document.createElement("input") // Pages
const newInputRead = document.createElement("input") // Read
const newButton = document.createElement("button") // Delete Button

// Add new book
newBook.addEventListener("click", function() {
  const newDiv = document.createElement("div")
  mainDiv.appendChild(newDiv)
  newDiv.classList.add("cards")
  
  // Calls function that adds user input into the card
  newDiv.appendChild(newH3)
  newDiv.appendChild(newH4)
  newDiv.appendChild(newInput)
  newDiv.appendChild(newInputRead)
  newDiv.appendChild(newButton).classList.add("removeBook")
  
})

// Adds to counter of books in library
newBook.addEventListener("click", function() {
  counter++
  updateCount()
})

// Removes book
removeBook.addEventListener("click", function() {
  removeBook.parentElement.remove()
  counter--
  updateCount()
})

// Updates counter
function updateCount() {
  bookCount.innerHTML = counter
}

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






// const harryPotter = new Book("Harry Potter and the Order of the Phoenix", "J.K. Rowling", "576", true)
// const bareFootKids = new Book("BareFoot Kids", "Scott Pape", "224", true)
// const READMEtxt =  new Book("README.txt", "Chelsea Manning", "224", false)
// const safar = new Book("Safar", "Sarah Malik", "168", false)

// addBookToLibrary(harryPotter)
// addBookToLibrary(bareFootKids)
// addBookToLibrary(READMEtxt)
// addBookToLibrary(safar)