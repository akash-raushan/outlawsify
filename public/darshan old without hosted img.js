const music = new Audio("audio/haaye-dard.mp3")


// ===============================PATH OF ALL SONGS=======================================================

const songs = [
    {
        id: 1,
        songName: `Haaye Dard <div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/haaye-dard.jpg",
        source: "audio/haaye-dard.mp3"
    },
    {
        id: 2,
        songName: `Lo Aayi Barsaat<div class="subtitle">Darshan Raval</div>`,
        // poster: "https://i.scdn.co/image/ab67616d00004851e787cffec20aa2a396a61647",
        poster: "img/Posters/lo-aayi-barsaat.jpg",
        source: "audio/lo-aayi-barsaat.mp3"
    },

    {
        id: 3,
        songName: `Kesariya <div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/kesariya.jpg",
        source: "audio/arijit/kesariya.mp3"
    },
    {
        id: 4,
        songName: `Yaad Na Aaye<div class="subtitle">Akull</div>`,
        poster: "img/Posters/yaad-na-aaye.jpg",
        source: "audio/yaad-na-aaye.mp3"
    },
    {
        id: 5,
        songName: `Fake Love <div class="subtitle">Fukra Insaan</div>`,
        poster: "img/Posters/fake-love.jpg",
        source: "audio/fake-love.mp3"
    },
    {
        id: 6,
        songName: `Sajna X Aadat<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/sajna-aadat.jpg",
        source: "audio/jalraj/sajna-aadat.mp3"
    },
    {
        id: 7,
        songName: `Faasla <div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/faasla.jpg",
        source: "audio/faasla.mp3"
    },
    {
        id: 8,
        songName: `Laree Choote<div class="subtitle">Raico</div>`,
        poster: "img/Posters/laree-choote.jpg",
        source: "audio/laree-choote.mp3"
    },
    {
        id: 9,
        songName: `Pyaar Karte Ho Na <div class="subtitle">Stebin Ben</div>`,
        poster: "img/Posters/pyaar-karte-ho-na.jpg",
        source: "audio/pyaar-karte-ho-na.mp3"
    },
    {
        id: 10,
        songName: `Ek Tarfa<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/ek-tarfa.jpg",
        source: "audio/ek-tarfa.mp3"
    },
    {
        id: 11,
        songName: `Halki Si Barsaat <div class="subtitle">Munawar Faruqui</div>`,
        poster: "img/Posters/halki-si-barsaat.jpg",
        source: "audio/halki-si-barsaat.mp3"
    },
    {
        id: 12,
        songName: `Zara Zara<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/zara-zara.jpg",
        source: "audio/jalraj/zara-zara.mp3"
    },
    {
        id: 13,
        songName: `Mehrama<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/mehrama.jpg",
        source: "audio/mehrama.mp3"
    },
    {
        id: 14,
        songName: `Chaand Baaliyan<div class="subtitle">Aditya A</div>`,
        poster: "img/Posters/chaand-baaliyan.jpg",
        source: "audio/chaand-baaliyan.mp3"
    },
    {
        id: 15,
        songName: `Sajde Kiye Hain Laakhon<div class="subtitle">K K </div>`,
        poster: "img/Posters/sajde-kiye-hain-laakhon.jpg",
        source: "audio/sajde-kiye-hain-laakhon.mp3"
    },
    {
        id: 16,
        songName: `Dhoondhe Akhiyaan<div class="subtitle">Yasser & Altamash</div>`,
        poster: "img/Posters/dhoonde-akhiyaan.jpg",
        source: "audio/dhoonde-akhiyaan.mp3"
    },
    {
        id: 17,
        songName: `Dil Ko Karar Aaya <div class="subtitle">Neha Kakkar</div>`,
        poster: "img/Posters/dil-ko-karar.jpg",
        source: "audio/dil-ko-karar.mp3"
    },
    {
        id: 18,
        songName: `Log Kehte Hain Pagal<div class="subtitle">Rahul Ja</div>`,
        poster: "img/Posters/log-kahte-hain-paagal.jpg",
        source: "audio/log-kahte-hain-paagal.mp3"
    },
    {
        id: 19,
        songName: `Mujhe Peene Do<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/mujhe-pene-dojpg.jpg",
        source: "audio/mujhe-peene-do.mp3"
    },
    {
        id: 20,
        songName: `Tum Mere<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/tum-mere.jpg",
        source: "audio/tum-mere.mp3"
    },
    {
        id: 21,
        songName: `Teri Aankhon Mein <div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/teri-aankhon-mein.jpg",
        source: "audio/teri-aankhon-mein.mp3"
    },
    {
        id: 22,
        songName: `Baarish Lete Aana 2.0<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/baarish-lete-aana.jpg",
        source: "audio/baarish-lete-aana.mp3"
    },
    {
        id: 23,
        songName: `Mahiye Jinna Sona<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/mahiye-jinna-sona.jpg",
        source: "audio/mahiye-jinna-sona.mp3"
    },
    {
        id: 24,
        songName: `Do Kinaare<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/do-kinaare.jpg",
        source: "audio/jalraj/do-kinaare.mp3"
    },
    {
        id: 25,
        songName: `Tu Hai Kahan<div class="subtitle">AUR</div>`,
        poster: "img/Posters/tu-hai-kahan.jpg",
        source: "audio/tu-hai-kahan.mp3"
    },
    {
        id: 26,
        songName: `Maana Ke Hum Yaar Nahin <div class="subtitle">Ayushman Khurana</div>`,
        poster: "img/Posters/maana-ke-ab-yaar-nahin.jpg",
        source: "audio/maana-ke-ab-yaar-nahin.mp3"
    },
    {
        id: 27,
        songName: `GUZAARISH <div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/guzaarish.jpg",
        source: "audio/jalraj/guzaarish.mp3"
    },
    {
        id: 28,
        songName: `Tum Jaisa<div class="subtitle">Jajraj</div>`,
        poster: "img/Posters/tum-jaisa.jpg",
        source: "audio/tum-jaisa.mp3"
    },
    {
        id: 29,
        songName: `Zindgi Bata De <div class="subtitle">Tony Kakkar </div>`,
        poster: "img/Posters/zindagi-bata-de.jpg",
        source: "audio/zindagi-bata-de.mp3"
    },
    {
        id: 30,
        songName: `Kabhi Jo Badal X<div class="subtitle">Let Me Down Slowly</div>`,
        poster: "img/Posters/let-me-down-slowly.jpg",
        source: "audio/let-me-down-slowly.mp3"
    },
    {
        id: 31,
        songName: `Tera Zikr <div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/tera-zikr.jpg",
        source: "audio/tera-zikr.mp3"
    },
    {
        id: 32,
        songName: `Dooniya Choor Doon<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/duniya-chorr-doon.jpg",
        source: "audio/duniya-chorr-doon.mp3"
    },
    {
        id: 33,
        songName: `Love Me Thoda Aur<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/love-me-thoda-aur.jpg",
        source: "audio/arijit/love-me-thoda-aur.mp3"
    },
    {
        id: 34,
        songName: `Tera Hoone Laga Hoon<div class="subtitle">Stebin Ben</div>`,
        poster: "img/Posters/tera-hone-laga-hoon.jpg",
        source: "audio/tera-hone-laga-hoon.mp3"
    },
    {
        id: 35,
        songName: `Deewane Hum Nahi Nahi Hote<div class="subtitle">Aditya A</div>`,
        poster: "img/Posters/deewane-hum nahi-hote.jpg",
        source: "audio/deewane-hum nahi-hote.mp3"
    },
    {
        id: 36,
        songName: `Iktara <div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/iktara.jpg",
        source: "audio/arijit/iktara.mp3"
    },
    {
        id: 37,
        songName: `Is Qadar<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/is-qadar.jpg",
        source: "audio/is-qadar.mp3"
    },
    {
        id: 38,
        songName: `Judaiyaan<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/judaiyaan.jpg",
        source: "audio/judaiyaan.mp3"
    },
    {
        id: 39,
        songName: `Pachataoge <div class="subtitle">Arijit Singh`,
        poster: "img/Posters/arijit/pachataoge.jpg",
        source: "audio/arijit/pachataoge.mp3"
    },
    {
        id: 40,
        songName: `Piya Re<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/piya-re.jpg",
        source: "audio/piya-re.mp3"
    },
    {
        id: 41,
        songName: `Lajaawab 2 <div class="subtitle">Taimur</div>`,
        poster: "img/Posters/lajawab-2.jpg",
        source: "audio/lajawab-2.mp3"
    },
    {
        id: 42,
        songName: `Tu Hai Kahan - Female Version<div class="subtitle">Shuddhi</div>`,
        poster: "img/Posters/tu-hai-kahan-female.jpg",
        source: "audio/tu-hai-kahan-female.mp3"
    },
    {
        id: 43,
        songName: `Alag Aasman<div class="subtitle">Anuv Jain</div>`,
        poster: "img/Posters/alag-aasman.jpg",
        source: "audio/alag-aasman.mp3"
    },    
    {
        id: 44,
        songName: `Chaand<div class="subtitle">BraveWorld</div>`,
        poster: "img/Posters/chaand.jpg",
        source: "audio/chaand.mp3"
    },
    {
        id: 45,
        songName: `Paagal Sa Hoon Bandha <div class="subtitle">AK Luke</div>`,
        poster: "img/Posters/paagal-sa-hoon-bandha.jpg",
        source: "audio/paagal-sa-hoon-bandha.mp3"
    },
]



let postar_master_play = document.getElementById("poster-master-play")
let download_music = document.getElementById("download-music")
let title = document.getElementById("title")

firstIndex = Math.floor(Math.random() * songs.length)
music.src = `${songs[firstIndex - 1].source}`
postar_master_play.src = `${songs[firstIndex - 1].poster}`
download_music.href = `${songs[firstIndex - 1].source}`
title.innerHTML = `${songs[firstIndex - 1].songName}`
