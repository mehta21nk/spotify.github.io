console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('shreya/Pal.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let shreya = [
    {songName: "Chikni Chameli", filePath: "shreya/Chikni Chameli.mp3", coverPath: "covers/1.jpg"},
    {songName: "CHORI CHORI CHUPKE CHUPKE", filePath: "shreya/CHORI CHORI CHUPKE CHUPKE.mp3", coverPath: "covers/2.jpg"},
    {songName: "DIL LEKE", filePath: "shreya/DIL LEKE.mp3", coverPath: "covers/8.jpg"},
    {songName: "Dhadak Title Track", filePath: "shreya/Dhadak Title Track.mp3", coverPath: "covers/3.jpg"},
    {songName: "Hasi", filePath: "shreya/Hasi.mp3", coverPath: "covers/4.jpg"},
    {songName: "HUM TUMKO NIGAHON MEIN", filePath: "shreya/HUM TUMKO NIGAHON MEIN.mp3", coverPath: "covers/5.jpg"},
    {songName: "Jeene Laga Hoon", filePath: "shreya/Jeene Laga Hoon.mp3", coverPath: "covers/6.jpg"},
    {songName: "Pal", filePath: "shreya/Pal.mp3", coverPath: "covers/7.jpg"},
    {songName: "Param Sundari", filePath: "shreya/Param Sundari.mp3", coverPath: "covers/8.jpg"},
    {songName: "Slow Motion", filePath: "shreya/Slow Motion.mp3", coverPath: "covers/9.jpg"}
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = shreya[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = shreya[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    // console.log("YAha")
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
    // console.log(audioElement.currentTime/audioElement.duration);
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
        console.log(shreya[songIndex+1]);
        audioElement.src = `shreya/${shreya[songIndex].songName}.mp3`;
        masterSongName.innerText = shreya[songIndex].songName;
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
    audioElement.src = `shreya/${songIndex+1}.mp3`;
    masterSongName.innerText = shreya[songIndex].songName;
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
    audioElement.src = `shreya/${songIndex+1}.mp3`;
    masterSongName.innerText = shreya[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})