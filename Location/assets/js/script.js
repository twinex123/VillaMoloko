var navTrigger = document.getElementById('nav-trigger');
var nav = document.getElementById('nav');
var header = document.getElementById('header');
var heading = document.getElementById('heading');
var labels = document.getElementsByClassName('nav-label');

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var fontSize = windowHeight*0.1;
var headingSize = windowWidth*0.1;

navTrigger.addEventListener('click', navToggle);
window.addEventListener('resize', resize);

function resize() {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  fontSize = windowHeight*0.1;
  headingSize = windowWidth*0.1;
  if(headingSize > windowHeight*0.3) headingSize = windowHeight*0.3; 
  
  for(var i = 0; i < labels.length; i++) {
    labels[i].style.fontSize = fontSize+'px';
    labels[i].style.height = fontSize+'px';
    labels[i].style.marginTop = '-'+fontSize*0.6+'px';
  }

  header.style.height = windowHeight+'px';
  heading.style.fontSize = headingSize+'px';
  heading.style.height = headingSize+'px';
  heading.style.marginTop = '-'+headingSize*0.6+'px';
  
}

function navToggle(e) {
  var closed = (navTrigger.className.indexOf('close') > 0); 
  if(closed) {
    navTrigger.className = 'nav-trigger open';
    nav.className = 'out';
  } else {
    navTrigger.className = 'nav-trigger close';
    nav.className = 'in';
  }
}

window.onload = resize;

const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;
    


if(width >= 1000 ){
    //pass
}else{
    document.querySelector("iframe").setAttribute("width", "350px");
    document.getElementById("desc").innerText = "la villa";
    document.getElementById("photo").innerText = "Photos";
}
