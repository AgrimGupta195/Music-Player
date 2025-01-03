let progress = document.querySelector("#progress");
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}
function playPause(){
    if(ctrlIcon.classList.contains('fa-pause')){
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    }else{
        song.play();
        ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500)
}
progress.onchange=()=>{
    song.play();
    song.currentTime=progress.value;
}

song.onended = () => {
    ctrlIcon.classList.remove('fa-pause');
    ctrlIcon.classList.add('fa-repeat');
};
ctrlIcon.onclick = () => {
    if (ctrlIcon.classList.contains('fa-repeat')) {
        song.currentTime = 0;
        song.play();
        ctrlIcon.classList.remove('fa-repeat');
        ctrlIcon.classList.add('fa-play');
    } else {
        playPause();
    }
};