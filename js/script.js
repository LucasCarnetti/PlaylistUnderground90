
let audio = document.getElementById('faixa');
let titulo = document.getElementById('musica');
let artista = document.getElementById('artista');
let imagem = document.getElementById('album');
let musicRange = document.getElementById('tempoRange');
let tempoComeco = document.getElementById('inicioMusica');
let tempoFim = document.getElementById('finalMusica');
let volume = document.getElementById('volumeRange');




let musics = [{
    songName: "Defeat",
    singer: "Afu-Ra",
    foto: "./music/imagesArtistas/Afu-Ra.jpeg",
    song: "./music/AfuRa.mp3"

},
{
    songName: "Baknaffek",
    singer: "Das EFX",
    foto: "./music/imagesArtistas/DasEFX.jpg",
    song: "./music/DasEFX.mp3"

},
{
    songName: "Shook Ones Pt. II",
    singer: "Mobb Deep",
    foto: "./music/imagesArtistas/Mobb Deep.jpg",
    song: "./music/MobbDeep.mp3"

},
{
    songName: "Im Alright  Forever (Verbal Assault)",
    singer: "Mop Top",
    foto: "./music/imagesArtistas/MopTop.jpg",
    song: "./music/MopTop.mp3"

},
{
    songName: "Da Mystery Of Chessboxin",
    singer: "Wu-Tang Clan",
    foto: "./music/imagesArtistas/wutangclan.jpg",
    song: "./music/WuTangClan.mp3"

}

]

let index = 0;

function player(index){
    titulo.innerText = musics[index].songName;
    artista.innerText = musics[index].singer;
    imagem.src = musics[index].foto;
    audio.src = musics[index].song

    audio.load();
}
player(index);
let playing = false;

function playPause(){
    if(playing == false){
        audio.play();
        playpause.setAttribute('src', './images/pause.png')
        return playing = true;
    }
    else{
        audio.pause();
        playpause.setAttribute('src', './images/play.png');
        return playing = false;

    }
}
function avancarFaixa(){
    if(index == musics.length){
    index = 0;
    player(index);
    playing = false;
    playPause();
    }
    else{
    index++;
    player(index);
    playing = false;
    playPause();
    }
}

function voltarFaixa(){
    if(index == 0){
        index = musics.length;
        player(index);
        playing = false;
        playPause();
        }
        else{
        index--;
        player(index);
        playing = false;
        playPause();
        }

}
function avancar(){
    audio.currentTime += 5;
}
function voltar(){
    audio.currentTime -= 5;
}
function mudarFinal(){
    let tempoTotal = audio.duration;
    let tempoAtual = audio.currentTime;
        if(tempoAtual == tempoTotal){
            avancarFaixa();
        }
}

function music1(){
    index = 0;
    player(index);
    playing = false;
    playPause();

}
function music2(){
    index = 1;
    player(index);
    playing = false;
    playPause();

}
function music3(){
    index = 2;
    player(index);
    playing = false;
    playPause();

}
function music4(){
    index = 3;
    player(index);
    playing = false;
    playPause();

}
function music5(){
    index = 4;
    player(index);
    playing = false;
    playPause();

}

musicRange.addEventListener('input', tempo);


function tempo(){
    audio.currentTime = musicRange.value
}
function tempoAtual(){
    musicRange.max = audio.duration;
    musicRange.value = audio.currentTime;
    
    let minutos = Math.floor(audio.currentTime/60);
    let segundos = Math.round(audio.currentTime%60);
    let minutosTotal = Math.floor(audio.duration/60);
    let segundosTotal = Math.round(audio.duration%60);

    if(segundos < 10){
        segundos = '0' + segundos
    }
    if(segundosTotal < 10){
        segundosTotal = '0'+segundosTotal
    }
    
    
    tempoComeco.innerHTML = minutos + ':' + segundos;
    tempoFim.innerHTML = +minutosTotal + ':' +  segundosTotal;

    mudarFinal();
}
setInterval(tempoAtual, 1000)