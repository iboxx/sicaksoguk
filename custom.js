var yukari= document.getElementsByClassName("yukari_cik")[0];
//console.log(yukari);

window.addEventListener("scroll",function(){
const mesafe = this.window.scrollY;//yukarıdan olan uzaklığı verir.
//console.log(mesafe);
if(mesafe>1000){
    yukari.classList.add("goster");//goster class'ımızı ekledi.
} else{
    yukari.classList.remove("goster");//goster class'ımızı çıkardı.
}


});

yukari.addEventListener("click",function(){
    window.scrollTo(0,0);
});