function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //inclusive
}

function greetingGenerator(){
  var x = getRandomInt(0,4);
  var names = ["tasty jelly bean", "salty donut", "poppin popcorn kernel", "spicy salmon roll", "gooey butter cake"]
  var greeting = "Hello, you " + names[x] + "!";
  return greeting;
}

document.getElementById("greeting").innerHTML = greetingGenerator();
