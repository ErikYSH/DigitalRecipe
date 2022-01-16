require("dotenv").config();

/* ========== EXTERNAL MODULES ========== */
const express = require("express");
const methodOverride = require("method-override")

/* ========== INTERNAL MODULES ========== */
const routes = require('./routes');

/* ========== INSTANCE METHODS ========== */
const app = express();

/* ========== CONFIGURATION ========== */
const PORT = 7000;

/* ========== MIDDLEWARE ========== */
// body data middleware
app.use(express.urlencoded({ extended: true }));
// method override middleware
app.use(methodOverride("_method"));
// serve public files
app.use(express.static("public"));
// logger
app.use((req, res, next) => {
	console.log(req.url, req.method);
	next();
});

//INTERNAL ROUTES
// const indexRoutes = require('./routes/index');
// const userRoutes = require('./routes/user');
// const recipeRoutes = require('./routes/recipe');
// const food_categoryRoutes = require('./routes/food_category');


/* ========== Router & Controllers ========== */
app.get("/", (req,res)=>{
    res.send("<h1> Welcome to Digital Page</h1>")
})
// 404 Route
app.get((req,res)=>{
    res.send("404! NOT FOUND")
})

// VIEW ENGINE SET UP // 
app.set("view engine", "ejs");

// app.use('/index', indexRoutes);
// app.use('/user', userRoutes);
// app.use('/recipe', recipeRoutes);
// app.use('/food_category', food_categoryRoutes);


app.listen(PORT, () =>{
    console.log(`Digital Recipe going ON - PORT:${PORT}`)
})


