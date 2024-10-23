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

  setInputFilter(document.getElementById("intLimitTextBox7"), function(value) {
    return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 60);
  }, "Must be between 1 and 60");screen

  setInputFilter(document.getElementById("intLimitTextBox8"), function(value) {
    return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 60);
  }, "Must be between 1 and 60");screen

  setInputFilter(document.getElementById("intLimitTextBox9"), function(value) {
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
  const ch9 = document.getElementById('che9'); 

  ch.style.display = "none";
  ch1.style.display = "none";
  ch2.style.display = "none";
  ch3.style.display = "none";
  ch4.style.display = "none";
  ch5.style.display = "none";
  ch6.style.display = "none";
  ch7.style.display = "none";
  ch8.style.display = "none";
  ch9.style.display = "none";
};

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
    const c10 = document.getElementById('intLimitTextBox9').value;
    const ch = document.getElementById('che');
    const ch1 = document.getElementById('che1'); 
    const ch2 = document.getElementById('che2'); 
    const ch3 = document.getElementById('che3'); 
    const ch4 = document.getElementById('che4'); 
    const ch5 = document.getElementById('che5'); 
    const ch6 = document.getElementById('che6'); 
    const ch7 = document.getElementById('che7'); 
    const ch8 = document.getElementById('che8'); 
    const ch9 = document.getElementById('che9'); 

    if (c1==''||c2==''||c3==''||c4==''||c5==''||c6==''||c7==''||c8==''||c9==''||c10=='') {
        alert("All number must be filled out");
    }
    else {
        if(c1 == "58"){
            ch.style.display = "inline-block";
            ch.style.backgroundColor = "green";
        }

        else{
            ch.style.display = "inline-block";
        }

        if(c2 == "18"){
            ch1.style.display = "inline-block";
            ch1.style.backgroundColor = "green";
        }

        else{
            ch1.style.display = "inline-block";
        }
    
}
};

