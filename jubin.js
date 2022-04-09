console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('jubin/Akh Lad Jaave.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let jubin = [
    {songName: "Akh Lad Jaave", filePath: "jubin/Akh Lad Jaave.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dhadkan", filePath: "jubin/Dhadkan.mp3", coverPath: "covers/2.jpg"},
    {songName: "Khushi Jab Bhi Teri", filePath: "jubin/Khushi Jab Bhi Teri.mp3", coverPath: "covers/3.jpg"},
    {songName: "Kinna Sona", filePath: "jubin/Kinna Sona.mp3", coverPath: "covers/4.jpg"},
    {songName: "KHAIRIYAT", filePath: "jubin/KHAIRIYAT.mp3", coverPath: "covers/5.jpg"},
    {songName: "Phir Chala", filePath: "jubin/Phir Chala.mp3", coverPath: "covers/6.jpg"},
    {songName: "Pyaar Toh Tha", filePath: "jubin/Pyaar Toh Tha.mp3", coverPath: "covers/7.jpg"},
    {songName: "Rim Jhim", filePath: "jubin/Rim Jhim.mp3", coverPath: "covers/8.jpg"},
    {songName: "Raataan Lambiyan", filePath: "jubin/Raataan Lambiyan.mp3", coverPath: "covers/9.jpg"},
    {songName: "Tum Hi Aana", filePath: "jubin/Tum Hi Aana.mp3", coverPath: "covers/8.jpg"}
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = jubin[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = jubin[i].songName; 
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
        console.log(jubin[songIndex+1]);
        audioElement.src = `jubin/${jubin[songIndex].songName}.mp3`;
        masterSongName.innerText = jubin[songIndex].songName;
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
    audioElement.src = `jubin/${songIndex+1}.mp3`;
    masterSongName.innerText = jubin[songIndex].songName;
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
    audioElement.src = `jubin/${songIndex+1}.mp3`;
    masterSongName.innerText = jubin[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})