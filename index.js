 const express = require("express");
 const app = express();
 const path = require("path");
 const mysql = require("mysql");
 const myConnection = require("express-myconnection");
 const cors = require("cors");
 //import routes
const rutasAprendices = require("./routes/aprendices");

//settings
app.set("port", process.env.PORT || 3000 );
//app.set("view engine","ejs");
//app.set("views", path.join( __dirname,"views"));
//middlewares
app.use(myConnection(mysql, {
    host : 'localhost',
    user: 'root',
    password: '',
    port:3306,
    database: 'adsi'

}, 'single'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
//routes
app.use("/api", rutasAprendices);

//static files
app.use(express.static(path.join(__dirname, 'dist/client')));


//start server
app.listen(app.get("port"), ()=>{
    console.log("Servidor iniciado en el puerto ",app.get("port"))
});
