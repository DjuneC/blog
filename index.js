import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

//middlewares
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan("dev"))

//listen to a specific port
app.listen(PORT, ()  => {
    console.log(`Server has started on port: ${PORT}`);
})