var vid = document.getElementById("vid");
var fullScreen = document.getElementById("full-screen");
var mute = document.getElementById("mute");
var playBtn = document.getElementById("play");
var pauseBtn = document.getElementById("pause");
var seekForward = document.getElementById("forwards");
var seekBackwards = document.getElementById("backwards");
var seekBtn = document.getElementById('seek');
var fullTimetag = document.getElementById("fulltime");
var progressTimetag = document.getElementById("timeprogress");
var vol = document.getElementById("volume");
var speed = document.getElementById("speed");


// Event listener for the play/pause button
playBtn.addEventListener("click", function() {
    if (vid.paused == true) {
      vid.play();
  
    } 
  });
pauseBtn.addEventListener("click", function() {
    vid.pause();
}); 

//seeking 
seekForward.addEventListener("click", function () {
    vid.currentTime +=10;
})
seekBackwards.addEventListener("click", function () {
    vid.currentTime-=10;
})


mute.addEventListener("click", function (){
    if (vid.muted == false) {
        vid.muted = true;
    
        muteButton.innerHTML = "Unmute";
      } else {
        vid.muted = false;
        muteButton.innerHTML = "Mute";
      }
})
//implementing fullscreen 
fullScreen.addEventListener("click", function () {
    alert("clicked")
    if (vid.requestFullscreen) {
        vid.requestFullscreen();
      } else if (vid.mozRequestFullScreen) {
        vid.mozRequestFullScreen(); // 
      } else if (vid.webkitRequestFullscreen) {
        vid.webkitRequestFullscreen(); 
      }
})


//Change event for volume range
vol.addEventListener('change', function() {
    vid.volume = vol.value/100;
})

//updating progress
vid.addEventListener('timeupdate', updateProgress);
function updateProgress() {
    seek.value = Math.floor(vid.currentTime);
    progressTimetag.innerHTML= `${formatTime(Math.floor(vid.currentTime)).minutes}:${formatTime(Math.floor(vid.currentTime)).seconds}`
    fullTimetag.innerText = `${formatTime(Math.floor(vid.duration)).minutes}:${formatTime(Math.floor(vid.duration)).seconds}`;

}

// formating time
function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
  
    return {
      minutes: result.substr(3, 2),
      seconds: result.substr(6, 2),
    };
  };

//Change event for speed range
speed.addEventListener("change", function() {
    let sp =speed.value;
    console.log(sp);
    
    if(sp==0){
        vid.playbackRate = 0.25
    }else if(sp==1) {
     vid.playbackRate = 0.5;
    }else if(sp== 2){
        vid.playbackRate = 1;
    }else if(sp==3){
        vid.playbackRate=1.5;
    }else if(sp==4) {
        vid.playbackRate = 2;
    }
    })
    