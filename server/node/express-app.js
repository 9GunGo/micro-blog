const express = require("express");
const app = express();

app.use((req, res, next) => {  
    res.header('Access-Control-Allow-Origin', '*');  
    res.header('Access-Control-Allow-Methods', 'GET, POST');  
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');  
    next();  
});

app.get('/',(req,res)=>{
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

app.listen(3000, ()=>{
    console.log('3000 running');
})