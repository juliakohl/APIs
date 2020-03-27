// https://complimentr.com/api

var compliment;

var request = new XMLHttpRequest()

request.open('GET', 'https://complimentr.com/api', true)
request.onload = function(){
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        compliment = data.compliment;
        console.log(compliment);
        container.innerHTML = compliment;
    }else{
        console.log("error");
    }
}

request.send();

const app = document.getElementById('root');
const container = document.createElement('div');

app.appendChild(container);
