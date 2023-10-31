# Node.js Bookstore API

## API Endpoints

1. Add a New Book
  Endpoint:`/books`
  Method:POST
  Description:Add a new book to the bookstore database.
  Request Example:
  {
  "title": "title",
  "author": "author",
  "summary": "A summary"
  }

2. View a List of All Books
    Endpoint: /books
    Method: GET
    Description: Retrieve a list of all books in the bookstore.

3. View Details of a Specific Book
    Endpoint: /books/:id
    Method: GET
    Description: Retrieve details of a specific book by its ID.

4. Update a Book's Details
    Endpoint: /books/:id
    Method: PUT
    Description: Update the details of a specific book by its ID.
   Request Example:
 {
   "title": "Updated Book Title",
  "author": "Jane Doe",
   "summary": "An updated summary."
 }

5. Delete a Book
    Endpoint: /books/:id
    Method: DELETE
    Description: Delete a specific book by its ID.
