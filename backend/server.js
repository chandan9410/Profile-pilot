const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const startPriceStream = require("./priceStream");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// active alert (in-memory for now)
let alertConfig = null;

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("setAlert", (data) => {
    alertConfig = data;
    console.log("Alert set:", alertConfig);
  });
});

startPriceStream(io, () => alertConfig);

server.listen(4000, () =>
  console.log("Backend running on http://localhost:4000")
);
