console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameOver = false;

//funtion to change the turn 
const changeTurn = ()=>{
    return turn === "X"? "0":"X";
}

//function to check for a win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if ((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + "  Won "; 
            isgameOver = true;    
            // document.getElementsByClassName("imgbox")[0].style.width = "200px";
            //The above is not the right way to write the below is correct.
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
            gameover.play();
        }

    })

}

//Game Logic
// music.play();
let boxes = document.getElementsByClassName("box"); //first we collect all boxes which has same class box
Array.from(boxes).forEach(element =>{  //because it will return collection we convert it to array and traverse through each element using forEach loop
    let boxtext = element.querySelector(".boxtext"); //here we want to make change to boxtext which is inside box hence instead of "document." we use "element."
    element.addEventListener('click', ()=>{
        if (boxtext.innerText === "") {
            boxtext.innerText = turn; // if there is nothing inside the box it sets value to X as turn is initiated with value X
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameOver) {
                document.getElementsByClassName("info")[0].innerText = "turn for  " + turn;  
            }
        }
    })
})

// Add onclick listener to RESET button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    })
    turn = "X";
    isgameOver = "false";
    document.getElementsByClassName("info")[0].innerText = "turn for  " + turn;  
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0";
})


  
