// import { useState } from "react";
// import { socket } from "../socket";

// export default function AlertPanel() {
//   const [base, setBase] = useState("");

//   const setAlert = () => {
//     socket.emit("setAlert", {
//       basePrice: Number(base),
//       percent: 1.5
//     });
//     alert("Alert activated ✅");
//   };

//   return (
//     <div className="bg-card p-6 rounded-xl shadow-lg">
//       <h2 className="text-lg mb-3">Set Price Alert</h2>

//       <input
//         className="w-full p-3 rounded bg-slate-800 text-white mb-3"
//         placeholder="Base Price (e.g. 43000)"
//         onChange={(e) => setBase(e.target.value)}
//       />

//       <button
//         onClick={setAlert}
//         className="w-full bg-accent text-black font-semibold py-2 rounded hover:opacity-90"
//       >
//         Alert ±1.5%
//       </button>

//       <p className="text-xs text-slate-500 mt-2">
//         Triggers instantly when crossed
//       </p>
//     </div>
//   );
// }

import { useState } from "react";
import   { socket }  from "../socket";

export default function AlertPanel() {
  const [base, setBase] = useState("");
  const setAlert = () => {
    socket.emit("setAlert",{
       baseprice : Number(base),
       percent : 0.001
    });
      console.log(" alert succefully set");
       alert(" alert activated");
  };
    return (
    <div className="bg-card p-6 rounded-xl shadow-lg">
      <h2 className="text-lg mb-3">Set Price Alert</h2>

      <input
        className="w-full p-3 rounded bg-slate-800 text-white mb-3"
        placeholder="Base Price (e.g. 43000)"
        onChange={(e) => setBase(e.target.value)}
      />

    <button
  onClick={setAlert}
  className="
    w-full flex items-center justify-center gap-2
    bg-gradient-to-r from-emerald-400 to-green-500
    text-black font-semibold
    py-3 rounded-xl
    shadow-md shadow-emerald-500/30
    hover:scale-[1.02] hover:shadow-lg
    active:scale-95
    transition-all duration-200
  "
>``
  🔔 Set Alert ±1.5%
</button>
      <p className="text-xs text-slate-500 mt-2">
        Triggers instantly when crossed
      </p>
    </div>
  );
}
