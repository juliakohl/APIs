var quote;

var request = new XMLHttpRequest()

request.open('GET', 'https://type.fit/api/quotes', true)
request.onload = function(){
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {

        var max = data.length;
        var randomIndex = getRandomNumber(0, max);

        quote = data[randomIndex].text;
        console.log(quote);
        container.innerHTML = quote;
    }else{
        console.log("error");
    }
}

request.send();

const app = document.getElementById('root');
const container = document.createElement('div');

app.appendChild(container);

function getRandomNumber(min, max){
    var randomNumber = Math.ceil(Math.random() * (max - min)) + min;
    return randomNumber;
}


