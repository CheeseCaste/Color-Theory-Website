// const searchInput = document.querySelector("[data-search]")
// let words = document.getElementsByClassName("words")

// searchInput.addEventListener('input', (e) => {
//     const value = e.target.value
//     console.log(words)
// })



function search(){
    let Search = document.getElementById('Search').value.toUpperCase();
    let word = document.querySelectorAll('.words');
    let name = document.querySelectorAll('.name');
    

    for(var i = 0; i<=name.length; i ++){
        let a=word[i].getElementsByClassName('name')[0];
        let value=a.innerHTML || a.innerText || a.textContent;

        if(value.toUpperCase().indexOf(Search) > -1){
            word[i].style.display="";
        }
        else{
            word[i].style.display="none";
        }
    }
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
     } else {
     mybutton.style.display = "none";
     }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
