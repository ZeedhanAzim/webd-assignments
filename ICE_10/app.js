const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './process.env' })

const DB_CONN = process.env.MONGO_STRING.replace(
    '<PASS>',
    process.env.MONGO_PASS);
mongoose
    .connect(DB_CONN, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('connection succeeded'))
    .catch(() => console.log(`DB Connection ERROR: ${err}`));

const app = express();

app.engine(".hbs", exphbs.engine({
    defaultLayout: 'main',
    partialsDir: './views/partials',
    extname: '.hbs'
}))
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes/user'))

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
