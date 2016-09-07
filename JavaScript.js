var menu = document.getElementById('menu');
var container3=document.getElementById('container3');
var close=document.getElementById("close")
var page=document.documentElement;

menu.addEventListener('click',function(){
    container3.style.display ='block';
});

close.addEventListener('click',function(){
    container3.style.display="none";
});

page.addEventListener('mousedown',function(){
    container3.style.display ='none';
});

container3.addEventListener('mousedown',function(e){
   e.stopPropagation();
});
