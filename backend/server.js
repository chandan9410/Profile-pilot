const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
const startPriceStream = require("./priceStream");

dotenv.config();

const app = express();

app.use(cors({
  origin: "*", 
}));

app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", 
    //  origin: "https://profile-pilot-chi.vercel.app",
    methods: ["GET", "POST"],
  },
});

// active alert (in-memory)
let alertConfig = null;

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("setAlert", (data) => {
    alertConfig = data;
    console.log("Alert set:", alertConfig);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

startPriceStream(io, () => alertConfig);
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
