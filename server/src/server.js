const express = require("express");
const app = express();
const cors = require("cors"); // Import the 'cors' package
const apiRoutes = require("./routes/api");
const port = process.env.PORT || 5000;

// Middleware to parse JSON in request body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
