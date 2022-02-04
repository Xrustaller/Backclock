window.onload = function() {
  setInterval(function() {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    //var seconds = new Date().getSeconds();
    document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;
    document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;
    //document.getElementById("seconds").innerHTML = (seconds < 10 ? '0' : '') + seconds;
  }, 1000);
}