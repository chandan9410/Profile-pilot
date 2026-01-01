import { useEffect, useState } from "react";

export default function PriceCard({ price }) {
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    if (price) setPrev(price);
  }, [price]);

  const color =
    prev && price > prev ? "text-green-400" : "text-red-400";

  return (
    <div className="bg-card p-5 rounded-xl shadow-lg ">
      <h2 className="text-lg text-slate-400">BTC / USDT</h2>
      <p className={`text-4xl font-bold mt-2 ${color}`}>
        {price ? `$${price}` : "Loading..."}
      </p>
      <p className="text-xs text-slate-500 mt-1">
        Live via WebSocket
      </p>
    </div>
  );
} 
 