
// Initialise vars
let songIndex=0;
let audioElement = new Audio('2.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs
=[
    {songName: "1.mp3" , filePath: "song/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "1.mp3" , filePath: "song/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "1.mp3" , filePath: "song/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "1.mp3" , filePath: "song/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "1.mp3" , filePath: "song/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "1.mp3" , filePath: "song/1.mp3" , coverPath: "covers/1.jpg"}
]


// audioElement.play();

// Listen to events
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime==0)    
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        gif.style.opacity=0;
    }
})

myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})