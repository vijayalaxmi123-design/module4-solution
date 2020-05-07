var byeSpeaker = {};
(function (window) {
  
  var speakWord = "Good Bye ";
  byeSpeaker.speak = function (name) {
  	byeSpeaker.name = name
    console.log(speakWord + byeSpeaker.name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
