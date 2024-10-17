const rp = document.querySelector('input[type="color"]');
const resultBox1 = document.getElementById('resultBox1');
const resultBox2 = document.getElementById('resultBox2');
const resultBox3 = document.getElementById('resultBox3');
const resultBox4 = document.getElementById('resultBox4');


colors.addEventListener('input', function() {
    const color = tinycolor(rp.value).tetrad();
    color.map(function(t) { return t.toHexString(); }); 
    resultBox1.style.backgroundColor = rp.value;

    if(color[1]){
        document.getElementById('resultBox2').style.backgroundColor = color[1];
    }
    if(color[2]){
        document.getElementById('resultBox3').style.backgroundColor = color[2];
    }
    if(color[3]){
        document.getElementById('resultBox4').style.backgroundColor = color[3];
    }
});





