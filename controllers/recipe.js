//REQUIRING OUR DB MODELS
const db = require("../models");


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


// Samples 
// db.Recipe.insertMany(
//     {
//         name: "Quick-Pickled Cucumber - Melon Salad",
//         cook_time: "30 mins",
//         prep_time: "10 mins",
//         portion: "6 cups", 
//         ingredient: "4 Kirby cucumbers, peeled and sliced 1/2 inch thin, 3 cups sweet melon, cubed, 2 tablespoons plus two teaspoons granulated sugar, 1 tablespoon salt, black pepper, to taste, 2 slices high-quality prosciutto, cut into thin ribbons OR: 1/2 cup crumbled feta cheese",
//         comment: "Refreshing, definitely will add more cucumber next time and some more cosher salt",
//         },
//         function (err, createSamples){
//             if (err) return console.log(err)
//             return console.log(`=== Sample Created ===== List: ${createSamples}`, createSamples);
//             }  
        
// )

const homepages = async(req, res) => {
    try {
      const limits = 10;
      const categories = await db.Food_category.find({}).limit(limits);
      const recipes = await db.Recipe.find({}).limit(limits);
      res.render('recipe/index', { categories, recipes} );
    } catch (error) {
      res.send(error);
    }
  }

//INDEX 

const idx = (req, res) => {
    db.Recipe.find({}, function (err, allRecipe) {
        if (err) return res.send(err);
        const context = { recipe: allRecipe};
        return res.render("recipe/index", context);
    });
};

const categoryIdx = (req, res) => {
    db.Food_category.find({}, function(err, allFood_Category){
        if (err) return res.send(err);
        const context = { food_category: allFood_Category };
        return res.render("recipe/newRecipe", context);
    })
}
// SHOW

const show = (req, res) => {
    console.log(req.params.id);
    db.Recipe.findById(req.params.id, function (err, foundRecipe) {
        if (err) return res.send(err);

        const context = { recipe: foundRecipe };
        return res.render("recipe/show", context);
    });
};

// NEW

const newRecipe = (req, res) => {
    res.render("recipe/newRecipe");
};

// CREATE

const createRecipe = async (req, res) =>{
    try {
        // req.body.ingredient = req.body.ingredient.replace(/\s*,\s*/g, ',');
        if(req.body.ingredient) req.body.ingredient = req.body.ingredient.split(',');
        if(req.body.direction) req.body.direction = req.body.direction.split(',');
        await db.Recipe.create(req.body)
        res.redirect('/recipe')
    } catch (error) {
        console.log(error)
    }
    
    // const newRecipe = new db.Recipe(req.body);
    // db.Recipe.create(req.body,function (err) {
    //     if(err) return res.redirect("/recipe/newRecipe")
    //     console.log(newRecipe);
    //     res.redirect("/recipe")
    // });
}
// EDIT

const edit = (req, res) => {
    db.Recipe.findById(req.params.id, (err, foundRecipe) => {
        if (err) return res.send(err);

        const context = { recipe: foundRecipe };
        return res.render("recipe/edit", context);
    });
};

// UPDATE

const update = (req, res) => {
    db.Recipe.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                ...req.body,
            },
        },
        { new: true },
        (err, updatedRecipe) => {
            if (err) return res.send(err);
            return res.redirect(`/recipe/${updatedRecipe._id}`);
        }
    );
};

// DELETE

const destroy = (req, res) => {
    db.recipe.findByIdAndDelete(req.params.id, (err, deletedRecipe) => {
        if (err) return res.send(err);

        return res.redirect("/recipe");
    });
};

module.exports = {
    homepages,
    idx,
    show,
    createRecipe,
    newRecipe,
    edit,
    update,
    destroy,
    categoryIdx,
};

