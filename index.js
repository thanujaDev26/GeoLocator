const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const provinces = require('./src/routes/province');
const districts = require('./src/routes/district');
const cities = require('./src/routes/city');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');

app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT}`);
});

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/provinces', provinces);
app.use('/districts', districts);
app.use('/cities', cities);
