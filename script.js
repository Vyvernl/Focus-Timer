var isEnabled = false;
var toggle = document.getElementById("toggle");
var Aboutme = document.getElementById("titlefunction")
var ElapsedTime = document.getElementById('ElapsedTime')
var Clearbtn = document.getElementById('Clear-btn')
var Infobtn = document.getElementById('infobtn')
let ElapsedTimeRunning = 0;


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('youtube.com')) {
        chrome.tabs.remove(tabId)
        NotifyUser();
    }
});

           
console.log(toggle);
var enable = function(){
    console.log('Works');
    if (isEnabled == false) {
        isEnabled = true;
    }  
    else if (isEnabled == true) {
        isEnabled = false;
        
    }
    console.log(isEnabled);
};

var redirecttoaboutme = function() {
    window.open("about.html")
}


function UpdateElapsedTime() {
    if (isEnabled == true ) {
        ElapsedTimeRunning++;

        const Hours = Math.floor(ElapsedTimeRunning / 3600);
        const TimeMinutes = Math.floor(ElapsedTimeRunning / 60);
        const Seconds = ElapsedTimeRunning % 60;

        const Time = `${String(Hours).padStart(2, '0')}:${String(TimeMinutes).padStart(2, '0')}:${String(Seconds).padStart(2, '0')}`;
        document.getElementById('ElapsedTime').innerText = `${Time}`;
    } 

}

setInterval(UpdateElapsedTime, 1000);

toggle.addEventListener("click", enable)
Infobtn.addEventListener("click", redirecttoaboutme)

function ClearTime() {
    ElapsedTimeRunning = 0;
    document.getElementById('EapsedTime').innerText = "00:00:00";   
}

Clearbtn.addEventListener("click", ClearTime);

