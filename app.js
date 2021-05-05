const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const flash =require('connect-flash');

const seedDB = require('./seed');

//Route
const recipeRoutes = require('./routes/recipe'); 


mongoose.connect('mongodb://localhost/blogpage', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('DB Connected');
})
.catch(err =>{
  console.log("Not Connect Yet");
  console.log(err);

})


// seedDB();



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, '/public')));


const sessionConfig = {
    secret: 'weneedsomebettersecret',
    resave: false,
    saveUninitialized: true
}

app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.get('/',(req,res)=>{
    res.send("Landing page");
})


app.use(recipeRoutes);



app.listen(3000,()=>{
    console.log('server running in 3000');
})