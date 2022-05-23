m=0;
var y;
function start(){
    y=setInterval(run,100);
    function run(){
        if(m==1290){
            clearInterval(x);
            m=0;
        }else{
        m+=6;
        var x=document.getElementById("car");
        x.style.marginLeft=m+'px';
        }
    }
}
function stop(){
    clearInterval(y);
}