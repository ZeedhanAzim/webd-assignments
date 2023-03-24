const express = require('express');
const PORT = 3000;

//create express app
const app = express();

//set up the Express-Handlebars engine
app.engine('hbs', exphbs.engine({ defaultlayout: 'main', extname: '.hbs', partialsDir: './views/partials' }))
app.set('view engine', 'hbs');
app.set('view', './views')

//engage in middleware
app.use((req, res, next) => {
    console.log(`URL: ${req.url}`);
    req.myName = 'Zeedhan';
    next()
})

//additional middleware can be added here, like authentication, error handling, authorization

//route to '/' with get method
app.get("/", (req, res) => {
    const homeh1 = "welcome";
    const pageTitle = "home page";
    res.render('home', {
        pageTitle: pageTitle,
        homeh1: homeh1
    });
});

app.get("/", (req, res) => {
    const pageTitle = "home page";
    res.send('this is the about page for the Express app ');
});

//get second handlebar
app.get("/", (req, res) => {
    const pageTitle = "new home page";
    res.render('new_home');
});

app.get("/new_home", (req, res) => {
    res.render('this is the new about page for the Express app ', {
        pageTitle: pageTitle
    });
});


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});