//Scroll Bar Progress//
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('myprogress').style.width = scrolled + "%";
}

const colorInput = document.querySelector('input[type="color"]');
const textInput = document.getElementById('color-input');
const resultBox1 =document.getElementById('resultBox1');
const resultBox2 = document.getElementById('resultBox2');

colorInput.addEventListener('input', function() {
  const color = colorInput.value;
  const complementColor = calculateComplementColor(color);
  resultBox1.style.backgroundColor = color;
  resultBox2.style.backgroundColor = complementColor;

  if (isLightColor(color)) {
    setH1TextColor('white');
  } else {
    setH1TextColor('black');
  }
});

textInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    const color = textInput.value;
    resultBox1.style.backgroundColor = color;
    resultBox2.style.backgroundColor = calculateComplementColor(color);

    if (isLightColor(color)) {
      setH1TextColor('white');
    } else {
      setH1TextColor('black');
    }
  }
});

function calculateComplementColor(color) {
  // Convert color to RGB values
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate complement color
  const complementR = 255 - r;
  const complementG = 255 - g;
  const complementB = 255 - b;

  // Convert complement color back to hex string
  const complementHex = '#' + complementR.toString(16).padStart(2, '0') + complementG.toString(16).padStart(2, '0') + complementB.toString(16).padStart(2, '0');

  return complementHex;
}

function isLightColor(color) {
  // Convert color to RGB values
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  // Determine if color is light or dark
  if (luminance > 0.5) {
    return true;
  } else {
    return false;
  }
}
