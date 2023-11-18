const express = require('express');
const { connect } = require('./db'); // Import the connect function from db.js
const menuItemsRouter = require('./routes/menuItems');
// const customersRouter = require('./routes/customers');
const cors = require('cors'); // Import cors

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Connect to the database
connect();

// Use the routers
app.use('/menuItems', menuItemsRouter);
// app.use('/customers', customersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
