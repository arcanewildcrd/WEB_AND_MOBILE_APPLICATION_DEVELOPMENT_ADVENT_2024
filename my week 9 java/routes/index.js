const express = require('express');
const app = express();
const port = 5000;

//service import
const my_business_logic = require('./service/my_business_logic');

//greetings
app.get('/greetings', (request, response) => {
    response.send("Kon'nichiwa Noeru-sama!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`);
});

//list of friends

let friends = [
    {'id':1, 'name':'Tabby'},
    {'id':2, 'name':'Bruno'},
    {'id':3, 'name':'Kapesh'},
    {'id':4, 'name':'Lolo'},
    {'id':5, 'name':'Simon'}
];

app.get('/friends', (req, res) => {
    return res.send(friends);
});