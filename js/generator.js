//Greeting generator
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
