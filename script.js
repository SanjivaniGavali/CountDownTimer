

const daysE1=document.getElementById('days1');
const hoursE1=document.getElementById('hours1');
const minsE1=document.getElementById('mins1');
const secondsE1=document.getElementById('seconds1');

 const newYears="1 jan 2024"
 function countDown(){
    const newYearsDate=new Date(newYears);
    const currentDate=new Date();
    const TotalSeconds=Math.floor((newYearsDate - currentDate)/1000);
    
    const days=Math.floor(TotalSeconds/(3600*24));
    
    const hours=Math.floor(TotalSeconds / 3600) % 24;
    const mins=Math.floor(TotalSeconds / 60) % 60;
    const seconds=TotalSeconds % 60;


    daysE1.innerHTML=days;
    hoursE1.innerHTML=hours;
    minsE1.innerHTML=mins;
    secondsE1.innerHTML=seconds;      
 }

 countDown();
 setInterval(countDown,1000)