let [seconds,mintunes,hours]=[0,0,0];
let display=document.getElementById("display-time")
let timer=null
function stopwatch(){
    seconds++;
    if(seconds==60){
    seconds=0;
    mintunes++;
    if(mintunes==60){
        mintunes=0
        hours++;
   
    }
    }
    let h= hours<10 ?"0"+hours:hours
    let m= mintunes<10 ?"0"+mintunes:mintunes
    let s= seconds<10 ?"0"+seconds:seconds

    display.innerHTML=h+":"+m+":"+s;
}
function watchstart(){
  if(timer!==null){
    clearInterval(timer)
  }
  timer= setInterval(stopwatch,1000)
}
function watchstop(){
    clearInterval(timer)
}
function watchreset(){
    clearInterval(timer)
     [seconds,mintunes,hours]=[0,0,0];
    display.innerHTML="00:00:00";
}