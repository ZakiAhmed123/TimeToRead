$(window).ready(function(){
  var WordCount = document.querySelector("body").innerHTML.split(" ").length;
  var wpm = 230;
  var ttr = ((WordCount / wpm) * 60).toFixed();
// less than 1 minute so put to seconds
 $("button#time").on("click", function(){
   $(".time-to-read-view").hide().fadeIn(1500).append("Approx Read Time is " + ttr + " seconds");
});
})
