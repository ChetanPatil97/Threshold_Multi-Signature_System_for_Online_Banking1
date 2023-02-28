 //basic configuration
 const express = require ("express"); // bring the express
 const app = express();//initilize app 
 const bodyParser = require ("body-parser");
 const mysql = require("mysql2");
 const cors = require("cors");//to access backend API in react frontend side 

  //establish mysql connection 
const db = mysql.createPool({
   host: "localhost",
   user: "root",
   password:"My123@7sql",
   database :"crud_contact",
}) 
 //middlewares 
 app.use(cors());
 app.use(express.json());
 app.use(bodyParser.urlencoded({extended:true}));

 app.get("/", (req,res) => {
    const sqlInsert = "INSERT INTO contact_db (name,email,contact) VALUES ('johnoe','johne@gmail.com',12364)";
   //  "INSERT INTO admin (adminid, password) VALUES (123 , 'abcd')";
     db.query(sqlInsert,(error, result)=>{
        console.log("error", error);
        console.log("result", result);
        res.send("Hello Express");
     });
   //     // res.send("Hello Express");
 });

  //define the port
  app.listen(5000,() =>{
    console.log("Server is running on port 5000");
    //using nodemon because if we made any changes in file 
    //no need kill the server eveytime it will auto restart the server
 })