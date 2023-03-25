//requires
const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');

//configs
dotenv.config({ path: './process.env' });


// create app
const app = express();




//render engine / app config
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    partialsDir: './views/partials',
    extname: '.hbs'
}));

app.set('view engine', '.hbs')
app.set('views', './views');

//routes
app.use('/', require('./routes/user'));

//create server
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});