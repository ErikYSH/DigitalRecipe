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

//INDEX 

const idx = (req, res) => {
    db.User.find({}, function (err, allUser) {
        if (err) return res.send(err);
        const context = { user: allUser };
        return res.render("user/index", context);
    });
};

// SHOW

const show = (req, res) => {
    console.log(req.params.id);
    db.User.findById(req.params.id, function (err, foundUser) {
        if (err) return res.send(err);

        const context = { user: foundUser };
        return res.render("user/show", context);
    });
};

// NEW

const newUser = (req, res) => {
    res.render("user/new");
};

// CREATE

const create = (req, res) => {
    db.User.create(req.body, function (err, createdUser) {
        if (err) return res.send(err);

        return res.redirect("/user");
    });
};

// EDIT

const edit = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) return res.send(err);

        const context = { user: foundUser };
        return res.render("user/edit", context);
    });
};

// UPDATE

const update = (req, res) => {
    db.User.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                ...req.body,
            },
        },
        { new: true },
        (err, updatedUser) => {
            if (err) return res.send(err);
            return res.redirect(`/user/${updatedUser._id}`);
        }
    );
};

// DELETE

const destroy = (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if (err) return res.send(err);

        return res.redirect("/user");
    });
};

module.exports = {
    idx,
    show,
    create,
    newUser,
    edit,
    update,
    destroy,
};







