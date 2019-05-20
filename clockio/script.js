let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
let evening = 18;

// Getting it to show the current time on the page
let showCurrentTime = () => {
    // display the string on the webpage
    let clock = document.getElementById("clock");

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    // Set hours
    if (hours >= noon) meridian = "PM";

    if (hours > noon) hours = hours - 12;

    // Set minutes
    if (minutes < 10) minutes = "0" + minutes;

    // Get seconds
    if (seconds < 10) seconds = "0" + seconds;

    // put together the string that displays the time
    let clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
}

// Getting the clock to increment on its own and change out messages and pictures.
let updateClock = () => {

    let time = new Date().getHours;
    let messageText;
    let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

    let timeEventJS = document.getElementById("timeEvent");
    let lolcatImageJS = document.getElementById("lolcatImage");

    if (time == partytime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's party!";
    } else if (time == wakeuptime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wake up!";
    } else if (time == lunchtime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";
    } else if (time == naptime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Sleep tight!";
    } else if (time < noon) {
        image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
        messageText = "Good morning!";
    } else if (time >= 18) {
        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good evening!";
    } else {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good afternoon!";
    }

    console.log(messageText);
    timeEvent.innerText = messageText;
    lolcatImage.src = image;

    showCurrentTime();
};

updateClock();

// Getting the clock to increment once a second
let oneSecond = 1000;
setInterval( updateClock, oneSecond );

// Getting the Party Time Button to work
let partyButton = document.getElementById("partyTimeButton");

let partyEvent = () => {

    if (partytime < 0) {

        partytime = new Date().getHours;
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.color = "#0A8DAB";
    } else {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

// Activate Wake-Up selector
let wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

let wakeUpEvent = () => {

    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activates Lunch selector
let lunchTimeSelector = document.getElementById("lunchTimeSelector");

let lunchEvent = () => {

    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates Nap-Time selector
let napTimeSelector = document.getElementById("napTimeSelector");

let napEvent = () => {

    naptime = napTimeSelector.value;
}

napTimeSelector.addEventListener("change", napEvent);
