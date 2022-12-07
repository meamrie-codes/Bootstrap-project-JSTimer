let button = document.querySelector("button")

function TimerFunction(){
    console.log("Timer Has Begun");
    
    let endOfTimer = Date.parse("Dec 7, 2022, 21:00:00"); //Hard coded countdown end point
    
    let nowTime = new Date(); //Getting a copy of the entire date and time from user
    
    let TimeDifference = endOfTimer - nowTime; //Future End time minus Now Time
    
    console.log(TimeDifference); //Test
    
    let days = Math.floor(TimeDifference/ (1000*60*60*24))
    let hours = Math.floor( TimeDifference/ (1000 * 60 * 60))
    let minutes = Math.floor(TimeDifference/ (1000 * 60))
    let seconds = Math.floor(TimeDifference/1000)
    console.log(seconds + "\n", minutes + "\n", hours + "\n", days + "\n");
    console.log(days + 'd', hours + 'h', minutes + 'min', seconds + 'sec');
    
    let dayTime = days;
    let hourTime = hours - days * 24;
    let minuteTime = minutes - hours * 60;
    let secondsTime = seconds - minutes * 60;
    
    console.log(dayTime, hourTime,minuteTime,secondsTime)
    
    document.querySelector(".timer") .innerHTML =
        '<div>' + dayTime + '</div>' +
        '<div>' + hourTime + '</div>' +
        '<div>' + minuteTime + '</div>' +
        '<div>' + secondsTime + '</div>' ;
}


setInterval(
'TimerFunction()'//code to be triggerd after delay time is up
    , 1000) //delay

button.addEventListener("click", () => {
    TimerFunction();
})