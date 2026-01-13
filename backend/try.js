const  express = require("express");
const users = require("./MOCK_DATA.json");
 //  Rest apis

 const app =  express();
  const  port = 5000;
 app.get('/users',async(req,res)=>{
        // return res.json(users);
       
         try {
          const   {data} = await axios('https://cryptopanic.com/api/v1/posts/');
         } catch (error) {
              console.error(error,"the error is ");
         }
 });
app.listen(port ,()=>{
   console.log("server is running at port no : 5000");
});




// const express = require("express");
// const http = require("http");
// const cors = require("cors");
// const { server } = require("socket.io");
// const startPriceStream = require("./priceStream");

// const app = express();
// app.use(express.json());
// // server creattion or installtion 
// const createServer = http.createServer(app);
// // 
// const io = new Server(createServer, {
//     cors: {
//         origin: "*",
//     },
// });

// app.use(cors());  // allow acess  from all ports;
// app.use(express.json());
// io.on("connection", (socket) => {
//     console.log("connected is completed");
//     socket.on("alert", (data) => {
//         alertconfig = data;
//         console.log("alert  set :", alertconfig);

//     });
// });
// startPriceStream(io, () => alertconfig);
// createServer.listen(4000, () => {
//     console.log("server is running in port no 4000");

// });



