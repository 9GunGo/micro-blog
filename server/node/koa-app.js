const Koa = require('koa');
const app = new Koa();

app.use(async (ctx,next)=>{
    ctx.set("Access-Control-Allow-Origin","*");
    await next()
})

app.use(ctx=>{
    let resultData = [];
    resultData.push({title:'Hello',link:'Hello.html'});
    resultData.push({title:'Topic 1.What is HTML?',link:'Topic 1.What is HTML?.html'});
    resultData.push({title:'Topic 2.What is CSS?',link:'Topic 2.What is CSS?.html'});
    resultData.push({title:'Topic 3.What is CSS?',link:'Topic 3.What is CSS?.html'});
    for(let i = 0; i < 10; i++){
        resultData.push({title:`This is ${i} article`,link:`This is ${i} article.html`});
    }
    ctx.response.body = JSON.stringify(resultData)
});

app.listen(3000);