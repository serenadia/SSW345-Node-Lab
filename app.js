const express = require('express');
const bodyParser = require('body-parser');
//const { response } = require('express');
const port = 3002;
const app = express();
const routes = require('./routes/routes');

/*
app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send('Hello, Server!');
});
*/

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
/*
app.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API'
    });
});
*/
app.get(routes(app));