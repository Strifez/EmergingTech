/*//your server will live here
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
app.use('/', home);*/
// your server will live here

// import the 3rd party connect module and
// assign it as a reference to the connect variable
let connect = require('connect');

// create an instance of the connect server - app
let app = connect();

// create the port constant
const port = 3000;

// start listening on the port
app.listen(port);
console.log(`Server started at http://localhost:${port}`);

// ROUTING

// second route is '/hello'
app.use('/hello', (req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello, World!");

  next();
});

// first route is '/' - root of my website
app.use('/', (req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end("Welcome!");

  next();
});