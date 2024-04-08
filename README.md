# Node Version - 18.12.0
# Npm version - 8.19.2

Blog Application:
    This is a simple blog application built with Node.js, Express.js, and MongoDB. It allows users to register, login, create blog posts, add comments to posts, and perform CRUD operations on posts.

Features:
    User registration and authentication
    Create, read, update, and delete blog posts
    Add comments to blog posts
    Pagination for viewing blog posts
    Image upload for blog post covers

Setup:
 To set up the project locally, follow these steps:

1.Clone the repository: git clone https://github.com/gopss936/blogs.git

2.Install dependencies:

# npm install
3.Run the application:
# npm start
The application should now be running on http://localhost:3000.

API Documentation:
The API documentation is available in the docs directory. You can access it by opening the http://localhost:3000/api-docs file in a web browser.

Folder Structure:
    controllers: Contains the route handlers for different API endpoints.
    middleware: Contains middleware functions for authentication, error handling, etc.
    models: Contains Mongoose models for user, post, and comment schemas.
    routes: Contains route definitions for different API endpoints.
    utils: Contains utility functions, such as validation and error messages.

Technologies Used:
    Node.js
    Express.js
    MongoDB
    Mongoose
    JWT for authentication
    Swagger for API documentation
