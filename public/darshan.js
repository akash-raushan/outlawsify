const music = new Audio("audio/haaye-dard.mp3")


// ===============================PATH OF ALL SONGS=======================================================

const songs = [
    {
        id: 1,
        songName: `Haaye Dard <div class="subtitle">Darshan Raval</div>`,
        poster: "https://iili.io/J7nmATQ.jpg",
        source: "https://audio.jukehost.co.uk/R6loiCHzmWsDvpKWjB2vZ7pnPnfICGQC"
    },
    {
        id: 2,
        songName: `Lo Aayi Barsaat<div class="subtitle">Darshan Raval</div>`,
        // poster: "https://i.scdn.co/image/ab67616d00004851e787cffec20aa2a396a61647",
        poster: "https://iili.io/J7nmaG1.jpg",
        source: "https://audio.jukehost.co.uk/qDMY9DLZG2lrlPpHGbLkC6loorRz9JGc"
    },

    {
        id: 3,
        songName: `Kesariya <div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7ozbR4.jpg",
        source: "https://audio.jukehost.co.uk/8DQ7JbVDCFOihLeqGgrsYLBbBhXIb24Y"
    },
    {
        id: 4,
        songName: `Yaad Na Aaye<div class="subtitle">Akull</div>`,
        poster: "https://iili.io/J7nmYCP.jpg",
        source: "https://audio.jukehost.co.uk/nz5YRQDVWtaCrvube9KQNaJrQs91Ac8Q"
    },
    {
        id: 5,
        songName: `Fake Love <div class="subtitle">Fukra Insaan</div>`,
        poster: "https://iili.io/J7nm5ZB.jpg",
        source: "https://audio.jukehost.co.uk/OzuZ1NS2fGfxoBBkx9e1UEb9VkWQBaYy"
    },
    {
        id: 6,
        songName: `Sajna X Aadat<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o5FAG.jpg",
        source: "https://audio.jukehost.co.uk/bXbUXW3x0GjeINtWFhc9SV7sNTR2IIU1"
    },
    {
        id: 7,
        songName: `Faasla <div class="subtitle">Darshan Raval</div>`,
        poster: "https://iili.io/J7ny449.jpg",
        source: "https://audio.jukehost.co.uk/VKXe7p6Cyd0Csiiz2fcfJqd9UX7tdCzG"
    },
    {
        id: 8,
        songName: `Laree Choote<div class="subtitle">Raico</div>`,
        poster: "https://iili.io/J7nyiYu.jpg",
        source: "https://audio.jukehost.co.uk/XuHgOQxuYd78MTL6uEe6M7QwmocmpltX"
    },
    {
        id: 9,
        songName: `Pyaar Karte Ho Na <div class="subtitle">Stebin Ben</div>`,
        poster: "https://iili.io/J7nyP2e.jpg",
        source: "https://audio.jukehost.co.uk/4oHG1QmAMwaERiC8tIa6cVUpeXa12k4A"
    },
    {
        id: 10,
        songName: `Ek Tarfa<div class="subtitle">Darshan Raval</div>`,
        poster: "https://iili.io/J7nyskb.jpg",
        source: "https://audio.jukehost.co.uk/mBJK6e5a8Z0Ei66pw85V8omf0QNjs6Q5"
    },
    {
        id: 11,
        songName: `Halki Si Barsaat <div class="subtitle">Munawar Faruqui</div>`,
        poster: "https://iili.io/J7nyLpj.jpg",
        source: "https://audio.jukehost.co.uk/RAnz2EZJtQ97D4qm3xGCXjGhfQ1ba47n"
    },
    {
        id: 12,
        songName: `Zara Zara<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o5WOJ.jpg",
        source: "https://audio.jukehost.co.uk/V2SqbfW8FTnHXpZsJHa4gIQNLvnJ5mkp"
    },
    {
        id: 13,
        songName: `Mehrama<div class="subtitle">Darshan Raval</div>`,
        poster: "https://iili.io/J7oHGfI.jpg",
        source: "https://audio.jukehost.co.uk/MzI4L0IfQP8Tz6HZspPFoXbMvdSKiMy8"
    },
    {
        id: 14,
        songName: `Chaand Baaliyan<div class="subtitle">Aditya A</div>`,
        poster: "https://iili.io/J7oH1iN.jpg",
        source: "https://audio.jukehost.co.uk/FQue5Oof6UVgzoRHQDbMzLzW48KUXj90"
    },
    {
        id: 15,
        songName: `Sajde Kiye Hain Laakhon<div class="subtitle">K K </div>`,
        poster: "https://iili.io/J7oHVUX.jpg",
        source: "https://audio.jukehost.co.uk/r0Co3oBVbW9MwPdWfKlnOrCVRcj437tU"
    },
    {
        id: 16,
        songName: `Dhoondhe Akhiyaan<div class="subtitle">Yasser & Altamash</div>`,
        poster: "https://iili.io/J7oHMlt.jpg",
        source: "https://audio.jukehost.co.uk/fDq4MHTsruJp6PGCS7L9px2uJRvap0su"
    },
    {
        id: 17,
        songName: `Dil Ko Karar Aaya <div class="subtitle">Neha Kakkar</div>`,
        poster: "https://iili.io/J7oH0Vp.jpg",
        source: "https://audio.jukehost.co.uk/8MAAhowttcnM1e9nDOYgAyBQlV6Ve3pq"
    },
    {
        id: 18,
        songName: `Log Kehte Hain Pagal<div class="subtitle">Rahul Ja</div>`,
        poster: "https://iili.io/J7oKQLJ.jpg",
        source: "https://audio.jukehost.co.uk/AgYqQ0sX9kNKIsxNavkbtNyD56jSyD7x"
    },
    {
        id: 19,
        songName: `Mujhe Peene Do<div class="subtitle">Darshan Raval</div>`,
        poster: "https://iili.io/J7oKD1R.jpg",
        source: "https://audio.jukehost.co.uk/2T4pGI8zSRVXNF5DUtb2ICgVefbgI6hR"
    },
    {
        id: 20,
        songName: `Tum Mere<div class="subtitle">Darshan Raval</div>`,
        poster: "https://iili.io/J7oKtqv.jpg",
        source: "https://audio.jukehost.co.uk/d9RsKXYI2CiZP3Ar4LDwsKUJJGc3L2QQ"
    },
    {
        id: 21,
        songName: `Teri Aankhon Mein <div class="subtitle">Darshan Raval</div>`,
        poster: "https://iili.io/J7oKpdN.png",
        source: "https://audio.jukehost.co.uk/kMB6mHZiCRMRu1zzN8ucJr66yVlBu3WY"
    },
    {
        id: 22,
        songName: `Baarish Lete Aana 2.0<div class="subtitle">Darshan Raval</div>`,
        poster: "https://iili.io/J7oKbgp.jpg",
        source: "https://audio.jukehost.co.uk/d9SybxEgBTTbofgMqdEgKqGxHjSId3JO"
    },
    {
        id: 23,
        songName: `Mahiye Jinna Sona<div class="subtitle">Darshan Raval</div>`,
        poster: "https://iili.io/J7of8jn.jpg",
        source: "https://audio.jukehost.co.uk/lx4OqRoLPpgRh3aoSgrhys9VSkTUVaN0"
    },
    {
        id: 24,
        songName: `Do Kinaare<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7oAFgn.jpg",
        source: "https://audio.jukehost.co.uk/2ekh7sWR05HL51YBE2MaelSQ8pAvQ7U2"
    },
    {
        id: 25,
        songName: `Tu Hai Kahan<div class="subtitle">AUR</div>`,
        poster: "https://iili.io/J7ofvTX.jpg",
        source: "https://audio.jukehost.co.uk/6QamjcrYI9h3AUkNY2ZxqI7yDBF56uhm"
    },
    {
        id: 26,
        songName: `Maana Ke Hum Yaar Nahin <div class="subtitle">Ayushman Khurana</div>`,
        poster: "https://iili.io/J7ofept.jpg",
        source: "https://audio.jukehost.co.uk/ywaFr5bOIODgd4xSogtwAtBsCl2b4MUE"
    },
    {
        id: 27,
        songName: `GUZAARISH <div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7o5MHg.jpg",
        source: "https://audio.jukehost.co.uk/TOzid1Wi45oXon0huTxieSUERXz1p2vr"
    },
    {
        id: 28,
        songName: `Tum Jaisa<div class="subtitle">Jalraj</div>`,
        poster: "https://iili.io/J7oA2ft.jpg",
        source: "https://audio.jukehost.co.uk/EbazMagkz8l7YGIFXj7BHjMWj4Xpylv3"
    },
    {
        id: 29,
        songName: `Zindgi Bata De <div class="subtitle">Tony Kakkar </div>`,
        poster: "https://iili.io/J7ofOvI.jpg",
        source: "https://audio.jukehost.co.uk/U7DYsxQfpN33DQJYGaYPeZVwvF3dQXaX"
    },
    {
        id: 30,
        songName: `Kabhi Jo Badal X<div class="subtitle">Let Me Down Slowly</div>`,
        poster: "https://iili.io/J7ofSQs.jpg",
        source: "https://audio.jukehost.co.uk/3RiGbVXkdaUion90z7KfVyrwHcWCtQ6p"
    },
    {
        id: 31,
        songName: `Tera Zikr <div class="subtitle">Darshan Raval</div>`,
        poster: "https://iili.io/J7oqrDF.jpg",
        source: "https://audio.jukehost.co.uk/eiY71AyFbwSLAhjjws9q6DoTwdW99tnN"
    },
    {
        id: 32,
        songName: `Dooniya Choor Doon<div class="subtitle">Darshan Raval</div>`,
        poster: "https://iili.io/J7oq6og.jpgg",
        source: "https://audio.jukehost.co.uk/VAzjan849mAGk5CL7vWGxJUvzkzFoXlA"
    },
    {
        id: 33,
        songName: `Love Me Thoda Aur<div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oxXGn.jpg",
        source: "https://audio.jukehost.co.uk/8NNGRYeng55o7sbaWWw0T0IiUodCQRBL"
    },
    {
        id: 34,
        songName: `Tera Hoone Laga Hoon<div class="subtitle">Stebin Ben</div>`,
        poster: "https://iili.io/J7oqgN1.jpg",
        source: "https://audio.jukehost.co.uk/JZEoRcOqLfBaYHxkB1n05UKf6QbkzwGg"
    },
    {
        id: 35,
        songName: `Deewane Hum Nahi Nahi Hote<div class="subtitle">Aditya A</div>`,
        poster: "https://iili.io/J7oqUAP.jpg",
        source: "https://audio.jukehost.co.uk/pLhIzKikcKD8a8BiGnYxnKNTp4lGgkPh"
    },
    {
        id: 36,
        songName: `Iktara <div class="subtitle">Arijit Singh</div>`,
        poster: "https://iili.io/J7oo1se.jpg",
        source: "https://audio.jukehost.co.uk/UXQFX5GzEd8iMg7NiVAr5UNeTG4yGhnU"
    },
    {
        id: 37,
        songName: `Is Qadar<div class="subtitle">Darshan Raval</div>`,
        poster: "https://iili.io/J7oqPVa.jpg",
        source: "https://audio.jukehost.co.uk/cW9Bu4HTC7KzO0qc2R2Nl6nuPRbCwM52"
    },
    {
        id: 38,
        songName: `Judaiyaan<div class="subtitle">Darshan Raval</div>`,
        poster: "https://iili.io/J7oCa24.jpg",
        source: "https://audio.jukehost.co.uk/YX0FLODHP2ZKlVBqcZxOoxQoqjk2RMht"
    },
    {
        id: 39,
        songName: `Pachataoge <div class="subtitle">Arijit Singh`,
        poster: "https://iili.io/J7ooM0b.jpg",
        source: "https://audio.jukehost.co.uk/s3Rx2Bm48jf3aewcZS0dR1OWQ6NiHC6U"
    },
    {
        id: 40,
        songName: `Piya Re<div class="subtitle">Darshan Raval</div>`,
        poster: "https://iili.io/J7oClv2.jpg",
        source: "https://audio.jukehost.co.uk/FbXzB7XqHhQdMNke6s4sp0IvQZZlUK35"
    },
    {
        id: 41,
        songName: `Lajaawab 2 <div class="subtitle">Taimur</div>`,
        poster: "https://iili.io/J7oC74f.jpg",
        source: "https://audio.jukehost.co.uk/baVmfVFHZPy8pJkay8P4enduzsx7G7qP"
    },
    {
        id: 42,
        songName: `Tu Hai Kahan - Female Version<div class="subtitle">Shuddhi</div>`,
        poster: "https://iili.io/J7oCcYl.jpg",
        source: "https://audio.jukehost.co.uk/AxCvOTnGQ1GjUOgFdhLW2J8iOSL7sAGl"
    },
    {
        id: 43,
        songName: `Alag Aasman<div class="subtitle">Anuv Jain</div>`,
        poster: "https://iili.io/J7oC0pS.jpg",
        source: "https://audio.jukehost.co.uk/bHfmGgelpmi8hhw6IlDCZUKQiwTvyrBk"
    },    
    {
        id: 44,
        songName: `Chaand<div class="subtitle">BraveWorld</div>`,
        poster: "https://iili.io/J7onJa4.jpg",
        source: "https://audio.jukehost.co.uk/5sdxNmGp4ylnuzHtLO9FkSWnql7v5FK6"
    },
    {
        id: 45,
        songName: `Paagal Sa Hoon Bandha <div class="subtitle">AK Luke</div>`,
        poster: "https://iili.io/J7ond8l.jpg",
        source: "https://audio.jukehost.co.uk/lfTg1OJEWI7PZKvNDZIPde1EtL4COYIF"
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
