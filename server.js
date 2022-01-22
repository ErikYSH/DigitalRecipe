require("dotenv").config();

/* ========== EXTERNAL MODULES ========== */
const express = require("express");
const methodOverride = require("method-override");
const expressFileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;

/* ========== INTERNAL MODULES ========== */
const routes = require('./routes');

/* ========== INSTANCE METHODS ========== */
const app = express();

/* ========== CONFIGURATION ========== */
const PORT = 7000;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

/* ========== MIDDLEWARE ========== */
// body data middleware
app.use(express.urlencoded({ extended: true }));
// method override middleware
app.use(methodOverride("_method"));
// serve public files
app.use(express.static("public"));
app.use(express.static("uploads"))
// logger
app.use((req, res, next) => {
    console.log(req.url, req.method);
	next();
});
app.use(expressFileUpload({ createParentPath: true }));

// VIEW ENGINE SET UP // 
app.set("view engine", "ejs");



/* ========== Router & Controllers ========== */
// app.get("/", (req,res)=>{
//     res.send("<h1> Welcome to Digital Page</h1>")
// })

app.get("/", (req, res) => {
    res.render("index")///app.use should be used after defining routes rather than app.get
})
// 404 Route
app.get((req,res)=>{
    res.send("404! NOT FOUND")
})
 




app.use('/recipe', routes.recipe);

app.listen(process.env.PORT || 7000, () => {
    console.log(`AWESOME DIGITAL RECIPE Book is Live on - PORTL:${PORT}`)
})