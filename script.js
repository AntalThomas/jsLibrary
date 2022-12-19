// Add new book
let counter = 0
let myLibrary = []
let bookCount = document.querySelector(".bookCount")
const mainDiv = document.querySelector(".main")
const newBook = document.querySelector(".newBook")
const removeBook = document.querySelector(".removeBook")
const toggleDiv = document.querySelector(".toggleDiv")
const userTitle = document.querySelector(".userTitle")
const userAuthor = document.querySelector(".userAuthor")
const userPages = document.querySelector(".userPages")


// Add new book
newBook.addEventListener("click", function() {
  const newDiv = document.createElement("div")
  mainDiv.appendChild(newDiv)
  newDiv.classList.add("cards")
  
  // Calls function that adds user input into the card
  populateCard(newDiv)

  // Updates counter and clears input
  counter++
  updateCount()
  clearInput()
})

function populateCard(card) {
  const newH3 = document.createElement("h3") // Title
  const newH4 = document.createElement("h4") // Author
  const newH5 = document.createElement("h5") // Pages
  const newH6 = document.createElement("h5") // Small Text
  const newInputRead = document.createElement("input") // Read
  const newButton = document.createElement("button") // Delete Button
  const newDiv = document.createElement("div")

  // Title
  card.appendChild(newH3).classList.add("title")
  newH3.textContent = "Title: " + userTitle.value
  //

  // Author 
  card.appendChild(newH4).classList.add("author")
  newH4.textContent = "Author: " + userAuthor.value
  //

  // Pages
  card.appendChild(newH5).classList.add("pages")
  newH5.textContent = "Pages: " + userPages.value
  //

  // Read Yet Toggle Div
  card.appendChild(newDiv).classList.add("readYet")
  newDiv.appendChild(newInputRead).classList.add("read")
  newInputRead.setAttribute("type", "checkbox")
  newDiv.appendChild(newH6)
  newH6.textContent = "Have you read this book yet?"
  //

  // Remove Button
  card.appendChild(newButton).classList.add("removeBook")
  newButton.textContent = "Remove Book"
  newButton.addEventListener('click', () => {
    newButton.parentElement.remove();
    counter--
    updateCount()
  });
  //
}

// Updates counter
function updateCount() {
  bookCount.innerHTML = counter
}

function clearInput() {
  userTitle.value = ""
  userAuthor.value = ""
  userPages.value = ""
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