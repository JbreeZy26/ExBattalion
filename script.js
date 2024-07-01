const songsList = [
    {
        name: "Ex Battalion",
        artist: "Hayaan Mo Sila",
        src: "Hayaam.mp3",
        cover: "ex.jpg"
    },
    {
        name: "Ex Battalion",
        artist: "Nandyan Agad Ako",
        src: "Nandyan.mp3",
        cover: "ex.jpg"
    },
    {
        name: "Ex Battalion",
        artist: "Kakaiba Ka",
        src: "Kakaiba.mp3",
        cover: "ex.jpg"
    },
    {
        name: "Ex Battalion",
        artist: "Come With Me",
        src: "Come.mp3",
        cover: "ex.jpg"
    },
    {
        name: "Ex Battalion",
        artist: "No Games",
        src: "No games.mp3",
        cover: "ex.jpg"
    },
    {
        name: "Ex Battalion",
        artist: "Follow My Lead",
        src: "Follow.mp3",
        cover: "ex.jpg"
    },
    {
        name: "Ex Battalion",
        artist: "Ikaw Kase",
        src: "Ikaw.mp3",
        cover: "ex.jpg"
    },
    {
        name: "Ex Battalion",
        artist: "Kung Tayo",
        src: "Kung.mp3",
        cover: "ex.jpg"
    },
    {
        name: "Ex Battalion",
        artist: "Tell Me",
        src: "Tell me.mp3",
        cover: "ex.jpg"
    },
    {
        name: "Ex Battalion",
        artist: "SouthBoys",
        src: "South.mp3",
        cover: "ex.jpg"
    },
    {
        name: "Ex Battalion",
        artist: "We The Best",
        src: "We the best.mp3",
        cover: "ex.jpg"
    },
    {
        name: "Ex Battalion",
        artist: "Need You",
        src: "Need you.mp3",
        cover: "ex.jpg"
    },
    {
        name: "Ex Battalion",
        artist: "Sama-Sama",
        src: "Sama.mp3",
        cover: "ex.jpg"
    },
    {
        name: "Ex Battalion",
        artist: "Bootyful",
        src: "Booty.mp3",
        cover: "ex.jpg"
    },
    {
        name: "Ex Battalion",
        artist: "Baby Cakes",
        src: "Baby.mp3",
        cover: "ex.jpg"
    },
    {
        name: "Ex Battalion",
        artist: "Ginalingan",
        src: "Ginalingan.mp3",
        cover: "ex.jpg"
    },
];

const artistName = document.querySelector('.artist-name');
const musicName = document.querySelector('.song-name');
const fillBar = document.querySelector('.fill-bar');
const time = document.querySelector('.time');
const cover = document.getElementById('cover');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const prog = document.querySelector('.progress-bar');

let song = new Audio();
let currentSong = 0;
let playing = false;

document.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSong);
    song.addEventListener('timeupdate', updateProgress);
    song.addEventListener('ended', nextSong);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    playBtn.addEventListener('click', togglePlayPause);
    prog.addEventListener('click', seek);
});

function loadSong(index) {
    const { name, artist, src, cover: thumb } = songsList[index];
    artistName.innerText = artist;
    musicName.innerText = name;
    song.src = src;
    cover.style.backgroundImage = `url(${thumb})`;
}

function updateProgress() {
    if (song.duration) {
        const pos = (song.currentTime / song.duration) * 100;
        fillBar.style.width = `${pos}%`;

        const duration = formatTime(song.duration);
        const currentTime = formatTime(song.currentTime);
        time.innerText = `${currentTime} - ${duration}`;

    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function togglePlayPause() {
    if (playing) {
        song.pause();
    } else {
        song.play();
    }
    playing = !playing;
    playBtn.classList.toggle('fa-pause', playing);
    playBtn.classList.toggle('fa-play', !playing);
    cover.classList.toggle('active', playing);
}

function nextSong() {
    currentSong = (currentSong + 1) % songsList.length;
    playMusic();
}

function prevSong() {
    currentSong = (currentSong - 1 + songsList.length) % songsList.length;
    playMusic();
}

function playMusic() {
    loadSong(currentSong);
    song.play();
    playing = true;
    playBtn.classList.add('fa-pause');
    playBtn.classList.remove('fa-play');
    cover.classList.add('active');
}

function seek(e) {
    const pos = (e.offsetX / prog.clientWidth) * song.duration;
    song.currentTime = pos;
}