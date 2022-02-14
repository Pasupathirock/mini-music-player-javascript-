// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Raja Raja Cholan  ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Valaiyosai  ", filePath: "songs/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "Chinna Chinna Vanna   ", filePath: "songs/3.mp3", coverPath: "covers/1.jpg"},
    {songName: "Elangathu Visuthe  ", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: ".Kalyaana then nilaa  ", filePath: "songs/5.mp3", coverPath: "covers/1.jpg"},
    {songName: "Kanne Kalaimane   ", filePath: "songs/6.mp3", coverPath: "covers/1.jpg"},
    {songName: "Nilave Vaa Sellathe Vaa  ", filePath: "songs/7.mp3", coverPath: "covers/1.jpg"},
    {songName: "Oh butterfly  ", filePath: "songs/8.mp3", coverPath: "covers/1.jpg"},
    {songName: "UNDARI KANNAL ORU  ", filePath: "songs/9.mp3", coverPath: "covers/1.jpg"},
    {songName: "THENDRAL VANTHU  ", filePath: "songs/10.mp3", coverPath: "covers/1.jpg"},
    {songName: "Innisai paadivarum  ", filePath: "songs/11.mp3", coverPath: "covers/1.jpg"},
    {songName: "Uruguthey maruguthey  ", filePath: "songs/12.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ovvoru Pookalume  ", filePath: "songs/13.mp3", coverPath: "covers/1.jpg"},
    {songName: "Unakkul Naane   Minnale  ", filePath: "songs/14.mp3", coverPath: "covers/1.jpg"},
    {songName: "Veyyon Silli   ", filePath: "songs/15.mp3", coverPath: "covers/1.jpg"},
    {songName: "Uyire Uyire (Tu hi re)  ", filePath: "songs/16.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ellu Vaya Pookalaye  ", filePath: "songs/17.mp3", coverPath: "covers/1.jpg"},
    {songName: "Malargale  ", filePath: "songs/18.mp3", coverPath: "covers/1.jpg"},
    {songName: "Malare (Premam)  ", filePath: "songs/19.mp3", coverPath: "covers/1.jpg"},
    {songName: "Kutti Story  ", filePath: "songs/20.mp3", coverPath: "covers/1.jpg"},
    
]


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 


// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        
    }
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
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        audioElement.play();
      
    })
})

