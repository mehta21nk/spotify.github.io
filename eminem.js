console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('english/Closer.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let english = [
    {songName: "Closer", filePath: "english/Closer.mp3", coverPath: "covers/1.jpg"},
    {songName: "DHARIA-Sugar & Brownies", filePath: "english/DHARIA-Sugar & Brownies.mp3", coverPath: "covers/2.jpg"},
    {songName: "INNA-Nirvana", filePath: "english/INNA-Nirvana.mp3", coverPath: "covers/3.jpg"},
    {songName: "Jalebi Baby", filePath: "english/Jalebi Baby.mp3", coverPath: "covers/4.jpg"},
    {songName: "Let Me Down Slowly x Main Dhoondne Ko Zamaane Mein", filePath: "english/Let Me Down Slowly x Main Dhoondne Ko Zamaane Mein.mp3", coverPath: "covers/5.jpg"},
    {songName: "Let me love you", filePath: "english/Let Me Love You.mp3", coverPath: "covers/6.jpg"},
    {songName: "Safari", filePath: "english/Safari.mp3", coverPath: "covers/7.jpg"}
    // {songName: "Matlabi - Rohit Rawat", filePath: "english/8.mp3", coverPath: "covers/8.jpg"},
    // {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "english/2.mp3", coverPath: "covers/9.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = english[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = english[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    console.log("YAha")
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        console.log(english[songIndex+1]);
        audioElement.src = `english/${english[songIndex].songName}.mp3`;
        masterSongName.innerText = english[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `english/${songIndex+1}.mp3`;
    masterSongName.innerText = english[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `english/${songIndex+1}.mp3`;
    masterSongName.innerText = english[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})