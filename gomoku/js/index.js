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
                .addClass(`box B_${i}_${j}`)
                .css({
                    "left":j*50+"px",
                    "top": i*50+"px"
                });
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
        $( ".box" ).mouseover(function() {
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
                
                $(event.target).addClass("white").click(()=>false).hover(()=>$(this).css("background-color", "white"));
                player1 = false;
                $(".pl1").css({"color":"black", "border":"0"});
                $(".pl2").css({"color":"red", "border":"2px solid red", "padding":"5px"});
                lightNext(player1, player2);
            }
        }
        else {
            if(event.target.classList[2] == "white" || event.target.classList[2] == "black"){
                return;
            }
            else {
                $(event.target).addClass("black").hover(()=>$(this).css("background-color", "black"));
                player1 = true;
                player2 = false;
                $(".pl1").css({"color":"red", "border":"2px solid red", "padding":"5px"});
                $(".pl2").css({"color":"black", "border":"0"});
                lightNext(player1, player2);
            }
        }
    });
}

function checkWin(pl1, pl2){
    for (var i=1; i <= 16; i++) {
        for (var j=1; j <= 16; j++) {
            var box = $("<div></div>")
                .addClass(`box B_${i}_${j}`)
                .css({
                    "left":j*50+"px",
                    "top": i*50+"px"
                });
                $('#grid').append(box);
        }
    }
}

// Заборона кліку на існуючий камінь    +
// Доробити підсвітку гравців           +
// перевірку гориз, вертик, діагон      
// підсвічувати наступний колір         +
