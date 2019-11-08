const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;

const app = express();

mongodb.connect('mongodb://127.0.0.1:27017/',).then(() => {
    console.log('connect to the database successfully');
}).catch(error => {
    console.log('Error in connecting server : ', error);
    process.exit();
})

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json( { message : "Welcome to Node Js API"} );
});

app.listen(3000, () => {
    console.log('Server running on ');
})