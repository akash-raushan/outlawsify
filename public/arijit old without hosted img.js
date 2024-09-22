const music = new Audio("audio/arijit/bedardaya.mp3")


// ===============================PATH OF ALL SONGS=======================================================

const songs = [
    {
        id: 1,
        songName: `Bedardaya<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/bedardaya.jpg",
        source: "audio/arijit/bedardaya.mp3"
    },
    {
        id: 2,
        songName: `Dhokha<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/dhokha.jpg",
        source: "audio/arijit/dhokha.mp3"
    },
    {
        id: 3,
        songName: `Iktara<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/iktara.jpg",
        source: "audio/arijit/iktara.mp3"
    },
    {
        id: 4,
        songName: `Dil Ko Maine Di Kasam<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/dil-ko-maine-di-kasam.jpg",
        source: "audio/arijit/dil-ko-maine-di-kasam.mp3"
    },
    {
        id: 5,
        songName: `Pachataoge<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/pachataoge.jpg",
        source: "audio/arijit/pachataoge.mp3"
    },
    {
        id: 6,
        songName: `Samjhawan <div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/samjhawan.jpg",
        source: "audio/arijit/samjhawan.mp3"
    },
    {
        id: 7,
        songName: `Tu Hi Yaar Mera<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/tu-hi-yaar-mera.jpg",
        source: "audio/arijit/tu-hi-yaar-mera.mp3"
    },{
        id: 8,
        songName: `Love Me Thoda Aur<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/love-me-thoda-aur.jpg",
        source: "audio/arijit/love-me-thoda-aur.mp3"
    },
    {
        id: 9,
        songName: `Phir Bhi Tuko Chahunga<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/phir-bhi-tumko-chahunga.jpg",
        source: "audio/arijit/phir-bhi-tumko-chahunga.mp3"
    },
    {
        id: 10,
        songName: `Tere Vaaste<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/tere-vaaste.jpg",
        source: "audio/arijit/tere-vaaste.mp3"
    },
    {
        id: 11,
        songName: `Phir Aur Kya Chahiye<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/phir-aur-kya-chahiye.jpg",
        source: "audio/arijit/phir-aur-kya-chahiye.mp3"
    },
    {
        id: 12,
        songName: `Heeriye<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/heeriye.jpg",
        source: "audio/arijit/heeriye.mp3"
    },    
    {
        id: 13,
        songName: `Lambiyaan Si Judaiyaan<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/lambiyaan-si-judaiyaan.jpg",
        source: "audio/arijit/lambiyaan-si-judaiyaan.mp3"
    },
    {
        id: 14,
        songName: `Tere Hawale<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/tere-hawale.jpg",
        source: "audio/arijit/tere-hawale.mp3"
    },
    {
        id: 15,
        songName: `Kesariya<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/kesariya.jpg",
        source: "audio/arijit/kesariya.mp3"
    },
    {
        id: 16,
        songName: `Sun Raha Hai Na Tu<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/sun-raha-hai-na-tu.jpg",
        source: "audio/arijit/sun-raha-hai-na-tu.mp3"
    },
    {
        id: 17,
        songName: `Ae Dil Hai Muskil<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/ae-dil-hai-muskil.jpg",
        source: "audio/arijit/ae-dil-hai-muskil.mp3"
    },
    {
        id: 18,
        songName: `Mann Mast Magan <div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/mann-mast-magan.jpg",
        source: "audio/arijit/mann-mast-magan.mp3"
    },
    {
        id: 19,
        songName: `Kabira<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/kabira.jpg",
        source: "audio/arijit/kabira.mp3"
    },
    {
        id: 20,
        songName: `Illahi<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/illahi.jpg",
        source: "audio/arijit/illahi.mp3"
    },
    {
        id: 21,
        songName: `Chaleya<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/chaleya.jpg",
        source: "audio/arijit/chaleya.mp3"
    },
    {
        id: 22,
        songName: `Agar Tum Saath Ho<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/agar-tum-saath-ho.jpg",
        source: "audio/arijit/agar-tum-saath-ho.mp3"
    },
    {
        id: 23,
        songName: `Kalank<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/kalank.jpg",
        source: "audio/arijit/kalank.mp3"
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