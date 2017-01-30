var $h2 = $('h2');
$h2.on('click', function () {
    alert("You should be directed to another page...");
});

var $h1blink = $('header h1');
setInterval(function() {
   $h1blink.toggleClass('blinking');
}, 1000);