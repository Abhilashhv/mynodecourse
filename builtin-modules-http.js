const http = require("http")
const server = http.createServer((req,res) => {
    if(req.url === '/'){
     res.end("Welcome to the home page!")
    }
    else if(req.url === '/about'){
        res.end("Welcome to the about page!")
       }
    else{
        res.end("page not found");
    } 
    // if(req.url === '/about'){
    //  res.end("Welcome to the about page!")
    // }
    
    //res.end("page not found");
})
server.listen(5105);