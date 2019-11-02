const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/form', (req, res) => {
    console.log(req.body);
   let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged", "date") VALUES ($1, $2, $3, $4, $5, $6)`;

    pool.query(queryText,[req.body.feeling,req.body.understanding,req.body.support,req.body.comments,false,req.body.date])
        .then(result => {
            console.log(result);
            res.sendStatus(200);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500)
        })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});