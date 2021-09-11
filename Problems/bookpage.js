function bookPages(book1, book2, book3) {
    book1 = book1 * 100
    book2 = book2 * 200
    book3 = book3 * 300

    totalPage = book1 + book2 + book3

    return totalPage
}

totalPage = bookPages(3, 2, 4)
console.log(totalPage)