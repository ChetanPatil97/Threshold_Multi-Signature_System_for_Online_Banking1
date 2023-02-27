 //basic configuration
 const express = require ("express"); // bring the express
 const app = express();//initilize app 
 const bodyParser = require ("body-parser");
 const cors = require("cors");//to access backend API in react frontend side 

 //middlewares 
 app.use(cors());
 app.use(express.json());
 app.use(bodyParser.urlencoded({extended:true}));

 app.get("/", (req,res) => {
   
     res.send("Hello Express");
  });

  //define the port
  app.listen(5000,() =>{
    console.log("Server is running on port 5000");
    //using nodemon because if we made any changes in file 
    //no need kill the server eveytime it will auto restart the server
 })