// Import express.
let express = require("express");

// Create an express app.
let app = express();

// Use the build directory as a static website root.
app.use(express.static(__dirname + "/../build"));

// Run express server.
let server = app.listen(8080, () => {
    console.log("Server started listening on 8080. 🦄")
})