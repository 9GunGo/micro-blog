const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    // 设置允许跨域的源
 res.setHeader("Access-Control-Allow-Origin",req.headers.origin);  
 // 设置cookie允许跨域
 res.setHeader("Access-Control-Allow-Credentials", true);  
 // 设置可以跨域的请求方法
 res.setHeader("Access-Control-Request-Method", "PUT,POST,GET,DELETE,OPTIONS");

    let resultData = [];
    resultData.push({title:'Hello',link:'Hello.html'});
    resultData.push({title:'Topic 1.What is HTML?',link:'Topic 1.What is HTML?.html'});
    resultData.push({title:'Topic 2.What is CSS?',link:'Topic 2.What is CSS?.html'});
    resultData.push({title:'Topic 3.What is CSS?',link:'Topic 3.What is CSS?.html'});
    for(let i = 0; i < 10; i++){
        resultData.push({title:`This is ${i} article`,link:`This is ${i} article.html`});
    }
    res.end(JSON.stringify(resultData));
});

server.listen(port,hostname,()=>{
    console.log('running');
})