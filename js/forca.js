let tentativas = 6
let listaDinamica = [] //Vai pegar as letras individualmente
let palavraSecretaCategoria
let palavraSecretaSorteada //toda string/palavra se comporta como array no javascript (cada letra é um indice)
const palavras = [
    //Repetir 50 vezes
    //Lugares
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002 = {
        nome: "BRASIL",
        categoria: "LUGARES"
    },
    palavra003 = {
        nome: "PORTUGAL",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "FRANCA",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "URUGUAI",
        categoria: "LUGARES"
    },
    palavra006 = {
        nome: "CHINA",
        categoria: "LUGARES"
    },
    palavra007 = {
        nome: "INDIA",
        categoria: "LUGARES"
    },
    palavra008 = {
        nome: "ALEMANHA",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "ISRAEL",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "TURQUIA",
        categoria: "LUGARES"
    },
    //Aves
    palavra011 = {
        nome: "GALINHA",
        categoria: "AVES"
    },
    palavra012 = {
        nome: "MARRECO",
        categoria: "AVES"
    },
    palavra013 = {
        nome: "PELICANO",
        categoria: "AVES"
    },
    palavra014 = {
        nome: "PERU",
        categoria: "AVES"
    },
    palavra015 = {
        nome: "POMBA",
        categoria: "AVES"
    },
    palavra016 = {
        nome: "ANDORINHA",
        categoria: "AVES"
    },
    palavra017 = {
        nome: "ARARA",
        categoria: "AVES"
    },
    palavra018 = {
        nome: "CALOPSITA",
        categoria: "AVES"
    },
    palavra019 = {
        nome: "URUBU",
        categoria: "AVES"
    },
    palavra020 = {
        nome: "PERIQUITO",
        categoria: "AVES"
    }
    
]

criarPalavrasSecreta()
function criarPalavrasSecreta() { //gerando número aleatório entre 0 e 50(tamanho do array)
    const indexPalavra = parseInt(Math.random() * palavras.length)
    palavraSecretaSorteada = palavras[indexPalavra].nome
    palavraSecretaCategoria = palavras[indexPalavra].categoria
    console.log(palavraSecretaCategoria)
    console.log(palavraSecretaSorteada)
}
MontarPalavraNaTela()
function MontarPalavraNaTela(){ //Mostrando a categoria e palavra na tela
    const categoria = document.getElementById('categoria')
    categoria.innerHTML = palavraSecretaCategoria

    const palavraTela = document.getElementById("palavra-secreta")
    palavraTela.innerHTML = ""

    for(i = 0; i < palavraSecretaSorteada.length; i++) { 
        if(listaDinamica[i] == undefined){ //Se a lista dinamica estiver vazia...
            listaDinamica[i] = "&nbsp;"//"&nbsp;" gera um espaço no html
            palavraTela.innerHTML = palavraTela.innerHTML + `<div class='letras'>${listaDinamica[i]}</div>`
        }
        else {
            palavraTela.innerHTML = palavraTela.innerHTML + `<div class='letras'>${listaDinamica[i]}</div>`
        }

    }
}

function verificaLetraEscolhida(letra){ //observa qual letra foi selecionada
    document.getElementById("tecla-" + letra).disabled = true //desabilita botão depois de clicado
    if(tentativas > 0) {//se o número de tentativas for maior que 0 muda a cor da tecla
        mudarStyleLetra("tecla-" + letra)
        comparaListas(letra)
        MontarPalavraNaTela()

    }
}

function mudarStyleLetra(tecla) {//muda cor da letra
    document.getElementById(tecla).style.background = "#ff7ffd"
    //document.getElementById(tecla).style.color = "Black" //se eu quisesse que o texto mudasse de cor
}

function comparaListas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra) //mostra se tem o elemento no array e retorna em que índice ele está
    if(pos < 0) { // se não tiver diminui o número de tentativas
        tentativas--
        console.log(tentativas)
        carregaImagemForca()
        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez!! A palavra secreta era <br>" + palavraSecretaSorteada)
        }
    }
    else {
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra
            }
        }
    }

    let vitoria = true
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false
        }
    }

    if(vitoria == true){
        abreModal("PARABÉNS!", "Você venceu!")
        tentativas = 0
    }
}


function carregaImagemForca(){
    switch(tentativas){
        case 5: //se eu tiver 5 tentativas, aparecer imagem a baixo
            document.getElementById('imagem').style.background = "url('./img/forca01.png')"
            break
        case 4:
            document.getElementById('imagem').style.background = "url('./img/forca02.png')"
            break
        case 3:
            document.getElementById('imagem').style.background = "url('./img/forca03.png')"
            break
        case 2:
            document.getElementById('imagem').style.background = "url('./img/forca04.png')"
            break
        case 1:
            document.getElementById('imagem').style.background = "url('./img/forca05.png')"
            break
        case 0:
            document.getElementById('imagem').style.background = "url('./img/forca06.png')"
            break
        
        default:
            document.getElementById('imagem').style.background = "url('./img/forca.png')"
            break
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById('exampleModalLabel')
    modalTitulo.innerText = titulo

    let modalBody = document.getElementById('modalBody')
    modalBody.innerHTML = mensagem
    $("#myModal").modal({
        show: true
    })
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){//variável tem envento de escuta
    location.reload() //recarrega a página
}) 