var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/eevee.png') {
        myImage.setAttribute ('src','img/eevee-lying-down.jpg');
    } else {
        myImage.setAttribute ('src', 'img/eevee.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Here's some info, " + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Here's some info, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}