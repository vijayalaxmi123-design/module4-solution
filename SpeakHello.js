var helloSpeaker = {};
(function (window) {
  
  var speakWord = "Hello ";
  helloSpeaker.speak = function (name) {
  	helloSpeaker.name = name;
    console.log(speakWord + helloSpeaker.name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
