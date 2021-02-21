const express = require('express');
const monk = require('monk');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use(express.static('public'));
app.use(express.json())
const db = monk('mongodb+srv://sammitpal2000:sammit@cluster0.tv7g1.mongodb.net/formData?retryWrites=true&w=majority');

db.then(()=>{
    console.log('Mongo Connected');
}).catch((e)=>{
    console.log(e);
})
const formData = db.get('formData');

app.post('/results', (req,res) => {
    const data = {
        name: req.body.name,
        email: req.body.mail
    }
    formData.insert(data).then((insertData)=>{
        res.json(insertData);
    })
});
app.get('/results', (req,res,next) => {
    formData
    .find()
    .then(mData => {
      res.json(mData);
    }).catch(next);
})


app.listen(port, () => console.log(`listening on ${port}`))