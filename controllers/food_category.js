const db = require("../models");
const res = require("express/lib/response");


// RESTUFL ROUTES CHECK LIST!
/*
 * Index - GET - /authors  - Presentational - respond with all authors DONE

 * New - GET - /authors/new  - Presentational Form - a page with a form to create a new author DONE

 * Show - GET - /authors/:id  - Presentational - respond with specific author by id DONE
 * 
 * Create - Post - /authors  - Functional - recieve data from new route to create a author DONE
 * 
 * Edit - GET - /authors/:id/edit  - Presentational Form - respond with a form prefilled with author data
 * 
 * Update - PUT - /authors/:id  - Functional - recieve data from edit to update a specific author
 * 
 * Delete - DELETE - /authors/:id  - Functional - Deletes author by id from request
 */


// Inserting Samples 
// const samples = db.Food_category.insertMany(
//     {
//         name: "Breakfast Test"
//     },
//     function (err, createSamples){
//     if (err) return console.log(err)
//     return console.log(`=== Sample Created ===== List: ${createSamples}`, createSamples);
//     }
// )



//INDEX 

const idx = (req, res) => {
    db.Food_category.find({}, function (err, allFood_Category) {
        if (err) return res.send(err);
        const context = { user: allFood_Category };
        return res.render("food_category/index", context);
    });
};

// SHOW

const show = (req, res) => {
    console.log(req.params.id);
    db.Food_category.findById(req.params.id, function (err, foundFood_Category) {
        if (err) return res.send(err);

        const context = { user: foundFood_Category };
        return res.render("food_category/show", context);
    });
};

// NEW

const newFood_category = (req, res) => {
    res.render("food_category/new");
};

// CREATE

const create = (req, res) => {
    db.Food_category.create(req.body, function (err, createdFood_Category) {
        if (err) return res.send(err);

        return res.redirect("/food_category");
    });
};

// EDIT

const edit = (req, res) => {
    db.Food_category.findById(req.params.id, (err, foundFood_Category) => {
        if (err) return res.send(err);

        const context = { food_Category: foundFood_Category };
        return res.render("food_category/edit", context);
    });
};

// UPDATE

const update = (req, res) => {
    db.Food_category.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                ...req.body,
            },
        },
        { new: true },
        (err, updatedFood_category) => {
            if (err) return res.send(err);
            return res.redirect(`/food_category/${updatedFood_category._id}`);
        }
    );
};

// DELETE

const destroy = (req, res) => {
    db.Food_category.findByIdAndDelete(req.params.id, (err, deletedFood_category) => {
        if (err) return res.send(err);

        return res.redirect("/food_category");
    });
};

module.exports = {
    idx,
    show,
    create,
    newFood_category,
    edit,
    update,
    destroy,
};
