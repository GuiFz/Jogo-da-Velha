const squares = [...document.getElementsByClassName("squares")];
let stopPlay = false;
let moves = 0;
let nextPlayer = "X";
let pointsX = 0;
let pointsO = 0;

// ============ Jogada ============
squares.forEach(function (element) {
    element.addEventListener("click", function () {
        if (!stopPlay) {
            if (element.getElementsByTagName("strong")[0].textContent === "") {
                moves ++;
                if (nextPlayer === "X") {
                    element.getElementsByTagName("strong")[0].textContent = "X";
                    nextPlayer = "O";
                    document.getElementById("pointsX").classList.remove("next");
                    document.getElementById("pointsO").classList.add("next");
                }
                else {
                    element.getElementsByTagName("strong")[0].textContent = "O";
                    nextPlayer = "X";
                    document.getElementById("pointsO").classList.remove("next");
                    document.getElementById("pointsX").classList.add("next");
                }

                verification();
            }

        }

    })
});
// ============ Jogada ============

// ============ Vitoria/Empate ============

function verification() {
    const possibilities = [
        // ->
        squares[0].textContent === squares[1].textContent && squares[2].textContent === squares[0].textContent && squares[0].textContent !== "" && squares[1].textContent !== "" && squares[2].textContent !== "", //0
        squares[3].textContent === squares[4].textContent && squares[5].textContent === squares[3].textContent && squares[3].textContent !== "" && squares[4].textContent !== "" && squares[5].textContent !== "", //1
        squares[6].textContent === squares[7].textContent && squares[8].textContent === squares[6].textContent && squares[6].textContent !== "" && squares[7].textContent !== "" && squares[8].textContent !== "", //2
        // V
        squares[0].textContent === squares[3].textContent && squares[6].textContent === squares[0].textContent && squares[0].textContent !== "" && squares[3].textContent !== "" && squares[6].textContent !== "", //3
        squares[1].textContent === squares[4].textContent && squares[7].textContent === squares[1].textContent && squares[1].textContent !== "" && squares[4].textContent !== "" && squares[7].textContent !== "", //4
        squares[2].textContent === squares[5].textContent && squares[8].textContent === squares[2].textContent && squares[2].textContent !== "" && squares[5].textContent !== "" && squares[8].textContent !== "", //5
        // X
        squares[0].textContent === squares[4].textContent && squares[8].textContent === squares[0].textContent && squares[0].textContent !== "" && squares[4].textContent !== "" && squares[8].textContent !== "", //6
        squares[2].textContent === squares[4].textContent && squares[6].textContent === squares[2].textContent && squares[2].textContent !== "" && squares[4].textContent !== "" && squares[6].textContent !== "", //7
    ]

    // ============ Pontos ============
    if (possibilities[0] || possibilities[1] || possibilities[2] || possibilities[3] || possibilities[4] || possibilities[5] || possibilities[6] || possibilities[7] || possibilities[8]) {
        stopPlay = true;
        setTimeout(() => { stopPlay = false }, 2500);

        if (nextPlayer === "X") {
            pointsO++;
        } else {
            pointsX++;
        }

        document.getElementById("pointsX").textContent = pointsX;
        document.getElementById("pointsO").textContent = pointsO;
    }
    // ============ Pontos ============

    if (possibilities[0]) {

        const arrayTemp = [squares[0], squares[1], squares[2]];

        arrayTemp.forEach(function (element) {
            element.classList.add("checkedSquare");
            setTimeout(() => { element.style.transform = "rotate3d(0,1,0, 180deg)" }, 400);
        })

        setTimeout(clear, 2000);
    } else if (possibilities[1]) {

        const arrayTemp = [squares[3], squares[4], squares[5]];

        arrayTemp.forEach(function (element) {
            element.classList.add("checkedSquare");
            setTimeout(() => { element.style.transform = "rotate3d(0,1,0, 180deg)" }, 400);
        })

        setTimeout(clear, 2000);
    } else if (possibilities[2]) {

        const arrayTemp = [squares[6], squares[7], squares[8]];

        arrayTemp.forEach(function (element) {
            element.classList.add("checkedSquare");
            setTimeout(() => { element.style.transform = "rotate3d(0,1,0, 180deg)" }, 400);
        })

        setTimeout(clear, 2000);

    } else if (possibilities[3]) {

        const arrayTemp = [squares[0], squares[3], squares[6]];

        arrayTemp.forEach(function (element) {
            element.classList.add("checkedSquare");
            setTimeout(() => { element.style.transform = "rotate3d(0,1,0, 180deg)" }, 400);
        })

        setTimeout(clear, 2000);

    } else if (possibilities[4]) {

        const arrayTemp = [squares[1], squares[4], squares[7]];

        arrayTemp.forEach(function (element) {
            element.classList.add("checkedSquare");
            setTimeout(() => { element.style.transform = "rotate3d(0,1,0, 180deg)" }, 400);
        })

        setTimeout(clear, 2000);

    } else if (possibilities[5]) {

        const arrayTemp = [squares[2], squares[5], squares[8]];

        arrayTemp.forEach(function (element) {
            element.classList.add("checkedSquare");
            setTimeout(() => { element.style.transform = "rotate3d(0,1,0, 180deg)" }, 400);
        })

        setTimeout(clear, 2000);

    } else if (possibilities[6]) {

        const arrayTemp = [squares[0], squares[4], squares[8]];

        arrayTemp.forEach(function (element) {
            element.classList.add("checkedSquare");
            setTimeout(() => { element.style.transform = "rotate3d(0,1,0, 180deg)" }, 400);
        })

        setTimeout(clear, 2000);
        
    } else if (possibilities[7]) {
        
        const arrayTemp = [squares[2], squares[4], squares[6]];
        
        arrayTemp.forEach(function (element) {
            element.classList.add("checkedSquare");
            setTimeout(() => { element.style.transform = "rotate3d(0,1,0, 180deg)" }, 400);
        })
        
        setTimeout(clear, 2000);

    } else if(moves >= 9){
        squares.forEach(function(element){
            element.classList.add("checkedSquare");
            element.style.transform = "rotate3d(0,1,0, 360deg)";
        })
        setTimeout(clear, 2000);
    }
}
// ============ Vitoria/Empate ============

// ============ Limpa tabuleiro ============
function clear() {
    squares.forEach(function (element) {
        element.getElementsByTagName("strong")[0].textContent = "";
        element.classList.remove("checkedSquare");
        element.style.transform = "rotate3d(0,1,0, 0deg)";
    })
    moves = 0;
}
// ============ Limpa tabuleiro ============

// ============ Menu de Reset ============
document.getElementById("board").addEventListener("contextmenu", function(event){
    event.preventDefault();
    document.getElementById("contextMenu").style.display = "flex";
    const positionX = event.clientX 
    const positionY = event.clientY
    
    document.getElementById("contextMenu").style.left = `${positionX}px`;
    document.getElementById("contextMenu").style.top = `${positionY}px`;

    setTimeout(() => {
        document.getElementById("contextMenu").style.display = "none";    
    }, 4000);
})

document.getElementById("resetButton").addEventListener("click", function(){
    clear();
    pointsO = 0;
    pointsX = 0;
    document.getElementById("pointsX").textContent = pointsX;
    document.getElementById("pointsO").textContent = pointsO;
})
// ============ Menu de Reset ============