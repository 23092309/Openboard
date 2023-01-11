const express = require("express");
const socket = require("socket.io");

app= express();

app.use(express.static("public"));

let port =5000;
let server = app.listen(port, () => {
    console.log("Listening to port" + port);
})

let io = socket(server);

io.on("connection", (socket) => {
    console.log("Made socket connection");
    
})