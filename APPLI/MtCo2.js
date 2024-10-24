function setInputFilter(textbox, inputFilter, errMsg) {
  [ "input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout" ].forEach(function(event) {
    textbox.addEventListener(event, function(e) {
      if (inputFilter(this.value)) {
        // Accepted value.
        if ([ "keydown", "mousedown", "focusout" ].indexOf(e.type) >= 1) {
          this.classList.remove("input-error");
          this.setCustomValidity("");
        }
        
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      }
      else if (this.hasOwnProperty("oldValue")) {
        // Rejected value: restore the previous one.
        this.classList.add("input-error");
        this.setCustomValidity(errMsg);
        this.reportValidity();
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
      else {
        // Rejected value: nothing to restore.
        this.value = "";
      }
    });
  });
}

setInputFilter(document.getElementById("intLimitTextBox"), function(value) {
  return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 60);
}, "Must be between 1 and 60");screen

setInputFilter(document.getElementById("intLimitTextBox1"), function(value) {
  return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 60);
}, "Must be between 1 and 60");screen

setInputFilter(document.getElementById("intLimitTextBox2"), function(value) {
  return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 60);
}, "Must be between 1 and 60");screen

setInputFilter(document.getElementById("intLimitTextBox3"), function(value) {
  return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 60);
}, "Must be between 1 and 60");screen
setInputFilter(document.getElementById("intLimitTextBox4"), function(value) {
  return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 60);
}, "Must be between 1 and 60");screen

setInputFilter(document.getElementById("intLimitTextBox5"), function(value) {
  return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 60);
}, "Must be between 1 and 60");screen

setInputFilter(document.getElementById("intLimitTextBox6"), function(value) {
  return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 60);
}, "Must be between 1 and 60");screen

  function resetAll() {
    const ch = document.getElementById('che');
    const ch1 = document.getElementById('che1'); 
    const ch2 = document.getElementById('che2'); 
    const ch3 = document.getElementById('che3'); 
    const ch4 = document.getElementById('che4'); 
    const ch5 = document.getElementById('che5'); 
    const ch6 = document.getElementById('che6'); 
    const ch7 = document.getElementById('che7'); 
    const ch8 = document.getElementById('che8'); 
  
    ch.style.backgroundColor = "red";
    ch1.style.backgroundColor = "red";
    ch2.style.backgroundColor = "red";
    ch3.style.backgroundColor = "red";
    ch4.style.backgroundColor = "red";
    ch5.style.backgroundColor = "red";
    ch6.style.backgroundColor = "red";
    ch7.style.backgroundColor = "red";
    ch8.style.backgroundColor = "red";
  
    ch.style.display = "none";
    ch1.style.display = "none";
    ch2.style.display = "none";
    ch3.style.display = "none";
    ch4.style.display = "none";
    ch5.style.display = "none";
    ch6.style.display = "none";
    ch7.style.display = "none";
    ch8.style.display = "none";
  
    const Chn1 = document.getElementById('Chn1');
    const Chn2 = document.getElementById('Chn2');
    const Chn3 = document.getElementById('Chn3');
    
    Chn1.style.display = "none";
    Chn2.style.display = "none";
    Chn3.style.display = "none";
  };
  
  let g1 = 0;
  let g2 = 0;
  let g3 = 0;
  let g4 = 0;
  let g5 = 0;
  let g6 = 0;
  let g7 = 0;
  let g8 = 0;
  let g9 = 0;
  let g = 0;
  
  function checkAnswer(){
      const c1 = document.getElementById('intLimitTextBox').value;
      const c2 = document.getElementById('intLimitTextBox1').value;
      const c3 = document.getElementById('intLimitTextBox2').value;
      const c4 = document.getElementById('intLimitTextBox3').value;
      const c5 = document.getElementById('intLimitTextBox4').value;
      const c6 = document.getElementById('intLimitTextBox5').value;
      const c7 = document.getElementById('intLimitTextBox6').value;
      const c8 = document.getElementById('intLimitTextBox7').value;
      const c9 = document.getElementById('intLimitTextBox8').value;
      
      const ch = document.getElementById('che');
      const ch1 = document.getElementById('che1'); 
      const ch2 = document.getElementById('che2'); 
      const ch3 = document.getElementById('che3'); 
      const ch4 = document.getElementById('che4'); 
      const ch5 = document.getElementById('che5'); 
      const ch6 = document.getElementById('che6');
      const ch7 = document.getElementById('che7'); 
      const ch8 = document.getElementById('che8'); 
  
      if (c1==''||c2==''||c3==''||c4==''||c5==''||c6==''||c7==''||c8==''||c9=='') {
          alert("All number must be filled out");
      }
      else {
        let cc1 = c1;
        let cc2 = c2;
        let cc3 = c3;
        let cc4 = c4;
        let cc5 = c5;
        let cc6 = c6;
        let cc7 = c7;
        let cc8 = c8;
        let cc9 = c9;
  
          if(cc1 == 20){
              ch.style.display = "inline-block";
              ch.style.backgroundColor = "green";
              g1 = g1+1;
              g++;
          }
  
          else{
              ch.style.display = "inline-block";
          }
  
          if(cc2 == 13){
              ch1.style.display = "inline-block";
              ch1.style.backgroundColor = "green";
              g2 = g2+1;
              g++;
          }
  
          else{
              ch1.style.display = "inline-block";
          }
  
          if(cc3 == 20){
            ch2.style.display = "inline-block";
            ch2.style.backgroundColor = "green";
            g3 = g3+1;
            g++;
        }
  
          else{
              ch2.style.display = "inline-block";
          }
  
          if(cc4 == 20){
            ch3.style.display = "inline-block";
            ch3.style.backgroundColor = "green";
            g4 = g4+1;
            g++;
        }
  
          else{
              ch3.style.display = "inline-block";
          }
  
          if(cc5 == 20){
            ch4.style.display = "inline-block";
            ch4.style.backgroundColor = "green";
            g5 = g5+1;
            g++;
        }
  
          else{
              ch4.style.display = "inline-block";
          }
  
          if(cc6 == 20){
            ch5.style.display = "inline-block";
            ch5.style.backgroundColor = "green";
            g6 = g6+1;
            g++;
        }
  
          else{
            ch5.style.display = "inline-block";
          }
  
          if(cc7 == 27){
            ch6.style.display = "inline-block";
            ch6.style.backgroundColor = "green";
            g7 = g7+1;
            g++;
        }
  
          else{
              ch6.style.display = "inline-block";
          }
          if(cc8 == 51){
            ch7.style.display = "inline-block";
            ch7.style.backgroundColor = "green";
            g8 = g8+1;
            g++;
        }
  
          else{
              ch7.style.display = "inline-block";

          }
          if(cc9 == 20){
            ch8.style.display = "inline-block";
            ch8.style.backgroundColor = "green";
            g9 = g9+1;
            g++;
        }
  
          else{
              ch8.style.display = "inline-block";
          }
  }
  
    if(g1 == 1 && g2 == 1 && g3 == 1 && g4 == 1 && g5 == 1 && g6 == 1 && g7 == 1 && g8 == 1 && g9 == 1){
      const Chn1 = document.getElementById('Chn1');
  
      Chn1.style.display = 'inline-block';
      confet();
      g=0;
      g1--;
      g2--;
      g3--;
      g4--;
      g5--;
      g6--;
      g7--;
      g8--;
      g9--;
  }
  
    else if((g>3)&&(g<9)){
      const Chn2 = document.getElementById('Chn2');
  
      Chn2.style.display = 'inline-block';
      g=0;
      g1--;
      g2--;
      g3--;
      g4--;
      g5--;
      g6--;
      g7--;
      g8--;
      g9--;
    }
  
    else if(g<=3){
      const Chn3 = document.getElementById('Chn3');
  
      Chn3.style.display = 'inline-block';
      g=0;
      g1--;
      g2--;
      g3--;
      g4--;
      g5--;
      g6--;
      g7--;
      g8--;
      g9--;
    }
  
    console.log(g1, g2, g3, g4, g5, g6, g7, g8, g9);
  
  };
  
  const canvas = document.querySelector('#confetti');
  
  const jsConfetti = new JSConfetti();
  
  function confet(){
    jsConfetti.addConfetti();
  }
  
  const btn = document.getElementById('btn');
  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');
  let m = 0;
  
  btn.addEventListener('click', function(){
    m++
    if(m==1){
      img1.style.display = "none";
      img2.style.display = "inline-block";
    }
    if(m==2){
      img1.style.display = "inline-block";
      img2.style.display = "none";
      m=0;
    }
  });

