const express = require('express');

const router = express.Router();
const Recipe = require('../models/recipe');
const Review = require('../models/review');




//Display all recipe------>
router.get('/recipes',async(req,res)=>{
    try{
        const recipes = await Recipe.find({});
    res.render('recipe/home',{recipes});
    }
    catch(e){
        console.log("Something Went Wrong");
        req.flash('error', 'Cannot Find item');
        res.render('error');
    }
})

//Get the form for a new product---->
router.get('/recipes/new',(req,res)=>{
    res.render('recipe/new');
})

//create new recipe------>
router.post('/recipes',async(req,res)=>{
try{
    await Recipe.create(req.body.recipe);
req.flash('success', 'item Created Successfully');
res.redirect('/recipes');
}
catch (e){
    console.log(e.message);
    req.flash('error', 'Cannot Create item,Something is Wrong');
    res.render('error');

}
})

//show particular product---->

router.get('/recipes/:id',async(req,res)=>{
 try{
     const recipe = await Recipe.findById(req.params.id).populate('reviews');
 res.render('recipe/show',{recipe});
 }
 
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot find this item');
        res.redirect('/error');
    }
 
})

//Get the edit form 

router.get('/recipes/:id/edit', async(req, res) => {
try{
    const recipe = await Recipe.findById(req.params.id);

    res.render('recipe/edit',{recipe});
}
catch (e) {
    console.log(e.message);
    req.flash('error', 'Cannot Edit this item');
    res.redirect('/error');
}
})

//update the particular recipes------>

router.patch('/recipes/:id',async(req,res)=>{
    try{
    await Recipe.findByIdAndUpdate(req.params.id,req.body.recipe);
    req.flash('success', 'Updated Successfully!');
    res.redirect(`/recipes/${req.params.id}`);
    }
    catch (e) {
            console.log(e.message);
            req.flash('error', 'Cannot update this item');
            res.redirect('/error');

    }
})

//delete a particular recipes---->
router.delete('/recipes/:id',async(req,res)=>{
    try{
    await Recipe.findByIdAndDelete(req.params.id);
    req.flash('success', 'Deleted the product successfully');
    res.redirect('/recipes');
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot delete this item');
        res.redirect('/error');
    }
})

//Create a new comment----->
router.post('/recipes/:id/review',async(req,res)=>{
    try{
    const recipe = await Recipe.findById(req.params.id);
    const review =  new Review(req.body);

    recipe.reviews.push(review);

    await review.save();
    await recipe.save();
    req.flash('success','Successfully added your review!');
    res.redirect(`/recipes/${req.params.id}`);
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot add review to this Product');
        res.redirect('/error');
    }
})
router.get('/error', (req, res) => {
    res.status(404).render('error');
})

module.exports = router;