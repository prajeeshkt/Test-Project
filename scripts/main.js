var myImage = document.querySelector("img");
myImage.onclick=function(){
  var mysrc = myImage.getAttribute("src");
  if (mysrc=="images/mozilla.jpeg"){
      myImage.setAttribute('src','images/mozilla2.jpeg');
  }else{
      myImage.setAttribute('src','images/mozilla.jpeg');
  }
};



var mybutton = document.querySelector("button");
var myheading = document.querySelector('h1');
function setUserName(){
  var myname = prompt("Enter Your Name");
  localStorage.setItem('name',myname);
  myheading.textContent = 'Mozilla is cool' + myname;
};

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myheading.textContent = 'Mozilla is cool, ' + storedName;
};

mybutton.onclick = function(){
    setUserName();
};
