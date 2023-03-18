const express = require('express');
const PORT = 3000;

//create express app
const app = express();

//set up the Express-Handlebars
app.engine('handlebars', exphbs.engine({ defaultlayout: 'main' }))
app.set('view engine', 'handlebars');
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
    res.render('home');
});

app.get("/", (req, res) => {
    res.send('this is the about page for the Express app ');
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});