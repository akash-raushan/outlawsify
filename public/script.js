const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105,105,105,.0)'
    })
}

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill')
        el.classList.remove('bi-pause-circle-fill')
        el.classList.remove('color')
    })
}

function updatePlaylistPlay(id) {
    const playListPlayElement = document.getElementById(id);

    if (playListPlayElement) {
        makeAllPlays();
        playListPlayElement.classList.remove('bi-play-circle-fill');
        playListPlayElement.classList.add('bi-pause-circle-fill');
        playListPlayElement.classList.add('color');
    }
}

document.addEventListener('keypress', (event) => {
    if (input !== document.activeElement) {
        event.preventDefault()
    }
})
// =========================PLACE SONGS  AUTOMATICALLY==========================

const menuSongList = document.getElementsByClassName('menu-song')[0];
const songSideSongList = document.getElementsByClassName('pop-song')[0];
menuSongList.innerHTML = '';
songSideSongList.innerHTML = '';
var menuSideSongNumber = Math.floor((songs.length) / 2)

songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.classList.add('songItem');

    if (song.id < menuSideSongNumber) {
        li.innerHTML = `            
            <span>${song.id}</span>
            <img src="${song.poster}"   loading="lazy" alt="">
            <h5 class="songName" id="extraplay${song.id}">${song.songName}
            </h5>          
            <i class="bi bi-play-circle-fill playListPlay" id="${song.id}"></i>          
          `;
        menuSongList.appendChild(li);
    } else {
        li.innerHTML = `
      <div class="img-play imgPlay">
          <img class="imgPlay" id="extraplay${song.id}" src="${song.poster}" loading="lazy"  alt="">
          <i class="bi bi-play-circle-fill playListPlay" id="${song.id}"></i>
      </div>
      <h5>${song.songName}
      </h5>
      `;
        songSideSongList.appendChild(li);
    }


});



// ==================SPEED SLOW AND FAST============
var body = document.querySelector('body')
body.addEventListener('keypress', function (event) {
    if (input !== document.activeElement) {
        speedSlow(event.key)
    }
})

function speedSlow(key) {
    switch (key) {
        case "-":
            if (music.playbackRate == 0.5) {
                //PASS 
            } else {
                music.playbackRate -= .5
            }
            break
        case "+":
            music.playbackRate += .5

        default:
    }
}


// MENU SIDE SCROLL USING KEYS

var menu_side = document.getElementsByClassName('menu-side')[0]

body.addEventListener('keydown', function (event) {
    if (input !== document.activeElement) {
        ctrlScrollUsingKeys(event.key);
    }
})
const menu_song = document.getElementsByClassName('menu-song')[0]
function ctrlScrollUsingKeys(key) {
    if (key.startsWith('Arrow')) {
        event.preventDefault();


        const isLeftArrow = key === "ArrowLeft";
        const isRightArrow = key === "ArrowRight";
        const isUpArrow = key === "ArrowUp";
        const isDownArrow = key === "ArrowDown";
        const isShiftPressed = event.shiftKey
        const isCtrlPressed = event.ctrlKey


        if (isCtrlPressed) {
            // PASS
        } else if (!isCtrlPressed) {
            if (isShiftPressed) {
                if (isLeftArrow) {
                    pop_song_left.click()
                } else if (isRightArrow) {
                    pop_song_right.click()
                } else if (isDownArrow) {
                    document.getElementsByClassName('menu-song')[0].scrollTop += 200
                } else if (isUpArrow) {
                    document.getElementsByClassName('menu-song')[0].scrollTop -= 200
                }
            }
        } else {
            // PASS
        }
    }
}



// ==================NEXT AND BACK SONG BY KEYS=================

var body = document.querySelector('body')
body.addEventListener('keypress', function (event) {
    const key = event.key.toLowerCase();
    if (input !== document.activeElement) {
        previous(event.key.toLowerCase())
    }
})



function previous(key) {
    let a = shuffle.innerHTML;
    switch (key) {
        case "p":
            backSong()
            break
        case "n":
            if (a == 'next') {
                nextSong()
            } else if (a == 'random') {
                randomSong()
            } else if (a == 'repeat') {
                nextSong()
            }
        default:
    }
}




// ================================PAUSE USING SPACEBAR============================

var body = document.querySelector('body')
body.addEventListener('keypress', function (event) {
    if (input !== document.activeElement) {
        // Continue with other functionality only if the focus is not on the search input
        workByButons(event.key);
    }
})


// function Play() {
//     music.play()
//     wave.classList.add('active1')
//     masterPlay.classList.add('bi-pause-circle-fill')
//     masterPlay.classList.remove('bi-play-circle-fill')
// }
// function Pause() {
//     music.pause()
//     wave.classList.remove('active1')
//     masterPlay.classList.remove('bi-pause-circle-fill')
//     masterPlay.classList.add('bi-play-circle-fill')
// }

function workByButons(key) {
    switch (key) {
        case " ":
            if (music.paused) {
                masterPlay.click()
                // event.preventDefault();
            } else {
                masterPlay.click()
                // event.preventDefault();
            }
        default:

    }
}


// =======================VOLUME CONTROL USING KEYS===============================

body.addEventListener('keydown', function (event) {
    if (input !== document.activeElement) {
        adjustVolume(event.key);
    }
});

function adjustVolume(key) {
    let currentVolume = music.volume;
    const isCtrlPressed = event.ctrlKey

    if (isCtrlPressed) {
        // PASS
    } else if (!isCtrlPressed) {
        if (key === "ArrowUp") {
            currentVolume = Math.min(1, currentVolume + 0.1);
        } else if (key === "ArrowDown") {
            currentVolume = Math.max(0, currentVolume - 0.1);
        }
    } else {
        // PASS
    }


    music.volume = currentVolume;
    let volBar = document.getElementsByClassName('vol-bar')[0];
    let volDot = document.getElementById('vol-dot');
    let volValue = currentVolume * 100;

    volBar.style.width = `${volValue}%`;
    volDot.style.left = `${volValue}%`;

    updateVolumeIcon(currentVolume);
}

function updateVolumeIcon(volume) {
    let volIcon = document.getElementById('vol-icon');

    if (volume === 0) {
        volIcon.classList.remove('bi-volume-up-fill', 'bi-volume-down-fill');
        volIcon.classList.add('bi-volume-mute-fill');
    } else if (volume > 0 && volume <= 0.5) {
        volIcon.classList.remove('bi-volume-up-fill', 'bi-volume-mute-fill');
        volIcon.classList.add('bi-volume-down-fill');
    } else {
        volIcon.classList.remove('bi-volume-down-fill', 'bi-volume-mute-fill');
        volIcon.classList.add('bi-volume-up-fill');
    }
}

// =====================CTRL & U==================

body.addEventListener('keydown', function (event) {
    ctrlUAction(event);
    ctrlFAction(event)
});

function ctrlUAction(event) {
    const key = event.key.toLowerCase();
    const isCtrlPressed = event.ctrlKey;

    if (key === "u" && isCtrlPressed) {
        // Call your method for Ctrl + U here
        event.preventDefault();
        // alert(36)
    }
}

function ctrlFAction(event){
    const key=event.key.toLowerCase();
    const isCtrlPressed = event.ctrlKey;

    if(key=="f" && isCtrlPressed){
        event.preventDefault()
        document.getElementById('input').focus()
    }

}

// =====================RIGHT CLICK & CTRL====================


document.addEventListener('keydown', function (event) {
    if (event.ctrlKey || event.metaKey) {
        document.addEventListener('click', handleCtrlClick, { once: true });
        function handleCtrlClick(e) {
            e.preventDefault();
            // console.log('Custom action on CTRL + Click');
        }
    }
});

// =====================CONTOL MUSIC DURATION USING LEFT,RIGHT ARROW BUTTON==============

body.addEventListener('keydown', function (event) {
    if (input !== document.activeElement) {
        adjustMedia(event.key);
    }
});

function adjustMedia(key) {
    if (key.startsWith("Arrow")) {
        event.preventDefault();

        const isLeftArrow = key === "ArrowLeft";
        const isRightArrow = key === "ArrowRight";
        const isShiftPressed = event.shiftKey;
        const isCtrlPressed = event.ctrlKey


        if (isCtrlPressed && isRightArrow) {
            let a = shuffle.innerHTML;
            if (a == 'next' || a == 'repeat') {
                nextSong()
            } else if (a == 'random') {
                randomSong()
            }
        } else if (isCtrlPressed && isLeftArrow) {
            backSong()
        }

        if (isShiftPressed) {
            // PASS
        } else if (!isShiftPressed) {
            if (isLeftArrow || isRightArrow) {
                const durationStep = 10;
                const currentDuration = music.currentTime;
                if (isLeftArrow) {
                    music.currentTime = Math.max(0, currentDuration - durationStep);
                } else if (isRightArrow) {
                    music.currentTime = Math.min(music.duration, currentDuration + durationStep);
                }
            }
        } else {
            // PASS
        }

    }
}


// ==================================MUSIC SEARCH============================
// const fs = require('fs');

// // Function to read the contents of a file and return its content as an array
// function readSongsFromFile(fileName) {
//     const filePath = `./${fileName}`;
//     try {
//         const data = fs.readFileSync(filePath, 'utf8');
//         // Assuming each song is separated by a newline character
//         return data.split('\n').filter(song => song.trim() !== '');
//     } catch (err) {
//         console.error(`Error reading ${fileName}: ${err}`);
//         return [];
//     }
// }

// // List of file names containing songs
// const fileNames = ['darshan old without hosted img.js', 'arijit old without hosted img.js', 'jalraj old without hosted img.js', 'hustle old without hosted img.js'];

// // Combine songs from all files
// const allSongs = fileNames.reduce((acc, fileName) => {
//     const songsFromFile = readSongsFromFile(fileName);
//     return [...acc, ...songsFromFile];
// }, []);

// console.log(allSongs)
// module.exports = allSongs;


let search_results = document.getElementsByClassName('search-results')[0]

songs.forEach(element => {
    const { id, songName, poster } = element

    // console.log(id)
    let card = document.createElement('a')
    card.classList.add('card')
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                                
                                </div>
                                <i class="bi bi-play-circle-fill playListPlay searchplay" id="${id}"></i> 
                                        
    `
    search_results.appendChild(card)
});

let input = document.getElementById('input')
let card = document.getElementsByClassName('card')[0]

input.addEventListener('keyup', () => {

    event.preventDefault();
    let input_value = input.value.toUpperCase()
    let items = search_results.getElementsByTagName('a')
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0]
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = 'flex'
        } else {
            items[index].style.display = 'none'
        }
        if (input.value == 0) {
            search_results.style.display = 'none'
        } else {
            search_results.style.display = ''
        }
    }
    search_results.addEventListener('click', () => {
        search_results.style.display = 'none';
        input.value = ""
    })

})


// ================================================PLAY BY MASTER PLAY BUTTON=======================================
play = document.getElementById('play')

play.addEventListener('click', () => {
    index = 1
    music.play()
    masterPlay.classList.add('bi-pause-circle-fill')
    masterPlay.classList.remove('bi-play-circle-fill')
})


let masterPlay = document.getElementById('masterPlay')
let wave = document.getElementById('wave')

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play()
        wave.classList.add('active1')
        masterPlay.classList.remove('bi-play-circle-fill')
        masterPlay.classList.add('bi-pause-circle-fill')
    }
    else {
        music.pause();
        wave.classList.remove('active1')
        masterPlay.classList.add('bi-play-circle-fill')
        masterPlay.classList.remove('bi-pause-circle-fill')
    }
})


// ==============================================PLAY BY POSTER PLAY BUTTONS=========================================

let index = 0;

var playListPlayClickCount = 0;
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {

        index = el.target.id;
        const song = songs.find(item => item.id == index);
        if (song) {
            const { id, source, poster, songName } = song;
            updatePlaylistPlay(id)
            music.src = source;
            postar_master_play.src = poster;
            music.play();
            wave.classList.add('active1');
            masterPlay.classList.remove('bi-play-circle-fill');
            masterPlay.classList.add('bi-pause-circle-fill');
            download_music.href = source;
            title.innerHTML = songName;
            makeAllBackground()
        }
        return index;
    })
})

// ===================================PLAY BY SONG NAME & SONG POSTER=======================================

Array.from(document.getElementsByClassName('songName')).forEach((el) => {
    el.addEventListener('click', (ele) => {
        index = ele.target.id.replace('extraplay', '');
        const song = songs.find(item => item.id == index);
        if (song) {
            const { id, source, poster, songName } = song;
            updatePlaylistPlay(index);

            music.src = source;
            postar_master_play.src = poster;
            music.play();
            wave.classList.add('active1');
            masterPlay.classList.remove('bi-play-circle-fill');
            masterPlay.classList.add('bi-pause-circle-fill');
            download_music.href = source;
            title.innerHTML = songName;

            makeAllBackground()
            Array.from(document.getElementsByClassName('songItem'))[id - 1].style.background = 'rgb(105,105,105,.1)'
            return index;
        }
    })
})

Array.from(document.getElementsByClassName('imgPlay')).forEach((el) => {
    el.addEventListener('click', (ele) => {

        index = ele.target.id.replace('extraplay', '');
        // alert(index)
        const song = songs.find(item => item.id == index);
        if (song) {
            const { id, source, poster, songName } = song;
            // x=ele.target.id.replace('extraplay', '')
            updatePlaylistPlay(index);
            // alert(ele.target.id.replace('imgPlay', ''))

            music.src = source;
            postar_master_play.src = poster;
            music.play();
            wave.classList.add('active1');
            masterPlay.classList.remove('bi-play-circle-fill');
            masterPlay.classList.add('bi-pause-circle-fill');
            download_music.href = source;
            title.innerHTML = songName;

            makeAllBackground()
            Array.from(document.getElementsByClassName('songItem'))[id - 1].style.background = 'rgb(105,105,105,.1)'
            // makeAllPlays()
            // ele.target.classList.remove('bi-play-circle-fill')
            // ele.target.classList.add('bi-pause-circle-fill')
            // ele.target.classList.add('color')
            return index;
        }
    })
})



// =====================================================SONG SEEKBAR CONTROL==========================================

let currentStart = document.getElementById('currentStart')
let currentEnd = document.getElementById('currentEnd')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0]

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime
    let music_dur = music.duration
    let min1 = Math.floor(music_dur / 60)
    let sec1 = Math.floor(music_dur % 60)
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    // console.log(min1+':'+sec1)
    currentEnd.innerText = `${min1}:${sec1}`

    let min2 = Math.floor(music_curr / 60)
    let sec2 = Math.floor(music_curr % 60)
    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }
    // console.log(min2+':'+sec2)
    currentStart.innerText = `${min2}:${sec2}`

    let progessBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progessBar
    // console.log(seek.value);
    let seekbar = seek.value;
    // console.log(seekbar)
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}%`

    // if (music_curr == music_dur) {
    //     nextSong()
    // }
})
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100
})




// ===========================================VOLUME CONTROLE=====================================================

let vol_icon = document.getElementById('vol-icon')
let vol = document.getElementById('vol')
let vol_bar = document.getElementsByClassName('vol-bar')[0]
let vol_dot = document.getElementById('vol-dot')
var music_volume

function mute() {
    var music_volume = music.volume
    music.volume = 0
    vol_icon.classList.remove('bi-volume-up-fill')
    vol_icon.classList.remove('bi-volume-down-fill')
    vol_icon.classList.add('bi-volume-mute-fill')
    vol_bar.classList.add('opacity')
    // vol_bar.style.background="white"
    // vol_dot.style.background="white"
    // console.log(music_volume)
    return music_volume
}

function unMute() {
    // console.log(vol_a)
    music.volume = vol_a / 100
    vol_icon.classList.add('bi-volume-up-fill')
    vol_icon.classList.remove('bi-volume-down-fill')
    vol_icon.classList.remove('bi-volume-mute-fill')
    vol_bar.classList.remove('opacity')
    // vol_bar.style.background="#36e2ec"
    // vol_dot.style.background="#36e2ec"
}

var volClickCount = 0;
vol_icon.addEventListener('click', () => {
    volClickCount++;
    if (volClickCount % 2 == 0) {
        unMute()
    } else {
        mute()
    }
})

var vol_a = 100
vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.add('bi-volume-mute-fill')
        // vol_mute_icon.setAttribute('id', "vol-icon")
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.add('bi-volume-down-fill')
        vol_icon.classList.remove('bi-volume-mute-fill')
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.remove('bi-volume-mute-fill')
    }


    vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`
    vol_dot.style.left = `${vol_a}%`
    music.volume = vol_a / 100
    // console.log(vol_a)
    return vol_a
})



// ===============================NEXT & PREVIOUS SONG=================================

let back = document.getElementById('back')
let next = document.getElementById('next')

const backSong = () => {
    index -= 1
    if (index < 1) {
        index = (Array.from(document.getElementsByClassName('songItem')).length)
    }
    music.src = `${songs[index - 1].source}`
    postar_master_play.src = `${songs[index - 1].poster}`
    music.play()
    wave.classList.add('active1')
    masterPlay.classList.remove('bi-play-circle-fill')
    masterPlay.classList.add('bi-pause-circle-fill')
    title.innerHTML = `${songs[index - 1].songName}`
    download_music.href = `${songs[index - 1].source}`
    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,.1)'
    makeAllPlays()
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.remove('bi-play-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('bi-pause-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('color')
    const currentSongElement = document.getElementsByClassName('songItem')[index - 1];
    currentSongElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

back.addEventListener('click', () => {
    backSong()
})

const nextSong = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++
    }
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1
    }
    // index += 1
    music.src = `${songs[index - 1].source}`
    postar_master_play.src = `${songs[index - 1].poster}`
    music.play()
    wave.classList.add('active1')
    masterPlay.classList.remove('bi-play-circle-fill')
    masterPlay.classList.add('bi-pause-circle-fill')
    title.innerHTML = `${songs[index - 1].songName}`
    download_music.href = `${songs[index - 1].source}`
    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,.1)'
    makeAllPlays()
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.remove('bi-play-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('bi-pause-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('color')
    const currentSongElement = document.getElementsByClassName('songItem')[index - 1];
    currentSongElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

next.addEventListener('click', () => {
    let a = shuffle.innerHTML;
    if (a == 'next' || a == 'repeat') {
        nextSong()
    } else if (a == 'random') {
        randomSong()
    }
})









// ===========================================SLIDE BAR OF POP SONG & POP ARTIST===================================


// SONG SCROLLBARR
let pop_song_left = document.getElementById('pop-song-left')
let pop_song_right = document.getElementById('pop-song-right')
let pop_song = document.getElementsByClassName('pop-song')[0]

// alert('hello')

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})

// ARTISt SCROLLBARR
let pop_art_left = document.getElementById('pop-art-left')
let pop_art_right = document.getElementById('pop-art-right')
let Artist_bx = document.getElementsByClassName('Artist-bx')[0]

pop_art_right.addEventListener('click', () => {
    Artist_bx.scrollLeft += 330;
})

pop_art_left.addEventListener('click', () => {
    Artist_bx.scrollLeft -= 330;
})



Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


// music.play()

// ===============================================SONG SHUFFLE======================================================= 

let shuffle = document.getElementsByClassName('shuffle')[0]
// shuffle.innerHTML="next"

body.addEventListener('keypress', function (event) {
    const key = event.key.toLowerCase();
    if (input !== document.activeElement) {
        shuffle_by_key(event.key.toLowerCase())
    }
})

function shuffle_by_key(key) {
    let a = shuffle.innerHTML;
    switch (key) {
        case "s":
            shuffle.click()
            break
        default:
    }
}

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;
    // alert(a)
    // alert(1)
    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat')
            shuffle.classList.remove('bi-music-note-beamed')
            shuffle.classList.remove('bi-shuffle')
            shuffle.innerHTML = 'repeat'
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat')
            shuffle.classList.remove('bi-music-note-beamed')
            shuffle.classList.add('bi-shuffle')
            shuffle.innerHTML = 'random'
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat')
            shuffle.classList.add('bi-music-note-beamed')
            shuffle.classList.remove('bi-shuffle')
            shuffle.innerHTML = 'next'
            break;
        default:
            break;
    }
})




music.addEventListener('ended', () => {
    let b = shuffle.innerHTML
    if (b == 'next') {
        nextSong()
    } else if (b == 'repeat') {
        repeatSong()
    }
    else if (b == 'random') {
        randomSong()
    }
})

// if (shuffle.innerHTML == 'random') {
//     next.addEventListener('click', () => {
//         randomSong()
//     })
//     back.addEventListener('click', () => {
//         randomSong()
//     })
// }



const repeatSong = () => {
    index;
    music.src = `${songs[index - 1].source}`
    postar_master_play.src = `${songs[index - 1].poster}`
    music.play()
    wave.classList.add('active1')
    masterPlay.classList.remove('bi-play-circle-fill')
    masterPlay.classList.add('bi-pause-circle-fill')
    title.innerHTML = `${songs[index - 1].songName}`
    download_music.href = `${songs[index - 1].source}`
    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,.1)'
    makeAllPlays()
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.remove('bi-play-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('bi-pause-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('color')
    const currentSongElement = document.getElementsByClassName('songItem')[index - 1];
    currentSongElement.scrollIntoView({ behavior: 'smooth' });
}

const randomSong = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1)
    }
    music.src = `${songs[index - 1].source}`
    postar_master_play.src = `${songs[index - 1].poster}`
    music.play()
    wave.classList.add('active1')
    masterPlay.classList.remove('bi-play-circle-fill')
    masterPlay.classList.add('bi-pause-circle-fill')
    title.innerHTML = `${songs[index - 1].songName}`
    download_music.href = `${songs[index - 1].source}`
    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,.1)'
    makeAllPlays()
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.remove('bi-play-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('bi-pause-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('color')
    const currentSongElement = document.getElementsByClassName('songItem')[index - 1];
    currentSongElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


// ==================================MENU SIDE IN-OUT===============================================

let menu_list_active_button = document.getElementById('menu-list-active-button')
let menu_list_deactive_button = document.getElementById('menu-list-deactive-button')
menu_side = document.getElementsByClassName('menu-side')[0]
let song_side = document.getElementsByClassName('song-side')[0]

menu_list_deactive_button.style.display = 'none'

menu_list_active_button.addEventListener('click', () => {
    menu_side.style.transform = "unset"
    menu_list_active_button.style.display = 'none'
    menu_list_deactive_button.style.display = 'flex'
})


song_side.addEventListener('click', () => {
    menu_side.style.transform = "translateX(-100%)"
    menu_list_active_button.style.display = 'flex'
    menu_list_deactive_button.style.display = 'none'
})

menu_list_deactive_button.addEventListener('click', () => {
    menu_side.style.transform = "translateX(-100%)"
    menu_list_active_button.style.display = 'flex'
    menu_list_deactive_button.style.display = 'none'
})






// ================================================USER BUTTON=======================================
var userImg = document.getElementById('user-img');
var userInfo = document.getElementsByClassName('user-info')[0];
var myProfile = document.getElementById('my-profile')
var logOut = document.getElementById('logout')

document.addEventListener('click', (event) => {
    if (!userInfo.contains(event.target)) {
        userInfo.style.display = 'none';
        userClickCount = 0;
    }
});

myProfile.addEventListener('click', (event) => {
    userInfo.style.display = 'none';
    userClickCount = 0;
});
logOut.addEventListener('click', (event) => {
    userInfo.style.display = 'none';
    userClickCount = 0;
});

var userClickCount = 0;

userImg.addEventListener('click', (event) => {
    event.stopPropagation();
    userClickCount++;
    if (userClickCount % 2 === 0) {
        userInfo.style.display = 'none';
    } else {
        userInfo.style.display = 'grid';
    }
});








var loader = document.getElementById('preloader')
window.addEventListener('load', () => {
    loader.style.display = 'none'
})