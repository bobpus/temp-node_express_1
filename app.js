const http = require('http');

server = http.createServer((req, res) => {
    console.log(req);
    res.write('This is the homepage');
    res.end()
})

server.listen(5000)