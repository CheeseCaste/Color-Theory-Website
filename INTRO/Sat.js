//Scroll Bar Progress//
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('myprogress').style.width = scrolled + "%";
}

//Saturation comparison//

const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');

color1.addEventListener('input', function() {
    document.getElementById('resultBox').style.backgroundColor = color1.value;
});

color2.addEventListener('input', function(){
    document.getElementById('resultBox2').style.backgroundColor = color2.value;
})

//Hue, value//

function colorChanged(h) {

    let s = 100;
    let l = 77;

    document.getElementById('deg').innerText = h;

    for (let color of document.getElementsByClassName('Val')) {

        color.style.backgroundColor = `hsl(${h}deg ${s}% ${l}%)`;
        color.innerText = HSLToRGB(h, s, l);

        l -= 7;
    }
}

function HSLToRGB(h, s, l) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }

    return "#" + 
      Math.floor((r + m) * 255).toString(16).padStart(2, '0') + 
      Math.floor((g + m) * 255).toString(16).padStart(2, '0') + 
      Math.floor((b + m) * 255).toString(16).padStart(2, '0');
}

colorChanged(89);


