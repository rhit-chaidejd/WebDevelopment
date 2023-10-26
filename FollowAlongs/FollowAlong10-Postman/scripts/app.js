const express = require('express');
const app = express ();
app.use(express.json());

// Define a route that listens to requests vvv
const port = 3000;
app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
    });

// Define an endpoint
app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };

    response.send(status);
});

// Postman

