let hour="0";
let minute="0";
let second="0";

const hrs=document.querySelector("#hour");
const mins=document.querySelector("#min");
const secs=document.querySelector("#sec");

const startButton=document.querySelector("#start");
const stopButton=document.querySelector("#stop");
const resetButton=document.querySelector("#reset");
const list=document.querySelector("#list");

var currenthour;
var currentminute;
var currentsecond;

var intervalVariable; //just because of the clearinterval it is declared global every time setInterval will invoke it will store its value which keep

function setTime()
{
    second++;
    if(second==60)
    {
        
        second=0;
        minute++;
    }
    else if(minute==59)
    {
        hour++;
        minute=0;
    }
    else if(hour==24)
    {
        hour=0;
        minute=0;
        second=0;
    }
}

function startTheClock()
{
    setTime();
    currenthour=(hour<10)? "0"+hour+":" : hour+":";
    hrs.innerText=currenthour;

    currentminute=(minute<10)? "0"+minute+":" : minute+":"
    mins.innerText=currentminute;

    currentsecond=(second<10)? "0"+second : second
    secs.innerText=currentsecond;
}


startButton.addEventListener("click",()=>{
    intervalVariable=setInterval(startTheClock,1000);
});

stopButton.addEventListener("click",()=>{
    clearInterval(intervalVariable);
    //insert the current in the list element
    const listitem=document.createElement("li");
    list.append(listitem);
    listitem.innerText=currenthour+" "+currentminute+" "+currentsecond;
    console.log(currenthour+" "+currentminute+" "+currentsecond);

});

resetButton.addEventListener("click",()=>{
    clearInterval(intervalVariable);
    hour="0";
    minute="0";
    second="0";
    hrs.innerText="00:";
    mins.innerText="00:";
    secs.innerText="00";
    list.innerHTML=null;
})