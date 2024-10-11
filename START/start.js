const chattext = document.getElementById('chattext');
const Who = document.getElementById('Who');
const Start = document.getElementById('Start');
const Info = document.getElementById('Info');
const Last = document.getElementById('Last');
let textCount = 0;

chattext.addEventListener('click', function (event){
     if(textCount == 0 & window.getComputedStyle(Who).display === 'none'){
          Who.style.display = 'block';
          Start.style.display = 'none';
          textCount++;
     }
     else if(textCount == 1 & window.getComputedStyle(Info).display === 'none'){
          Info.style.display = 'block';
          Who.style.display = 'none';
          textCount++;
     }
     else if(textCount == 2 & window.getComputedStyle(Last).display === 'none'){
          Last.style.display = 'block';
          Info.style.display = 'none';
          textCount++;
     }
});



    
