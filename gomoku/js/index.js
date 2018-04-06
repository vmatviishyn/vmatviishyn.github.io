$( document ).ready(function() {
    let player1 = true; //white
    $(".pl1").css({"color":"red", "border":"2px solid red", "padding":"5px"});
    let player2 = false; //black
    createHeader();
    createBoard();
    createDivs();
    lightNext(player1, player2);
    move(player1, player2);


});

const charToCheck = "OOOOO";
const charToCheck2 = "XXXXX";

let boardArr = [ ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],];


let horizonRows =  ["","","","","","","","","","","","","","","",""];
let verticalRows = ["","","","","","","","","","","","","","","",""];
let diagonalRows = ["","","","","","","","","","","","","","","",""];
let diagonalRows2 = ["","","","","","","","","","","","","","","",""];


function inputValue(index, playerVal){
    // horizontal index number: index/8
    var horiIndex = Math.floor(index/boardArr.length);
    // console.log("horiIndex " + horiIndex);
    // vertical index number: index % 8
    var vertIndex = index % boardArr.length;
    // console.log("vertIndex " + vertIndex);
    
    boardArr[horiIndex][vertIndex] = playerVal;
    // console.log(boardArr);
    
}

function whoWin(){
    horizonCheck();
    verticalCheck();
    diagonalCheck1();
    diagonalCheck2();
}

function horizonCheck(){
    for(let j = 0; j < boardArr.length;j++)
    {
         var temArr = [];

         for(let k =0; k <boardArr.length;k++)
         {
           temArr.push(boardArr[j][k]);       // push boardArr value to temArr
           horizonRows[j] = temArr.join('');  // converts temporary array into string
         }
         checkForWin(horizonRows[j]);
    }

}

function verticalCheck(){
    for(let b=0;b<boardArr.length;b++)
    {
         var temArr2 = [];
         for(let c = 0; c <boardArr.length;c++)
         {
            temArr2.push(boardArr[c][b]);        // push boardArr value to temArr2
            verticalRows[c] = temArr2.join('');  // converts temporary array into string
            checkForWin(verticalRows[c]);
         }

    }
}

function diagonalCheck1(){
    //temporary array that holds 9 diagonal lines from right to left diagonally
    var temArr0 = [],temArr1 = [],temArr2 = [],temArr3 = [];
    var temArr4 = [],temArr5 = [],temArr6 = [],temArr7 = [],
        temArr8 =[],temArr9 = [],temArr10 = [],temArr11 = [],
        temArr12 = [],temArr13 = [],temArr14 = [],temArr15 = [];
 
    for(let d=0;d<boardArr.length;d++)
    {
          for(let e = 0; e < boardArr.length; e++)
          {
             // d and e are counters of for loops
             if( d + e === 3){       // at the index location where an addition of d and e is equal to 3
                temArr0.push(boardArr[d][e]);       // push boardArr value to temArr
                diagonalRows[0] = temArr0.join(''); // converts temporary array into string
             }else if(d + e === 4){  // at the index location where an addition of d and e is equal to 4
                temArr1.push(boardArr[d][e]);       // push boardArr value to temArr
                diagonalRows[1] = temArr1.join(''); // converts temporary array into string
             }else if(d + e === 5){
                temArr2.push(boardArr[d][e]);
                diagonalRows[2] = temArr2.join('');
             }else if(d + e === 6){
                temArr3.push(boardArr[d][e]);
                diagonalRows[3] = temArr3.join('');
             }else if(d + e === 7){
                temArr4.push(boardArr[d][e]);
                diagonalRows[4] = temArr4.join('');
             }else if(d + e === 8){
                temArr5.push(boardArr[d][e]);
                diagonalRows[5] = temArr5.join('');
             }else if(d + e === 9){
                temArr6.push(boardArr[d][e]);
                diagonalRows[6] = temArr6.join('');
             }else if(d + e === 10){
                temArr7.push(boardArr[d][e]);
                diagonalRows[7] = temArr7.join('');
             }else if(d + e === 11){
                temArr8.push(boardArr[d][e]);
                diagonalRows[8] = temArr8.join('');
             }else if(d + e === 12){
                temArr9.push(boardArr[d][e]);
                diagonalRows[9] = temArr9.join('');
             }else if(d + e === 13){
                temArr10.push(boardArr[d][e]);
                diagonalRows[10] = temArr10.join('');
             }else if(d + e === 14){
                temArr11.push(boardArr[d][e]);
                diagonalRows[11] = temArr11.join('');
             }else if(d + e === 15){
                temArr12.push(boardArr[d][e]);
                diagonalRows[12] = temArr12.join('');
             }else if(d + e === 16){
                temArr13.push(boardArr[d][e]);
                diagonalRows[13] = temArr13.join('');
             }else if(d + e === 17){
                temArr14.push(boardArr[d][e]);
                diagonalRows[14] = temArr14.join('');
             }else if(d + e === 18){
                temArr15.push(boardArr[d][e]);
                diagonalRows[15] = temArr15.join('');
             }
             
          }
    }
    // checkForWin for each diagonalRows
    for(let u=0; u<diagonalRows.length;u++){
         checkForWin(diagonalRows[u]);
    }
 }

 function diagonalCheck2(){
    //temporary array that holds 9 diagonal lines from left to right diagonally
    var temArr0 = [],temArr1 = [],temArr2 = [],temArr3 = [];
    var temArr4 = [],temArr5 = [],temArr6 = [],temArr7 = [],
        temArr8 =[],temArr9 = [],temArr10 = [],temArr11 = [],
        temArr12 = [],temArr13 = [],temArr14 = [],temArr15 = [];
 
    for(let w=0;w<boardArr.length;w++)
    {
 
          for(let k = 0; k < boardArr.length; k++)
          {
             // w and k are counters of for loops
             if( w - k === -4){       // at the index location where subtraction of w and k is equal to -4
                temArr0.push(boardArr[w][k]);          // push boardArr value to temArr
                diagonalRows2[0] = temArr0.join('');   // converts temporary array into string
             }else if(w - k === -3){   // at the index location where subtraction of w and k is equal to -3
                temArr1.push(boardArr[w][k]);          // push boardArr value to temArr
                diagonalRows2[1] = temArr1.join('');   // converts temporary array into string
             }else if(w - k === -2){
                temArr2.push(boardArr[w][k]);
                diagonalRows2[2] = temArr2.join('');
             }else if(w - k === -1){
                temArr3.push(boardArr[w][k]);
                diagonalRows2[3] = temArr3.join('');
             }else if(w === k){
                temArr4.push(boardArr[w][k]);
                diagonalRows2[4] = temArr4.join('');
             }else if(w - k === 1){    //iterating more than existing
                temArr5.push(boardArr[w][k]);
                diagonalRows2[5] = temArr5.join('');
             }else if(w - k === 2){
                temArr6.push(boardArr[w][k]);
                diagonalRows2[6] = temArr6.join('');
             }else if(w - k === 3){
                temArr7.push(boardArr[w][k]);
                diagonalRows2[7] = temArr7.join('');
             }else if(w - k === 4){
                temArr8.push(boardArr[w][k]);
                diagonalRows2[8] = temArr8.join('');
             }else if(w - k === 5){
                temArr9.push(boardArr[w][k]);
                diagonalRows2[9] = temArr9.join('');
             }else if(w - k === 6){
                temArr10.push(boardArr[w][k]);
                diagonalRows2[10] = temArr10.join('');
             }else if(w - k === 7){
                temArr11.push(boardArr[w][k]);
                diagonalRows2[11] = temArr11.join('');
             }else if(w - k === 8){
                temArr12.push(boardArr[w][k]);
                diagonalRows2[12] = temArr12.join('');
             }else if(w - k === 9){
                temArr13.push(boardArr[w][k]);
                diagonalRows2[13] = temArr13.join('');
             }else if(w - k === 10){
                temArr14.push(boardArr[w][k]);
                diagonalRows2[14] = temArr14.join('');
             }else if(w - k === 11){
                temArr15.push(boardArr[w][k]);
                diagonalRows2[15] = temArr15.join('');
             }
             
          }
 
    }
    // checkForWin for each diagonalRows2
    for(let v=0; v<diagonalRows.length;v++){
          checkForWin(diagonalRows2[v]);
    }
 }


 function checkForWin(str){
    // this for loop iterate through each string's position from 0 to the end
    for(let a =0; a<str.length;a++)
    {
        // substring method takes 4 string values and compare it to
        // variables charTochecks. Once str matches charTocheck,
        // it meets winning condition and stop the game by setting keepPlaying
        // false, and changes screen's html value to who wins the game.
        if( str.substring(a,a+5) === charToCheck){
           alert("White stones win!");
           break;
        //    if(player2Name.length !== 0){
        //      $('#screen').html(player2Name + " wins!");
        //      keepPlaying = false;
        //      ply2Win = true;
        //    }else{
        //      $('#screen').html("White stones win!");
        //      keepPlaying = false;
        //      ply2Win = true;
        //    }

        }else if( str.substring(a,a+5) === charToCheck2){
           alert("Blak stones win!");
           break;
        //    if(player1Name.length !== 0){
        //      $('#screen').html(player1Name + " wins!");
        //      keepPlaying = false;
        //      ply1Win = true;
        //    }else{
        //      $('#screen').html("Black stones win!");
        //      keepPlaying = false;
        //      ply1Win = true;
        //    }


        }
    }

}
 // /////////////////////////////////////////////////////////////////////////////////////////////////////

function createHeader(){
    var h1 = $("<h1></h1>").text("Gomoku(Go)");
    var p = $("<p></p>").text("Free-style gomoku requires a row of 4 or more stones for a win.");
    var pl1 = $("<h3></h3>").text("Player 1 (white)").addClass("pl1");
    var pl2 = $("<h3></h3>").text("Player 2 (black)").addClass("pl2");
    var players = $("<div></div>").addClass("players").append(pl1, pl2);
    return $("header").append(h1, p, players);
}

function createDivs(){
    for (var i=1; i <= 16; i++) {
        for (var j=1; j <= 16; j++) {
            var box = $("<div></div>")
                .addClass(`box`)
                .css({
                    "left":j*50+"px",
                    "top": i*50+"px"
                })
                .attr("id",`${i} ${j}`);
                $('#grid').append(box);
        }
    }
}

function createBoard(){
    var table = $("<table></table>")[0];
    var tbody = $("<tbody></tbody>")[0];
    for (var i=0; i < 15; i++) {
        var tr = $("<tr></tr>")[0];
        for (var j=0; j < 15; j++) {
            var td = $("<td></td>")[0];
            tr.append(td);
        }
        tbody.append(tr);   
    }
    table.append(tbody);
    $("#board").append(table);
}

function lightNext(pl1, pl2){

    
    if (pl1) {
        $(".box").mouseover(function() {
            $(this).css({
                "background-color":"rgba(255, 255, 255, 0.6)",
                "border-radius": "100%"
            });
        });
        $( ".box" ).mouseleave(function() {
            $(this).css({
                "background-color":""
            });
        });
    }   
    else {
        $( ".box" ).mouseover(function() {
            $(this).css({
                "background-color":"rgba(0, 0, 0, 0.6)",
                "border-radius": "100%"
            });
        });
        $( ".box" ).mouseleave(function() {
            $(this).css({
                "background-color":""
            });
        });
    }



}

function move(player1, player2){
    $(".box").click(function(event){
        if (player1){
            if(event.target.classList[2] == "white" || event.target.classList[2] == "black"){
                return;
            }
            else {
                $(event.target).addClass("set white");
                player1 = false;
                $(".pl1").css({"color":"black", "border":"0"});
                $(".pl2").css({"color":"red", "border":"2px solid red", "padding":"5px"});
                lightNext(player1, player2);
                inputValue($(this).index(), "O");
            }
        }
        else {
            if(event.target.classList[2] == "white" || event.target.classList[2] == "black"){
                return;
            }
            else {
                $(event.target).addClass("set black");
                player1 = true;
                player2 = false;
                $(".pl1").css({"color":"red", "border":"2px solid red", "padding":"5px"});
                $(".pl2").css({"color":"black", "border":"0"});
                lightNext(player1, player2);
                inputValue($(this).index(), "X");
            }
        }
        whoWin();
    });
}






// Заборона кліку на існуючий камінь    +
// Доробити підсвітку гравців           +
// перевірку гориз, вертик, діагон      +
// підсвічувати наступний колір         +
// забрати ховер в поставлений фішках 