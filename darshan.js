console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('darshan/Kabhii Tumhhe.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let darshan = [
    {songName: "Baarish Lete Aana", filePath: "darshan/Baarish Lete Aana.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dil Mera Blast", filePath: "darshan/Dil Mera Blast.mp3", coverPath: "covers/2.jpg"},
    {songName: "Ek Ladki Ko Dekha Toh Aisa Laga", filePath: "darshan/Ek Ladki Ko Dekha Toh Aisa Laga.mp3", coverPath: "covers/8.jpg"},
    {songName: "Ek Tarfa", filePath: "darshan/Ek Tarfa.mp3", coverPath: "covers/3.jpg"},
    {songName: "Hawa Banke", filePath: "darshan/Hawa Banke.mp3", coverPath: "covers/4.jpg"},
    {songName: "Kaash Aisa Hota", filePath: "darshan/Kaash Aisa Hota.mp3", coverPath: "covers/5.jpg"},
    {songName: "Kabhii Tumhhe", filePath: "darshan/Kabhii Tumhhe.mp3", coverPath: "covers/6.jpg"},
    {songName: "Rabba Mehar Kari", filePath: "darshan/Rabba Mehar Kari.mp3", coverPath: "covers/7.jpg"},
    {songName: "Teri Aankhon Mein", filePath: "darshan/Teri Aankhon Mein.mp3", coverPath: "covers/8.jpg"},
    {songName: "Asal Mein", filePath: "darshan/Asal Mein.mp3", coverPath: "covers/9.jpg"}
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = darshan[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = darshan[i].songName; 
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
        console.log(darshan[songIndex+1]);
        audioElement.src = `darshan/${darshan[songIndex].songName}.mp3`;
        masterSongName.innerText = darshan[songIndex].songName;
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
    audioElement.src = `darshan/${songIndex+1}.mp3`;
    masterSongName.innerText = darshan[songIndex].songName;
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
    audioElement.src = `darshan/${songIndex+1}.mp3`;
    masterSongName.innerText = darshan[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})