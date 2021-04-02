
var main = document.querySelector("main")

function getData(){
var json = 'https://api.thecatapi.com/v1/images/search?breed_id=';
    var request = new XMLHttpRequest();
    request.open('get', json);
    request.responseType = 'json';
    request.send();

    request.addEventListener("load", function () {
      img.src = request.response[0].url;
      main.appendChild(img)

    var abys = document.getElementById('abys')  
      abys.onclick = function () {
        json = json + 'abys'
        console.log(json)
      }
      
    var aege = document.getElementById('aege')  
      aege.onclick = function () {
        json = json + 'aege'
        console.log(json)
      }
      
    var abob = document.getElementById('abob')  
      abob.onclick = function () {
        json = json + 'abob'
        console.log(json)
      }
      
    var acur = document.getElementById('acur')  
      acur.onclick = function () {
        json = json + 'acur'
        console.log(json)
      }
      
    var asho = document.getElementById('asho')  
      asho.onclick = function () {
        json = json + 'asho'
        console.log(json)
    }

    })
}



var img = document.createElement("img")
main.appendChild(img)

var myButton = document.querySelector("button");
myButton.addEventListener("click", function () {
  getData();
})

    
