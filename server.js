require('./server/config/mongoose');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './rating/dist/rating')));
require('./server/config/routes.js')(app);

app.listen(8000, function(){
    console.log("listening on port 8000");
});
