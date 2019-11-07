const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/easy-notes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connect to the database successfully');
}).catch(error => {
    console.log('Error in connecting server : ', error);
    process.exit();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json( { message : "Welcome to Node Js API"} );
});

app.listen(3000, () => {
    console.log('Server running on ');
})