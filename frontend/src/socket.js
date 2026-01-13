// import { io } from "socket.io-client";

// export const socket = io("http://localhost:4000", {
//   transports: ["websocket"]
// });


import { io } from "socket.io-client";

const URL = import.meta.env.VITE_API_URL;

export const socket = io(URL, {
  transports: ["websocket"],
  autoConnect: true,
});
