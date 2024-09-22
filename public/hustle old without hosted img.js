const music = new Audio("audio/arijit/jaadugar.mp3")


// ===============================PATH OF ALL SONGS=======================================================

const songs = [
    {
        id: 1,
        songName: `Jaadugar<div class="subtitle">Paradox</div>`,
        poster: "img/Posters/hustle/jaadugar.jpg",
        source: "audio/hustle/jaadugar.mp3"
    },
    {
        id: 2,
        songName: `Ram Ram<div class="subtitle">MC Square</div>`,
        poster: "img/Posters/hustle/ram-ram.jpg",
        source: "audio/hustle/ram-ram.mp3"
    },
    {
        id: 3,
        songName: `Main NahiToh Kaun<div class="subtitle">Srushti</div>`,
        poster: "img/Posters/hustle/main-nahi-toh-kaun.jpg",
        source: "audio/hustle/main-nahi-toh-kaun.mp3"
    },
    {
        id: 4,
        songName: `Badi Problem<div class="subtitle">Wicked Sunny & Super Manikk</div>`,
        poster: "img/Posters/hustle/badi-problem.jpg",
        source: "audio/hustle/badi-problem.mp3"
    },
    {
        id: 5,
        songName: `Chitthi<div class="subtitle">QK & UK</div>`,
        poster: "img/Posters/hustle/chitthi.jpg",
        source: "audio/hustle/chitthi.mp3"
    },
    {
        id: 6,
        songName: `Badmos Chora <div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/hustle/badmos-chora.jpg",
        source: "audio/hustle/badmos-chora.mp3"
    },
    {
        id: 7,
        songName: `BT Ho Gayi<div class="subtitle">Paradox</div>`,
        poster: "img/Posters/hustle/bt-ho-gayi.jpg",
        source: "audio/hustle/bt-ho-gayi.mp3"
    },
    {
        id: 8,
        songName: `Chehre<div class="subtitle">MC Square</div>`,
        poster: "img/Posters/hustle/chehre.jpg",
        source: "audio/hustle/chehre.mp3"
    },
    {
        id: 9,
        songName: `Chhore NCR aale<div class="subtitle">Paradox & MC Square</div>`,
        poster: "img/Posters/hustle/chhore-ncr-aale.jpg",
        source: "audio/hustle/chhore-ncr-aale.mp3"
    },
    {
        id: 10,
        songName: `Dubai Ka Sheikh<div class="subtitle">Wicked Sunny</div>`,
        poster: "img/Posters/hustle/dubai-ka-sheikh.jpg",
        source: "audio/hustle/dubai-ka-sheikh.mp3"
    },
    {
        id: 11,
        songName: `Gang Aale Munde<div class="subtitle">Paradox</div>`,
        poster: "img/Posters/hustle/gang-aale-munde.jpg",
        source: "audio/hustle/gang-aale-munde.mp3"
    },
    {
        id: 12,
        songName: `Glitch<div class="subtitle">Paradox</div>`,
        poster: "img/Posters/hustle/glitch.jpg",
        source: "audio/hustle/glitch.mp3"
    },    
    {
        id: 13,
        songName: `Badam Bam<div class="subtitle">Paradox</div>`,
        poster: "img/Posters/hustle/badam-bam.jpg",
        source: "audio/hustle/badam-bam.mp3"
    },
    {
        id: 14,
        songName: `Rihaayi<div class="subtitle">Paradox</div>`,
        poster: "img/Posters/hustle/rihaayi.jpg",
        source: "audio/hustle/rihaayi.mp3"
    },
    {
        id: 15,
        songName: `Chhota Don<div class="subtitle">Srushti</div>`,
        poster: "img/Posters/hustle/chhota-don.jpg",
        source: "audio/hustle/chhota-don.mp3"
    }
]





let postar_master_play = document.getElementById("poster-master-play")
let download_music = document.getElementById("download-music")
let title = document.getElementById("title")

firstIndex = Math.floor(Math.random() * songs.length)
// alert(firstIndex)

firstSrc = `${songs[firstIndex - 1].source}`
music.src = `${songs[firstIndex - 1].source}`
postar_master_play.src = `${songs[firstIndex - 1].poster}`
download_music.href = `${songs[firstIndex - 1].source}`
title.innerHTML = `${songs[firstIndex - 1].songName}`