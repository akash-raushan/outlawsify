const music = new Audio("audio/arijit/jaadugar.mp3")


// ===============================PATH OF ALL SONGS=======================================================

const songs = [
    {
        id: 1,
        songName: `Jaadugar<div class="subtitle">Paradox</div>`,
        poster: "https://iili.io/J7oypfI.jpg",
        source: "https://audio.jukehost.co.uk/rul1zJrkRmEn7Pwz39vpNrKTcS4Hhyx2"
    },
    {
        id: 2,
        songName: `Ram Ram<div class="subtitle">MC Square</div>`,
        poster: "https://iili.io/J7oyDVp.jpg",
        source: "https://audio.jukehost.co.uk/1uHgFwBDlw3n1vdvtrOEZvp5qqUnKEeX"
    },
    {
        id: 3,
        songName: `Main Nahi Toh Kaun<div class="subtitle">Srushti</div>`,
        poster: "https://iili.io/J7oybiN.jpg",
        source: "https://audio.jukehost.co.uk/bOD6O4l6LAvnEy5hdvoO48O7YzUzsr26"
    },
    {
        id: 4,
        songName: `Badi Problem<div class="subtitle">Wicked Sunny & Super Manikk</div>`,
        poster: "https://iili.io/J7oyylt.jpg",
        source: "https://audio.jukehost.co.uk/JS8XdVtW4o0du9nAMcMTGh7fb4z9ovn5"
    },
    {
        id: 5,
        songName: `Chitthi<div class="subtitle">QK & UK</div>`,
        poster: "https://iili.io/J7x99UX.jpg",
        source: "https://audio.jukehost.co.uk/03OhvsfQpqur11PnHPUX7dCMAZoH43SG"
    },
    {
        id: 6,
        songName: `Badmos Chora <div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7x9MmJ.jpg",
        source: "https://audio.jukehost.co.uk/Xi3UrGgOtMqHPn9rUiyywX7EvUAwTkoa"
    },
    {
        id: 7,
        songName: `BT Ho Gayi<div class="subtitle">Paradox</div>`,
        poster: "https://iili.io/J7x91dF.jpg",
        source: "https://audio.jukehost.co.uk/DDRt1z043OjPoOlWOqCPcwbsYLTlF1sp"
    },
    {
        id: 8,
        songName: `Chehre<div class="subtitle">MC Square</div>`,
        poster: "https://iili.io/J7x9E5g.jpg",
        source: "https://audio.jukehost.co.uk/4y201QGVEuSDnqYoUy5WzEFCHlHls5Tl"
    },
    {
        id: 9,
        songName: `Chhore NCR aale<div class="subtitle">Paradox & MC Square</div>`,
        poster: "https://iili.io/J7x9Gea.jpg",
        source: "https://audio.jukehost.co.uk/awQ762hG5UZMqOG1rKXJWCpzVomRhRUs"
    },
    {
        id: 10,
        songName: `Dubai Ka Sheikh<div class="subtitle">Wicked Sunny</div>`,
        poster: "https://iili.io/J7x9Wzv.jpg",
        source: "https://audio.jukehost.co.uk/p6DZkwbsxG1xF2KIHYqpxcNTWItiDH7g"
    },
    {
        id: 11,
        songName: `Gang Aale Munde<div class="subtitle">Paradox</div>`,
        poster: "https://iili.io/J7xHdrP.jpg",
        source: "https://audio.jukehost.co.uk/sA8NZPpAnKbhE3UJ2nYDkSDb025X5d7M"
    },
    {
        id: 12,
        songName: `Glitch<div class="subtitle">Paradox</div>`,
        poster: "https://iili.io/J7xHHBV.jpg",
        source: "https://audio.jukehost.co.uk/yr00dMoP2EKR0rmLDT0prtSqOvXgWTUY"
    },    
    {
        id: 13,
        songName: `Badam Bam<div class="subtitle">Paradox</div>`,
        poster: "https://iili.io/J7xHJEB.jpg",
        source: "https://audio.jukehost.co.uk/IFun16fdbhSBQBdvnBnR6Z7MtQCuy9Hj"
    },
    {
        id: 14,
        songName: `Rihaayi<div class="subtitle">Paradox</div>`,
        poster: "https://iili.io/J7x9yLQ.jpg",
        source: "https://audio.jukehost.co.uk/eVjY4KCICr2Mj345HGLDgb7gnSeDM6qR"
    },
    {
        id: 15,
        songName: `Chhota Don<div class="subtitle">Srushti</div>`,
        poster: "https://iili.io/J7xH321.jpg",
        source: "https://audio.jukehost.co.uk/RkSj7aVdSWD0ssbb3BKDX69hDbRdV3YX"
    }
]


export { songs };


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