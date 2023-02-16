const express = require("express");
const app = express();
const dotenv = require('dotenv');
const products = require("./data/products");
const morgan = require("morgan");
const connectDB = require("./config/db");
const AuthRoute = require('./routes/AuthRoute');

// env congif
dotenv.config();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// DB
connectDB();

// Routes

app.use('/api/auth',AuthRoute);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on Port 5000"); 
});
