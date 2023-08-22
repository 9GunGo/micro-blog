let listDiv = document.querySelector(".list");
// 本地固定数据模拟
let resultData = [];
// resultData.push({title:'Hello',link:'Hello.html'});
// resultData.push({title:'Topic 1.What is HTML?',link:'Topic 1.What is HTML?.html'});
// resultData.push({title:'Topic 2.What is CSS?',link:'Topic 2.What is CSS?.html'});
// resultData.push({title:'Topic 3.What is CSS?',link:'Topic 3.What is CSS?.html'});
// for(let i = 0; i < 10; i++){
//     resultData.push({title:`This is ${i} article`,link:`This is ${i} article.html`});
// }

// 原生Ajax请求数据
let httpRequest =new XMLHttpRequest();
if(!httpRequest){
    alert('不能创建HTTP实例');
}
httpRequest.onreadystatechange = function(){
    if(httpRequest.readyState === XMLHttpRequest.DONE){
        if(httpRequest.status === 200){
            console.log(JSON.parse(httpRequest.response));
            resultData = JSON.parse(httpRequest.response);
            let data = [];
            if(resultData.length > 9){
                data = resultData.slice(0,10);
            } else {
                data = resultData;
            }
            data.forEach(item => {
                let aDiv = document.createElement('a');
                aDiv.href = item.link;
                aDiv.innerHTML = item.title;
                listDiv.appendChild(aDiv);
            });
        } else {
            console.log('error');
        }
    }
}

httpRequest.open('GET',"http://127.0.0.1:7001");
httpRequest.send();
