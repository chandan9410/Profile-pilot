import { useEffect, useState } from "react";
import { socket } from "./socket";
import Header from "./components/Header";
import PriceCard from "./components/PriceCard";
import AlertPanel from "./components/AlertPanel";
import AlertToast from "./components/AlertToast";

export default function App() {
  const [price, setPrice] = useState(0);
  const [toast, setToast] = useState("");

  useEffect(() => {
    socket.on("price", setPrice);

    socket.on("alert", (data) => {
      setToast(`BTC ${data.direction} at $${data.price}`);
      new Notification("BTC Price Alert 🚨", {
        body: `BTC ${data.direction}`
      });
    });

    return () => socket.off();
  }, []);

  return (
    <div className="min-h-screen px-6 py-4">
      <Header />
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <PriceCard price={price} />
        <AlertPanel />
      </div>
      {toast && <AlertToast message={toast} />}
    </div>
  );
}