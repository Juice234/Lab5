const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//Message to main page
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//Message to specific url
app.get('/datarep',(req,res)=>{
    res.send('Welcome to Data');
})
app.get('/hello',(req,res)=>{
    res.send('Hello');
})
//Message with input
app.get('/hello/name',(req,res)=>{
    console.log(req.params.name)
    res.send('Hello ' +req.params.name );
})
//Display items from array
app.get('/api/books',(req,res)=>{
    const books=  [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
  
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ]
    res.json({
        mybboks:books
    } );
})

app.get('/test',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
//Field entry + redirection after entering in field
app.get('/name',(req,res)=>{
    console.log(req.query.fname);
    res.send('Hello ' +req.query.fname + ' ' + req.query.lname )
})
app.post('/name',(req,res)=>{ 
    console.log(req,res);
    res.send('Hello from post'  + req.body.fname + ' ' + req.body.lname)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
