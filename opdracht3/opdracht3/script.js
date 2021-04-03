
var main = document.querySelector("main")
var jsonBreed = 'https://api.thecatapi.com/v1/images/search?breed_id=';

function getData() {
  var json = 'https://api.thecatapi.com/v1/images/search?breed_id=';
  
  var abys = document.getElementById('abys')
  abys.addEventListener("click", function () {
    jsonBreed = json + 'abys'
    console.log(jsonBreed)
  })

  var aege = document.getElementById('aege')
  aege.addEventListener("click", function () {
    jsonBreed = json + 'aege'
    console.log(jsonBreed)
  })

  var abob = document.getElementById('abob')
  abob.addEventListener("click", function () {
    jsonBreed = json + 'abob'
    console.log(jsonBreed)
  })

  var acur = document.getElementById('acur')
  acur.addEventListener("click", function () {
    jsonBreed = json + 'acur'
    console.log(jsonBreed)
  })

  var asho = document.getElementById('asho')
  asho.addEventListener("click", function () {
    jsonBreed = json + 'asho'
    console.log(jsonBreed)
  })

  var request = new XMLHttpRequest();
  request.open('get', jsonBreed);
  request.responseType = 'json';
  request.send();

  request.addEventListener("load", function () {
    img.src = request.response[0].url;
    main.appendChild(img)

  })
}

var img = document.createElement("img")
main.appendChild(img)

var myButton = document.querySelector("button");
var icon = document.getElementById("icon");
 myButton.addEventListener("click", function () {
   getData();
   icon.style.display = 'none';
 })
