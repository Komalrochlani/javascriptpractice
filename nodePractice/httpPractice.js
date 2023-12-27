const http = require("http")

const server = http.createServer((req,resp)=>{
    if(req.url == "/"){
        resp.writeHead(200,{"content-type":"text/html"})
        resp.write("<h1>Welcome to Node</h1>")

    }
    if(req.url == "/about"){
        resp.write("About us ")

    }
    if(req.url == "/help")
    {
        resp.write("help")
    }
resp.end()
})

server.listen(5001);