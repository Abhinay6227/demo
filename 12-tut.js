const http = require('http');

const server = http.createServer((req,res)=>{

  if(req.url === '/'){
    res.end('Welcome to my Home Page');
  }
  if(req.url === '/about'){
    res.end('Welcome to my About Page');
  }


else {
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">Back Home</a>`)
}

})

server.listen(5000);