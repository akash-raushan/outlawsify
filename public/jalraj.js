const music = new Audio("audio/jalraj/do-kinaare.mp3")


// ===============================PATH OF ALL SONGS=======================================================


const songs = [
    {
        id: 1,
        songName: `Do Kinaare <div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7oAFgn.jpg",
        source: "https://audio.jukehost.co.uk/2ekh7sWR05HL51YBE2MaelSQ8pAvQ7U2"
    },
    {
        id: 2,
        songName: `Chaand Ne Kaha<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7oA30X.jpg",
        source: "https://audio.jukehost.co.uk/CJSwk9SVdta4KAyWDpg1Uq8hBq4RsQVe"
    },

    {
        id: 3,
        songName: `Sajni <div class="subtitle">Jalraj`,
        poster: "https://iili.io/J7oAJsI.jpg",
        source: "https://audio.jukehost.co.uk/OqSC9ShynrW8Dgqby1wA5dpbaWakV19C"
    },
    {
        id: 4,
        songName: `Tum Jaisa<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7oA2ft.jpg",
        source: "https://audio.jukehost.co.uk/EbazMagkz8l7YGIFXj7BHjMWj4Xpylv3"
    },
    {
        id: 5,
        songName: `Hasi Ban Gaye<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7oAfJs.jpg",
        source: "https://audio.jukehost.co.uk/K5Yq7HtHz5QTAy9HQhwPoQPhxdoLqgWo"
    },
    {
        id: 6,
        songName: `Has Ban Gaye 2.0<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o5KNf.jpg",
        source: "https://audio.jukehost.co.uk/KoI7MdM5O0WI712WRQcdw45DuJCwynxa"
    },
    {
        id: 7,
        songName: `Lut Gaye<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o5dSn.jpg",
        source: "https://audio.jukehost.co.uk/cgAv32FqNviV0YRbQtCZC44Bp2c18sjd"
    },
    {
        id: 8,
        songName: `Sajna X Aadat<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o5FAG.jpg",
        source: "https://audio.jukehost.co.uk/bXbUXW3x0GjeINtWFhc9SV7sNTR2IIU1"
    },
    {
        id: 9,
        songName: `Ilzaam<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o539s.jpg",
        source: "https://audio.jukehost.co.uk/t0eB2tkwZP59PTkVDG3gyfEW3SEAvZjt"
    },
    {
        id: 10,
        songName: `Kitna Haseen Chehara<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o5ft4.jpg",
        source: "https://audio.jukehost.co.uk/fGb6njEewMMUnBlVYDN9y0aVz90D5uX7"
    },
    {
        id: 11,
        songName: `Humko Tere Siva <div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o5VRa.jpg",
        source: "https://audio.jukehost.co.uk/g1O3vKIYJxn35HF16Y8ztZ19rzwcV7ef"
    },
    {
        id: 12,
        songName: `Chhup Gaye Saare Nazare<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o5EUF.jpg",
        source: "https://audio.jukehost.co.uk/0zkq6YhBjWNpRcXa712UR8XfPFbGJCKe3"
    },
    {
        id: 13,
        songName: `Guzaarish<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o5MHg.jpg",
        source: "https://audio.jukehost.co.uk/TOzid1Wi45oXon0huTxieSUERXz1p2vr"
    },
    {
        id: 14,
        songName: `Zara Zara<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o5WOJ.jpg",
        source: "https://audio.jukehost.co.uk/V2SqbfW8FTnHXpZsJHa4gIQNLvnJ5mkp"
    },
    {
        id: 15,
        songName: `Mann Mera<div class="subtitle">Jalraj </div>`,
        poster: "https://iili.io/J7o5XDv.jpg",
        source: "https://audio.jukehost.co.uk/ACDgZapL5QtsvyJOg5w6U8RWAbLXr7sN"
    },
    {
        id: 16,
        songName: `Dheere Dheere Bol<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o7GB2.jpg",
        source: "https://audio.jukehost.co.uk/w72ciWDjCViYfYM4H3DL3YMadO0VUzlJ"
    },
    {
        id: 17,
        songName: `Zindagi Ban Gaye Ho Tum<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o70X4.jpg",
        source: "https://audio.jukehost.co.uk/pE9YzjWeKLutmrY2iDKmhYvEpoVwkR53"
    },
    {
        id: 18,
        songName: `Zaroori Tha<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o71Ll.jpg",
        source: "https://audio.jukehost.co.uk/f7u0L94Z5CLZw05ORYZ2ibR68aXq7vi9"
    },
    {
        id: 19,
        songName: `Qaid<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o7lIf.jpg",
        source: "https://audio.jukehost.co.uk/nMyg7tJlZsRgU6IPSn96t0XZJVKac9Gf"
    },
    {
        id: 20,
        songName: `Sunn Zara<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o7M1S.jpg",
        source: "https://audio.jukehost.co.uk/N5GR0KLDGqA98IhJIsLZg0Z5rIGGWEmF"
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