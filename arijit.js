console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Arijit/KHAIRIYAT.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let Arijit = [
    {songName: "Ae Dil Hai Mushkil", filePath: "Arijit/Ae Dil Hai Mushkil.mp3", coverPath: "covers/1.jpg"},
    {songName: "AGAR TUM SAATH HO", filePath: "Arijit/AGAR TUM SAATH HO.mp3", coverPath: "covers/2.jpg"},
    {songName: "Chhod Diya", filePath: "Arijit/Chhod Diya.mp3", coverPath: "covers/3.jpg"},
    {songName: "Desh Mere", filePath: "Arijit/Desh Mere.mp3", coverPath: "covers/4.jpg"},
    {songName: "KHAIRIYAT", filePath: "Arijit/KHAIRIYAT.mp3", coverPath: "covers/5.jpg"},
    {songName: "Main Dhoondne Ko Zamaane Mein", filePath: "Arijit/Main Dhoondne Ko Zamaane Mein.mp3", coverPath: "covers/6.jpg"},
    {songName: "Tera Chehra", filePath: "Arijit/Tera Chehra.mp3", coverPath: "covers/7.jpg"},
    {songName: "Thodi Jagah", filePath: "Arijit/Thodi Jagah.mp3", coverPath: "covers/8.jpg"},
    {songName: "Uska Hi Banana", filePath: "Arijit/Uska Hi Banana.mp3", coverPath: "covers/9.jpg"}
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = Arijit[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = Arijit[i].songName; 
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
        console.log(Arijit[songIndex+1]);
        audioElement.src = `Arijit/${Arijit[songIndex].songName}.mp3`;
        masterSongName.innerText = Arijit[songIndex].songName;
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
    audioElement.src = `Arijit/${songIndex+1}.mp3`;
    masterSongName.innerText = Arijit[songIndex].songName;
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
    audioElement.src = `Arijit/${songIndex+1}.mp3`;
    masterSongName.innerText = Arijit[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})