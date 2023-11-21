import { dirname } from "path";
import { fileURLToPath } from "url";

import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 4000;

//middlewares
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan("dev"))

const all_posts = [
    {
        title: "Scanda Choo", 
        content: "What if we could have it all",
        dateAdded: new Date().toLocaleDateString()
    }
]
//routes
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/create-post", (req, res) => {
    res.render("blog/create_post")
})

app.get("/view-posts", (req, res) => {
    res.render("blog/view_posts", {posts: all_posts})
})

app.get("/update-post", (req, res) => {
    res.send("update_post")
})

app.get("/delete-post", (req, res) => {
    res.send("delete_post")
})

/////////////////////////////////////////////////

app.post("/create-post", (req, res) => {

    const {title, content, dateAdded } = req.body;

    all_posts.push({title, content, dateAdded});
    res.render("index", {message: "Post added successfully"})
})

app.post("/update-post", (req, res) => {
    
})

app.post("/delete-post", (req, res) => {
    
})

//listen to a specific port
app.listen(PORT, ()  => {
    console.log(`Server has started on port: ${PORT}`);
})