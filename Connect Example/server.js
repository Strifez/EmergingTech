//your server will live here
//import the 3rd party connect module
//assign it as a reference to the connect variable
let connect = require('connect');

//create an instance of the connect server - app
let app = connect();

//port constant
const port = 3000;

//start listening
app.listen(port);
console.log(`Server Started at http://localhost:$(port)`);

let home = (req, res, next) =>
{
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome');

    next();
}

function helloWorld (req,res,next)
{
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');

    next();
}

//Routing
//First Route '/'
app.use('/hello', helloWorld);
app.use('/', home);
