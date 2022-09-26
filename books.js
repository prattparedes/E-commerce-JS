function renderBooks(filter) {
  const booksWrapper = document.querySelector('.books')
  const books = getBooks()
  if (filter === 'LOW_TO_HIGH') {
    const filteredBooks = books.sort((a, b) => a.originalPrice - b.originalPrice)
  }
  else if (filter === 'HIGH_TO_LOW') {
    const filteredBooks = books.sort((a, b) => b.originalPrice - a.originalPrice)
  }
  else if (filter === 'RATING') {
    const filteredBooks = books.sort((a, b) => b.rating - a.rating)
  }

function ratingsHTML(rating)  {
  let ratingHTML = '';
  for (let i = 0; i < Math.floor(rating); i++) {
    ratingHTML += `<i class="fas fa-star"></i>\n`;
  }
  if (!Number.isInteger(rating)) {
    ratingHTML += `<i class="fas fa-star-half-alt"></i>`;
  }
  return ratingHTML;
}


  const booksHtml = books.map((book) => {
    return `<div class="book">
    <figure class="book__img--wrapper">
      <img class="book__img" src="${book.url}" alt="">
    </figure>
    <div class="book__title">
    ${book.title}
    </div>
    <div class="book__ratings">
      ${ratingsHTML(book.rating)}
    </div>
    <div class="book__price">
      ${priceHTML(book.originalPrice, book.salePrice)}
    </div>
  </div>`
  })
  .join('');
  booksWrapper.innerHTML = booksHtml;
}

function priceHTML(originalPrice, salePrice) {
  if (!salePrice) {
    return `$${originalPrice.toFixed(2)}`
  }
  return `<span class="book__price--normal">$${originalPrice.toFixed(2)}</span> $${salePrice.toFixed(2)}`
}

function filterBooks(event) {
    renderBooks(event.target.value)
}

setTimeout(() => {
  renderBooks();
});

// FAKE DATA
function getBooks() {
  return [
    {
      id: 1,
      title: "Crack the Coding Interview",
      url: "./CSS/assets/crack the coding interview.png",
      originalPrice: 49.95,
      salePrice: 14.95,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Atomic Habits",
      url: "./CSS/assets/atomic habits.jpg",
      originalPrice: 39,
      salePrice: null,
      rating: 2,
    },
    {
      id: 3,
      title: "Deep Work",
      url: "./CSS/assets/deep work.jpeg",
      originalPrice: 29,
      salePrice: 12,
      rating: 3,
    },
    {
      id: 4,
      title: "The 10X Rule",
      url: "./CSS/assets/book-1.jpeg",
      originalPrice: 44,
      salePrice: 19,
      rating: 5,
    },
    {
      id: 5,
      title: "Be Obsessed Or Be Average",
      url: "./CSS/assets/book-2.jpeg",
      originalPrice: 32,
      salePrice: 17,
      rating: 4,
    },
    {
      id: 6,
      title: "Rich Dad Poor Dad",
      url: "./CSS/assets/book-3.jpeg",
      originalPrice: 70,
      salePrice: 12.5,
      rating: 3.5,
    },
    {
      id: 7,
      title: "Cashflow Quadrant",
      url: "./CSS/assets/book-4.jpeg",
      originalPrice: 11,
      salePrice: 10,
      rating: 4,
    },
    {
      id: 8,
      title: "48 Laws of Power",
      url: "./CSS/assets/book-5.jpeg",
      originalPrice: 38,
      salePrice: 17.95,
      rating: 3.5,
    },
    {
      id: 9,
      title: "The 5 Second Rule",
      url: "./CSS/assets/book-6.jpeg",
      originalPrice: 35,
      salePrice: null,
      rating: 4,
    },
    {
      id: 10,
      title: "Your Next Five Moves",
      url: "./CSS/assets/book-7.jpg",
      originalPrice: 40,
      salePrice: null,
      rating: 1.5,
    },
    {
      id: 11,
      title: "Mastery",
      url: "./CSS/assets/book-8.jpeg",
      originalPrice: 30,
      salePrice: null,
      rating: 2,
    },
  ];
}
