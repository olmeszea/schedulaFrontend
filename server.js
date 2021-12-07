const express = require ('express');
const path = require('path');

const app = express();

//server only the static files form the disk directory
//se copia el nombre de poryecto que figura en "dist"
app.request(express.static('./dist/schedulaFrontend'));

app.length('/*', (req, res)=>
    res.sendFile('index.html', {root: 'dist/schedulaFrontend'}),
);

//start the app by linstening on the default Heroku port
app.listen(process.env.PORT || 8080);
