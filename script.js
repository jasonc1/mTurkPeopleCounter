var canvas = document.getElementById("canvas1");
var context = canvas.getContext("2d");
var clicks = 0;


document.getElementById('clear').addEventListener('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    resetClick();
    }, false);

function createImageOnCanvas(imageId) {
    canvas.style.display = "block";
        document.getElementById("images").style.overflowY = "hidden";
            var img = new Image(300,300);
    img.src = document.getElementById(imageId).src;
    context.drawImage(img, (0), (0));
    //onload....
}

function draw(e) {
    var pos = getMousePos(canvas, e);
    posx = pos.x;
    posy = pos.y;
    context.fillStyle = "red";
    context.beginPath();
        console.log(posx + " " + posy);

    context.arc(posx, posy, 10, 0, 2*Math.PI);
    context.fill();
    click();
}

function click(){
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}
function resetClick(){
        clicks = 0;
        document.getElementById("clicks").innerHTML = clicks;
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






