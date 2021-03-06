// Set the date we're counting down to
var countDownDate = new Date('Aug 30, 2019 18:00:00').getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById('countdown').innerHTML = `<div id="days" class="countdown-item">${days}d</div>
  <div id="hours" class="countdown-item">${hours}h</div>
  <div id="minutes" class="countdown-item">${minutes}m</div>
  <div id="seconds" class="countdown-item">${seconds}s</div>`;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown').innerHTML = 'Tobbedansen 2019 is van start gegaan!';
  }
});
