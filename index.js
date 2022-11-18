var m=document.getElementById("mymodel");
var btn=document.getElementById("mbtn");
var cls=document.getElementsByClassName("close")[0];
btn.onclick=function() {
    m.style.display="block";
    
}
cls.onclick=function(){
    m.style.display="none";
    
}
window.onclick=function(event){
    if(event.target==m)
    {
        m.style.display="none";
    }

}

