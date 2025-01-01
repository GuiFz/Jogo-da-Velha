let casas = [...document.getElementsByClassName("casas")];
let atual = 0;
let pontosX = 0;
let pontosO = 0;

function el(referencia) {
    //testando função para simplificar codigo
    return document.querySelector(referencia).innerText;
}
function vezDe(){
    if (atual % 2 === 0) {
        setTimeout(function(){
            document.getElementById("fundoLabel").style.animation = "500ms mudarVezX forwards";        
        }, 400)        
    } else {
        setTimeout(function(){
            document.getElementById("fundoLabel").style.animation = "500ms mudarVezO forwards";        
        }, 400)
    }
}


function vitoriaX() {
    function ponto(){
        pontosX++;
        document.getElementById("pontosX").innerHTML = pontosX;
    }

    const diagonal1 = el("#casa1") === "X" && el("#casa5") === "X" && el("#casa9") === "X";
    const diagonal2 = el("#casa7") === "X" && el("#casa5") === "X" && el("#casa3") === "X";
    const horizontal = el("#casa4") === "X" && el("#casa5") === "X" && el("#casa6") === "X";
    const horizontalT = el("#casa1") === "X" && el("#casa2") === "X" && el("#casa3") === "X";
    const horizontalB = el("#casa7") === "X" && el("#casa8") === "X" && el("#casa9") === "X";
    const colunaL = el("#casa1") === "X" && el("#casa4") === "X" && el("#casa7") === "X";
    const colunaR = el("#casa3") === "X" && el("#casa6") === "X" && el("#casa9") === "X";
    const coluna = el("#casa2") === "X" && el("#casa5") === "X" && el("#casa8") === "X";

    if (diagonal1) {
        document.getElementById("casa1").style.color = "#0F0";
        document.getElementById("casa5").style.color = "#0F0";
        document.getElementById("casa9").style.color = "#0F0";
        ponto();
        return true;
    } else if (diagonal2) {
        document.getElementById("casa3").style.color = "#0F0";
        document.getElementById("casa5").style.color = "#0F0";
        document.getElementById("casa7").style.color = "#0F0";
        ponto();
        return true;
    } else if (horizontal) {
        document.getElementById("casa4").style.color = "#0F0";
        document.getElementById("casa5").style.color = "#0F0";
        document.getElementById("casa6").style.color = "#0F0";
        ponto();
        return true;
    } else if (horizontalT) {
        document.getElementById("casa1").style.color = "#0F0";
        document.getElementById("casa2").style.color = "#0F0";
        document.getElementById("casa3").style.color = "#0F0";
        ponto();
        return true;
    } else if (horizontalB) {
        document.getElementById("casa7").style.color = "#0F0";
        document.getElementById("casa8").style.color = "#0F0";
        document.getElementById("casa9").style.color = "#0F0";
        ponto();
        return true;
    } else if (colunaL) {
        document.getElementById("casa1").style.color = "#0F0";
        document.getElementById("casa4").style.color = "#0F0";
        document.getElementById("casa7").style.color = "#0F0";
        ponto();
        return true;
    } else if (colunaR) {
        document.getElementById("casa3").style.color = "#0F0";
        document.getElementById("casa6").style.color = "#0F0";
        document.getElementById("casa9").style.color = "#0F0";
        ponto();
        return true;
    } else if (coluna) {
        document.getElementById("casa2").style.color = "#0F0";
        document.getElementById("casa5").style.color = "#0F0";
        document.getElementById("casa8").style.color = "#0F0";
        ponto();
        return true;
    } else {
        return false
    }

}

function vitoriaO() {
    function ponto(){
        pontosO++;
        document.getElementById("pontosO").innerHTML = pontosO;
    }

    const diagonal1 = el("#casa1") === "O" && el("#casa5") === "O" && el("#casa9") === "O";
    const diagonal2 = el("#casa7") === "O" && el("#casa5") === "O" && el("#casa3") === "O";
    const horizontal = el("#casa4") === "O" && el("#casa5") === "O" && el("#casa6") === "O";
    const horizontalT = el("#casa1") === "O" && el("#casa2") === "O" && el("#casa3") === "O";
    const horizontalB = el("#casa7") === "O" && el("#casa8") === "O" && el("#casa9") === "O";
    const colunaL = el("#casa1") === "O" && el("#casa4") === "O" && el("#casa7") === "O";
    const colunaR = el("#casa3") === "O" && el("#casa6") === "O" && el("#casa9") === "O";
    const coluna = el("#casa2") === "O" && el("#casa5") === "O" && el("#casa8") === "O";

    if (diagonal1) {
        document.getElementById("casa1").style.color = "#0F0";
        document.getElementById("casa5").style.color = "#0F0";
        document.getElementById("casa9").style.color = "#0F0";
        ponto();
        return true;
    } else if (diagonal2) {
        document.getElementById("casa3").style.color = "#0F0";
        document.getElementById("casa5").style.color = "#0F0";
        document.getElementById("casa7").style.color = "#0F0";
        ponto();
        return true;
    } else if (horizontal) {
        document.getElementById("casa4").style.color = "#0F0";
        document.getElementById("casa5").style.color = "#0F0";
        document.getElementById("casa6").style.color = "#0F0";
        ponto();
        return true;
    } else if (horizontalT) {
        document.getElementById("casa1").style.color = "#0F0";
        document.getElementById("casa2").style.color = "#0F0";
        document.getElementById("casa3").style.color = "#0F0";
        ponto();
        return true;
    } else if (horizontalB) {
        document.getElementById("casa7").style.color = "#0F0";
        document.getElementById("casa8").style.color = "#0F0";
        document.getElementById("casa9").style.color = "#0F0";
        ponto();
        return true;
    } else if (colunaL) {
        document.getElementById("casa1").style.color = "#0F0";
        document.getElementById("casa4").style.color = "#0F0";
        document.getElementById("casa7").style.color = "#0F0";
        ponto();
        return true;
    } else if (colunaR) {
        document.getElementById("casa3").style.color = "#0F0";
        document.getElementById("casa6").style.color = "#0F0";
        document.getElementById("casa9").style.color = "#0F0";
        ponto();
        return true;
    } else if (coluna) {
        document.getElementById("casa2").style.color = "#0F0";
        document.getElementById("casa5").style.color = "#0F0";
        document.getElementById("casa8").style.color = "#0F0";
        ponto();
        return true;
    } else {
        return false
    }
}

function empate() {
    let casasPreenchidas = 0;
    casas.map((e) => {
        if (e.innerText !== "") {
            casasPreenchidas++;
        }
    })
    if (casasPreenchidas === 9) {
        return true;
    }
}

casas.map(function (element) {
    element.addEventListener("click", (casa) => {
        if (casa.target.innerText === "") {
            if (atual % 2 === 0) {
                casa.target.innerText = "X";
                atual++;
            } else {
                casa.target.innerText = "O";
                atual++;
            }
        }
        if (vitoriaX()) {
            setTimeout(function () {
                casas.map((e) => e.innerText = "")
                console.log("* Jogador (X) Venceu *");
                casas.map((e) => e.style.color = "#FFF")
            }, 1000);
        } else if (vitoriaO()) {
            setTimeout(function () {
                console.log("* Jogador (O) Venceu *");
                casas.map((e) => e.innerText = "")
                casas.map((e) => e.style.color = "#FFF")
            }, 1000);
        } else if (empate()) {
            setTimeout(function () {
                console.log("* Deu Velha *");
                casas.map((e) => e.innerText = "")
            }, 1000);
        }
        vezDe();
    });
})
