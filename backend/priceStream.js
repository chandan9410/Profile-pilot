// const WebSocket = require("ws");
// const checkAlert = require("./alertEngine");

// module.exports = function startPriceStream(io, getAlert) {
//   const ws = new WebSocket(
//     "wss://stream.binance.com:9443/ws/btcusdt@ticker"
//   );

//   ws.on("message", (data) => {
//     const priceData = JSON.parse(data);
//     const price = parseFloat(priceData.c);

//     io.emit("price", price);

//     const alert = getAlert();
//     if (!alert) return;

//     const result = checkAlert(price, alert.basePrice, alert.percent);
//     if (result) {
//       io.emit("alert", {
//         price,
//         direction: result
//       });
//     }
//   });
// };


const checkAlert = require("./alertEngine");

module.exports = function startPriceStream(io, getAlert) {
  const BINANCE_API =
    "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";

  let lastPrice = null;

  setInterval(async () => {
    try {
      const res = await fetch(BINANCE_API);
      const data = await res.json();

      const price = parseFloat(data.price);
      if (!price || price === lastPrice) return;

      lastPrice = price;

      // emit price to clients
      io.emit("price", price);

      const alert = getAlert();
      if (!alert) return;

      const result = checkAlert(price, alert.basePrice, alert.percent);
      if (result) {
        io.emit("alert", {
          price,
          direction: result,
        });
      }
    } catch (err) {
      console.error("Price fetch error:", err.message);
    }
  }, 3000); // fetch every 3 seconds
};
