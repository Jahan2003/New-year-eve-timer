const daysEl=document.getElementById('ds');
const hoursEl=document.getElementById('hrs');
const minutesEl=document.getElementById('mins');
const secondsEl=document.getElementById('sec');


const newYear="1 Jan 2023";

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    
    const totalSeconds = (newYearDate - currentDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds%60);
    
    daysEl.innerHTML=days;
    hoursEl.innerHTML=format(hours);
    minutesEl.innerHTML=format(minutes);
    secondsEl.innerHTML=format(seconds);
}
function format(time){
  return time< 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown,1000);