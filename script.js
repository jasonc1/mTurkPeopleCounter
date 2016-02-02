var canvas = [document.getElementById("canvas0"),
                document.getElementById("canvas1"),
                document.getElementById("canvas2"),
                document.getElementById("canvas3"),
                document.getElementById("canvas4"),
                document.getElementById("canvas5"),
                document.getElementById("canvas6")]

var context = [canvas[0].getContext("2d"),
               canvas[1].getContext("2d"),
               canvas[2].getContext("2d"),
               canvas[3].getContext("2d"),
               canvas[4].getContext("2d"),
               canvas[5].getContext("2d"),
               canvas[6].getContext("2d"),
                ];

var clicks = [0,0,0,0,0,0,0];
var clicksTemp = ["clicks0", "clicks1", "clicks2", "clicks3", "clicks4", "clicks5", "clicks6"];
var clearTemp = ["clear0", "clear1", "clear2", "clear3", "clear4", "clear5", "clear6"];
var clearVar = ["clear0", "clear1", "clear2", "clear3", "clear4", "clear5", "clear6"];



// document.getElementById('clear').addEventListener('click', function() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     resetClick();
//     }, false);

function click(i){
    clicks[i] += 1;
    document.getElementById(clicksTemp[i]).innerHTML = clicks[i];
}
function resetClick(i){
        clicks[i] = 0;
        document.getElementById(clicksTemp[i]).innerHTML = clicks[i];
    }



function clearClicks(i){
    console.log(i);
    console.log(context[i]);
    context[i].clearRect(0, 0, canvas[i].width, canvas[i].height);
    resetClick(i);
}
    

function draw(e, i) {
    var pos = getMousePos(canvas[i], e);
    posx = pos.x;
    posy = pos.y;
    context[i].fillStyle = "red";
    context[i].beginPath();
    console.log(posx + " " + posy);
    context[i].arc(posx, posy, 10, 0, 2*Math.PI);
    context[i].fill();
    click(i);
    console.log(i);
}




function getMousePos(canvas, evt){
    var rect = canvas.getBoundingClientRect();
    return{
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}






window.draw = draw;


//===================================BASIC VALIDATIONS===================================


//MAKE SURE TO VALIDATE INPUT WITH CLICK#






