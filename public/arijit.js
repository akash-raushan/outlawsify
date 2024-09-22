const music = new Audio("audio/arijit/bedardaya.mp3")


// ===============================PATH OF ALL SONGS=======================================================

const songs = [
    {
        id: 1,
        songName: `Bedardaya<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7ooGqu.jpg",
        source: "https://audio.jukehost.co.uk/HWcsKDflJ1AFDmhNyEEWIm6SMh3aKZiC"
    },
    {
        id: 2,
        songName: `Dhokha<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oo0X9.jpg",
        source: "https://audio.jukehost.co.uk/i1Fbos0Ck8ClFbeV2vJ3XrZ8U6dWm3Y0"
    },
    {
        id: 3,
        songName: `Iktara<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oo1se.jpg",
        source: "https://audio.jukehost.co.uk/UXQFX5GzEd8iMg7NiVAr5UNeTG4yGhnU"
    },
    {
        id: 4,
        songName: `Dil Ko Maine Di Kasam<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oolz7.jpg",
        source: "https://audio.jukehost.co.uk/X8qnPOtjvjxDzuKns480QBHG7ONM8gkW"
    },
    {
        id: 5,
        songName: `Pachataoge<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7ooM0b.jpg",
        source: "https://audio.jukehost.co.uk/s3Rx2Bm48jf3aewcZS0dR1OWQ6NiHC6U"
    },
    {
        id: 6,
        songName: `Samjhawan <div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oxw3G.jpg",
        source: "https://audio.jukehost.co.uk/XHM53XtjGNbygXGjlnSyOPwaIXUbRlZD"
    },
    {
        id: 7,
        songName: `Tu Hi Yaar Mera<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oxh4s.jpg",
        source: "https://audio.jukehost.co.uk/PzqwT5DuLM5k6vnHZwRAO9nJ7Z1ULgBK"
    },{
        id: 8,
        songName: `Love Me Thoda Aur<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oxXGn.jpg",
        source: "https://audio.jukehost.co.uk/8NNGRYeng55o7sbaWWw0T0IiUodCQRBL"
    },
    {
        id: 9,
        songName: `Phir Bhi Tuko Chahunga<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oxWCX.jpg",
        source: "https://audio.jukehost.co.uk/f6yFW2VexnZKtrmBKsd9wWbN0nAOShgQ"
    },
    {
        id: 10,
        songName: `Tere Vaaste<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oxNaf.jpg",
        source: "https://audio.jukehost.co.uk/20k2TgeJOD8qgUIsnYbDTwtDrkMIoh8c"
    },
    {
        id: 11,
        songName: `Phir Aur Kya Chahiye<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7ozDJf.jpg",
        source: "https://audio.jukehost.co.uk/70AfDZ9G8vB2yanlCqAHzm96VmN2f8qf"
    },
    {
        id: 12,
        songName: `Heeriye<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7ozQls.jpg",
        source: "https://audio.jukehost.co.uk/ndUeORpzxIbaGfqCgPAPH8oZzyWKc6PX"
    },    
    {
        id: 13,
        songName: `Lambiyaan Si Judaiyaan<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7ozLfn.jpg",
        source: "https://audio.jukehost.co.uk/fnYQrhD31cVexBaHb9uTKsXg6YI5kEmT3"
    },
    {
        id: 14,
        songName: `Tere Hawale<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7ozZUG.jpg",
        source: "https://audio.jukehost.co.uk/3FPCxrsK0gov7iIr4eS1NqYQCJPXBwI3"
    },
    {
        id: 15,
        songName: `Kesariya<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7ozbR4.jpg",
        source: "https://audio.jukehost.co.uk/8DQ7JbVDCFOihLeqGgrsYLBbBhXIb24Y"
    },
    {
        id: 16,
        songName: `Sun Raha Hai Na Tu<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oIzs1.jpg",
        source: "https://audio.jukehost.co.uk/ncmzC6MOF4N4Yum0CC2bAHnfyExxNxCL"
    },
    {
        id: 17,
        songName: `Ae Dil Hai Muskil<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oITqF.jpg",
        source: "https://audio.jukehost.co.uk/F6T1Q9AiLnbROkR47oa2FXILKuHWmUKX"
    },
    {
        id: 18,
        songName: `Mann Mast Magan <div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oIAga.jpg",
        source: "https://audio.jukehost.co.uk/SYGqdoywYM9yIQpFyQ11auTCSICAro4h"
    },
    {
        id: 19,
        songName: `Kabira<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oIu0g.jpg",
        source: "https://audio.jukehost.co.uk/HqmRxoFSc2d6ucknYpQqkUcmveYFawya"
    },
    {
        id: 20,
        songName: `Illahi<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oI5dJ.jpg",
        source: "https://audio.jukehost.co.uk/DrTeaGAIINmQIQlnwcOyW3vVFfNzGu1m"
    },
    {
        id: 21,
        songName: `Chaleya<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oI8B9.jpg",
        source: "https://audio.jukehost.co.uk/vjGlXpwBRig7ytaBiQAKxZfKPduoLM7j"
    },
    {
        id: 22,
        songName: `Agar Tum Saath Ho<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oIeXS.jpg",
        source: "https://audio.jukehost.co.uk/y7v3fKJy5wuyYPkKaScFFdlosaGz2uBV"
    },
    {
        id: 23,
        songName: `Kalank<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oIkL7.jpg",
        source: "https://audio.jukehost.co.uk/sH4kxWRCcpGGetRAdy0RsIocbnk5DYVQ"
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