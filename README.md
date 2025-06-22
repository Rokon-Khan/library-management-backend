# Library Management System API

A robust Library Management System API built with **Express**, **TypeScript**, and **MongoDB** (via Mongoose). This API allows users to manage books and borrowing records, with features like schema validation, business logic enforcement, aggregation pipelines, and filtering capabilities.

🚀 **Live Deployment**: [https://library-management-system-rho-khaki.vercel.app/](https://library-management-system-rho-khaki.vercel.app/)

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Endpoints](#api-endpoints)
- [Installation Guide](#installation-guide)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Book Management**: Create, read, update, and delete books with proper validation.
- **Borrowing System**: Borrow books with availability checks and due date tracking.
- **Aggregation Pipeline**: Summarize borrowed books with total quantities.
- **Mongoose Features**: Utilizes static/instance methods and middleware for business logic.
- **Filtering & Sorting**: Filter books by genre and sort by various fields.
- **Type Safety**: Built with TypeScript for robust type checking.
- **Error Handling**: Standardized error responses for validation and server errors.

## Tech Stack
- **Node.js** with **Express**: Backend framework for routing and middleware.
- **TypeScript**: Static typing for enhanced developer experience.
- **MongoDB**: NoSQL database for storing books and borrow records.
- **Mongoose**: ODM for MongoDB with schema validation and middleware.
- **Vercel**: Hosting platform for deployment.

## API Endpoints
### Books
- **POST /api/books**: Create a new book.
- **GET /api/books**: Retrieve all books (supports filtering by genre, sorting, and limiting).
  - Query Parameters: `filter` (genre), `sortBy` (field), `sort` (asc/desc), `limit` (number).
  - Example: `/api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5`
- **GET /api/books/:bookId**: Retrieve a book by ID.
- **PUT /api/books/:bookId**: Update a book by ID.
- **DELETE /api/books/:bookId**: Delete a book by ID.

### Borrowing
- **POST /api/borrow**: Borrow a book (validates availability and updates copies).
- **GET /api/borrow**: Retrieve a summary of borrowed books using MongoDB aggregation.

**Response Format**:
```json
{
  "success": boolean,
  "message": string,
  "data": object | array | null
}
```

**Error Response**:
```json
{
  "success": false,
  "message": string,
  "error": object
}
```

For detailed request/response examples, refer to the [API documentation](#api-endpoints) or test the live API.

## Installation Guide
Follow these steps to set up and run the project locally.

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local instance or MongoDB Atlas)
- **npm** (Node package manager)
- **Git** (for cloning the repository)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/library-management-system.git
   cd library-management-system
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/library
   ```
   - Replace `MONGO_URI` with your MongoDB connection string (e.g., MongoDB Atlas URI if using a cloud database).

4. **Build the Project**:
   Compile TypeScript to JavaScript:
   ```bash
   npm run build
   ```

5. **Start the Server**:
   Run the compiled JavaScript code:
   ```bash
   npm start
   ```
   Alternatively, for development with live reloading:
   ```bash
   npm run dev
   ```

6. **Verify the API**:
   The API should be running at `http://localhost:5000`. Test endpoints using tools like **Postman** or **cURL**.

### Project Structure
```plaintext
├── src
│   ├── controllers    # Request handlers for books and borrowing
│   ├── models        # Mongoose schemas for Book and Borrow
│   ├── routes        # Express route definitions
│   ├── utils         # Utility functions (e.g., asyncHandler)
│   ├── index.ts      # Entry point for the application
├── dist              # Compiled JavaScript output
├── .env              # Environment variables
├── package.json      # Project dependencies and scripts
├── tsconfig.json     # TypeScript configuration
```

## Usage
1. **Test the API Locally**:
   Use Postman or similar tools to send requests to `http://localhost:5000/api/books` or `http://localhost:5000/api/borrow`.

2. **Example Request (Create Book)**:
   ```bash
   curl -X POST http://localhost:5000/api/books \
   -H "Content-Type: application/json" \
   -d '{
     "title": "The Theory of Everything",
     "author": "Stephen Hawking",
     "genre": "SCIENCE",
     "isbn": "9780553380163",
     "description": "An overview of cosmology and black holes.",
     "copies": 5
   }'
   ```

3. **Explore the Live API**:
   Visit [https://library-management-system-rho-khaki.vercel.app/](https://library-management-system-rho-khaki.vercel.app/) and use the same endpoints (e.g., `/api/books`).

## Environment Variables
| Variable    | Description                          | Default Value             |
|-------------|--------------------------------------|---------------------------|
| `PORT`      | Port for the server to listen on     | `5000`                    |
| `MONGO_URI` | MongoDB connection string            | `mongodb://localhost:27017/library` |

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code follows the existing style and includes tests where applicable.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
