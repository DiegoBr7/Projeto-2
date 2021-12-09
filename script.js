let musicas = [

    {titulo:'Menor do corre1', artista:'MC Kevin', src:'musicas/MC KEVIN.mp3', img:'imagens/download (6).jpg'},
    {titulo:'Menor do corre2', artista:'MC Kevin', src:'musicas/MC KEVIN.mp3', img:'imagens/download (6).jpg'},
    {titulo:'Menor do corre3', artista:'MC Kevin', src:'musicas/MC KEVIN.mp3', img:'imagens/download (6).jpg'}

];

let musica = document.querySelector('audio');
let indexMusica = 0 ;


let duracaoMusica = document.querySelector('.fim'); 
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');



duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

//Events
document.querySelector(".botao-play ").addEventListener('click', tocarMusica);

document.querySelector(".pause ").addEventListener('click', pauseMusica);

musica.addEventListener('timeupdate', atualizarBarra)

document.querySelector('.anterior').addEventListener('click', ()=>{
    indexMusica--; 
    reenderizarMusica(indexMusica);
} );
document.querySelector('.proximo').addEventListener('click', ()=>{
    indexMusica++;
    reenderizarMusica(indexMusica);
} );


//Funcoes

function reenderizarMusica(index){
  musica.setAttribute('src',musicas[index].src);
  musica.addEventListener('loadeddata', ()=>{
       nomeMusica.textContent = musicas[index].titulo;
       nomeArtista.textContent = musicas[index].artista;
       imagem.src = musicas[index].img;
       duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
  } );
}

function tocarMusica(){
    musica.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pauseMusica(){
    musica.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';

}
function atualizarBarra(){
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%' ;
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = Math.floor(musica.currentTime)
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor (segundos / 60);
    let campoSegundos = segundos % 60 ;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos+':'+campoSegundos;
}
