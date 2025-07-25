const bar = document.getElementById('bar');
const nav = document.getElementById('nav');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}


var mainImg = document.getElementById("main-img");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
    mainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    mainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    mainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    mainImg.src = smallimg[3].src;
}

