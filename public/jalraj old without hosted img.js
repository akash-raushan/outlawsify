const music = new Audio("audio/jalraj/do-kinaare.mp3")


// ===============================PATH OF ALL SONGS=======================================================


const songs = [
    {
        id: 1,
        songName: `Do Kinaare <div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/do-kinaare.jpg",
        source: "audio/jalraj/do-kinaare.mp3"
    },
    {
        id: 2,
        songName: `Chaand Ne Kaha<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/chaand-ne-kaha.jpg",
        source: "audio/jalraj/chaand-ne-kaha.mp3"
    },

    {
        id: 3,
        songName: `Sajni <div class="subtitle">Jalraj`,
        poster: "img/Posters/jalraj/sajni.jpg",
        source: "audio/jalraj/sajni.mp3"
    },
    {
        id: 4,
        songName: `Tum Jaisa<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/tum-jaisa.jpg",
        source: "audio/jalraj/tum-jaisa.mp3"
    },
    {
        id: 5,
        songName: `Hasi Ban Gaye<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/hasi-ban-gaye.jpg",
        source: "audio/jalraj/hasi-ban-gaye.mp3"
    },
    {
        id: 6,
        songName: `Has Ban Gaye 2.0<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/hasi-ban-gaye-2.0.jpg",
        source: "audio/jalraj/hasi-ban-gaye-2.0.mp3"
    },
    {
        id: 7,
        songName: `Lut Gaye<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/lut-gaye.jpg",
        source: "audio/jalraj/lut-gaye.mp3"
    },
    {
        id: 8,
        songName: `Sajna X Aadat<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/sajna-aadat.jpg",
        source: "audio/jalraj/sajna-aadat.mp3"
    },
    {
        id: 9,
        songName: `Ilzaam<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/ilzaam.jpg",
        source: "audio/jalraj/ilzaam.mp3"
    },
    {
        id: 10,
        songName: `Kitna Haseeb Chehara<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/Kitna-haseen-chehara.jpg",
        source: "audio/jalraj/Kitna-haseen-chehara.mp3"
    },
    {
        id: 11,
        songName: `Humko Tere Siva <div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/humko-tere-siva.jpg",
        source: "audio/jalraj/humko-tere-siva.mp3"
    },
    {
        id: 12,
        songName: `Chhup Gaye Saare Nazare<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/chhup-gaye-saare-nazare.jpg",
        source: "audio/jalraj/chhup-gaye-saare-nazare.mp3"
    },
    {
        id: 13,
        songName: `Guzaarish<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/guzaarish.jpg",
        source: "audio/jalraj/guzaarish.mp3"
    },
    {
        id: 14,
        songName: `Zara Zara<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/zara-zara.jpg",
        source: "audio/jalraj/zara-zara.mp3"
    },
    {
        id: 15,
        songName: `Maan Mera<div class="subtitle">Jalraj </div>`,
        poster: "img/Posters/jalraj/mann-mera.jpg",
        source: "audio/jalraj/mann-mera.mp3"
    },
    {
        id: 16,
        songName: `Dheere Dheere Bol<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/dheere-dheere-bol.jpg",
        source: "audio/jalraj/dheere-dheere-bol.mp3"
    },
    {
        id: 17,
        songName: `Zindagi Ban Gaye Ho Tum<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/zindagi-ban-gaye-ho-tum.jpg",
        source: "audio/jalraj/zindagi-ban-gaye-ho-tum.mp3"
    },
    {
        id: 18,
        songName: `Zaroori Tha<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/zaroori-tha.jpg",
        source: "audio/jalraj/zaroori-tha.mp3"
    },
    {
        id: 19,
        songName: `Qaid<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/qaid.jpg",
        source: "audio/jalraj/qaid.mp3"
    },
    {
        id: 20,
        songName: `Sunn Zara<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/sunn-zara.jpg",
        source: "audio/jalraj/sunn-zara.mp3"
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