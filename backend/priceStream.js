const WebSocket = require("ws");
const checkAlert = require("./alertEngine");

module.exports = function startPriceStream(io, getAlert) {
  const ws = new WebSocket(
    "wss://stream.binance.com:9443/ws/btcusdt@ticker"
  );

  ws.on("message", (data) => {
    const priceData = JSON.parse(data);
    const price = parseFloat(priceData.c);

    io.emit("price", price);

    const alert = getAlert();
    if (!alert) return;

    const result = checkAlert(price, alert.basePrice, alert.percent);
    if (result) {
      io.emit("alert", {
        price,
        direction: result
      });
    }
  });
};
