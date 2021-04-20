// TODO: review https://expressjs.com/
const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect(
    "mongodb+srv://chayank:123!pass@cluster0.0ssbw.mongodb.net/whiteboard?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://chayank:123!pass@cluster0.0ssbw.mongodb.net/whiteboard?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


// const quizzesController = require("./controllers/quizzes-controller")
// quizzesController(app)

require("./controllers/quizzes-controller")(app)
require("./controllers/question-controller")(app)

require('./controllers/quiz-attempts-controller')(app)


app.listen(process.env.PORT||3000)