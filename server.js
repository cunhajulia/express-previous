const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3001
const bodyParser = require('body-parser')


app.use(cors())

app.set('view engine', 'ejs') 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(3001);

let status 

app.get('/', (request, response)=>{
        response.render('index.ejs', {status: status})
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})
app.get('/style.css', (request, response)=>{
    response.sendFile(__dirname + '/style.css')
})
app.post('/palindrome', (request, response)=>{
    const userInput = request.body.word.toLowerCase().trim() //word here is the name attribute I put in ejs
    console.log(userInput)
    const flipReverseIt = userInput.split('').reverse().join('')
    status = userInput == flipReverseIt ? 'It is a palindrome' : "It is not a palindrome"
    response.redirect('/')
})
  








//original boilerplate:
// app.get('/api/:name',(request,response)=>{
//     const rapperName = request.params.name.toLowerCase()

//     if( rappers[rapperName] ){
//         response.json(rappers[rapperName])
//     }else{
//         response.json(rappers['unknown'])
//     }
    
// })






















// const express = require('express')
// const app = express()

// const server = http.createServer(function(req, res) {
//   const page = url.parse(req.url).pathname;
//   const params = querystring.parse(url.parse(req.url).query);
//   console.log(page);
//   if (page == '/') { //path - localhost8000 (or whatever other port #, for example)
//     fs.readFile('index.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }
  
//   else if (page == '/palindrome') {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     const word = params["word"].toLowerCase() //building api url with the [] 
//     const database = {
//       check: word === word.split("").reverse().join("")
//     }
    
//     res.end(JSON.stringify(database)); //this is what'll turn my database object into data (JSON)
//   }

//   else if (page == '/css/style.css'){ //if it is, it will read file and send back to the browser 
//     fs.readFile('css/style.css', function(err, data) {
//       res.write(data);
//       res.end();
//     });
//   }else if (page == '/js/main.js'){
//     fs.readFile('js/main.js', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/javascript'});
//       res.write(data);
//       res.end();
//     });
//   }else{
//     figlet('404!!', function(err, data) {
//       if (err) {
//           console.log('Something went wrong...');
//           console.dir(err);
//           return;
//       }
//       res.write(data);
//       res.end();
//     });
//   }
// });

// server.listen(5000);