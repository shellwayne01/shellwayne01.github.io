//Greeting
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //inclusive
}

function greetingGenerator(){
  var x = getRandomInt(0,4);
  var names = ["tasty jelly bean", "salty donut", "poppin popcorn kernel", "spicy salmon roll", "gooey butter cake"]
  // var greeting = "Hello, you " + names[x] + "!";
  var chosen = names[x]
  var txt = '';
  var wait = 0;

  tick = function() {
    txt = chosen.substring(0, txt.length + 1);
    document.getElementById("typewriter").innerHTML = txt;
    if (txt.length < chosen.length){
      doSetTimesout();
    }
  }

  function doSetTimesout(){
    setTimeout(function() {tick(); }, 150 );
  }
  // document.getElementById("greeting").innerHTML = txt;
  // return greeting;
  doSetTimesout();
}

//Galleries
var gallery = {
  "otbtGallery": ["images/landing1.png","images/landing2.png","images/landing3.png","images/landing4.png","images/home1.png","images/home3.png","images/home4.png","images/fav1.png", "images/fav2.png","images/explore1.png","images/explore2.png"],
  "eeGallery":["images/e0.png","images/e1.png", "images/e2.png","images/e3.png"]
}

var counter = {
  "otbt": 0,
  "ee": 0
}

function next(id){
  if (id == "ee"){
    // console.log(gallery.eeGallery.length);
    // console.log(gallery.eeGallery[(counter.ee +1) % gallery.eeGallery.length]);
    counter.ee = (counter.ee+1) % (gallery.eeGallery.length);
    document.getElementById(id).src = gallery.eeGallery[counter.ee];
  }

  if (id == "otbt"){
    counter.otbt = (counter.otbt+1) % (gallery.otbtGallery.length);
    document.getElementById(id).src = gallery.otbtGallery[counter.otbt];
  }
  // console.log(counter);
}

function prev(id){
  if (id == "ee"){
    if (counter.ee == 0){
      counter.ee = gallery.eeGallery.length-1;
    }else{
      counter.ee = (counter.ee-1) % (gallery.eeGallery.length);
    }
    document.getElementById(id).src = gallery.eeGallery[counter.ee];
  }

  if (id == "otbt"){
    if (counter.otbt == 0){
      counter.otbt = gallery.otbtGallery.length-1
    }else{
      counter.otbt = (counter.otbt-1)% (gallery.otbtGallery.length);
    }
    document.getElementById(id).src = gallery.otbtGallery[counter.otbt];
  }
}
