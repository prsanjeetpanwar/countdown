const day=document.getElementById("days");
const hour=document.getElementById("hours");
const minuite=document.getElementById("minuite");
const second=document.getElementById("second");










const holi='10  November 2023';
function countdown(){
   const newYearDate=new Date(holi);
    const currentdate=new Date();
    const totalssecond= (newYearDate-currentdate)/1000;
    

    const days=Math.floor(totalssecond/3600/24)

    const hours=Math.floor(totalssecond/3600)%24;

    const minutes=Math.floor(totalssecond/60)%60;

    const seconds=Math.floor(totalssecond)%60;





    // console.log(days,hours,minutes,seconds);

    day.innerHTML=days;

    hour.innerHTML=formettime(hours);
    minuite.innerHTML=formettime(minutes);
    second.innerHTML=formettime(seconds);

}

function formettime(time){
    return time<10 ?(`0 ${time}`):time;
}
countdown()
setInterval(countdown,1000)
