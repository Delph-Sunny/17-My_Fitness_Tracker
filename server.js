const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
// Setting up port
const PORT = process.env.PORT || 3000;
// Creating express app
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
}).then(() => console.log("   ***** MongoDB Connected *****"))
  .catch(err => console.log(err));

// Requiring our routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Logging a message to the user upon success
app.listen(PORT, () => {
  console.log(`
   ==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.
  `);
});
