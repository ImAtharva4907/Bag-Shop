# Bag Shop - EJS, Node.js, Express, MongoDB

An e-commerce web application for bag shopping, built using EJS, Node.js, Express, and MongoDB. Users can browse products, apply filters, add items to the cart, and manage their accounts.
<p align="center">
  <img src="https://github.com/user-attachments/assets/f726fc44-f76a-4ac2-abee-4644fb2af545" alt="Bag Shop" width="700" />
</p>


## Features
- Dynamic product listing with EJS templates
- Sorting and filtering options
- User authentication (Login/Signup)
- Shopping cart functionality
- Secure session handling with Express sessions
- MongoDB integration for product and user data storage

## Tech Stack
- **Frontend**: EJS, CSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT & Express Session

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/bag-shop.git
   cd bag-shop
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add the following variables:
   ```env
   JWT_KEY=your_jwt_secret
   EXPRESS_SESSION_SECRET=your_session_secret
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```sh
   npm run dev
   ```
5. Open the application in your browser at `http://localhost:3000`

## Folder Structure
```
├── public/         # Static assets (CSS, JS, images)
├── views/          # EJS templates
├── routes/         # Express routes
├── models/         # Mongoose models
├── controllers/    # Route controllers
├── config/         # Configuration files
├── .env            # Environment variables
├── server.js       # Main application entry point
└── package.json    # Dependencies & scripts
```

## License
This project is licensed under the MIT License.

## Author
Developed by [Atharva Chauhan](https://github.com/ImAtharva4907). Feel free to contribute or raise issues!
