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
    context[i].arc(posx, posy, 2, 0, 2*Math.PI);
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

function validateForm(){


// for(i=0; i<7; i++){
//         var clicks = clicks[i];
//         console.log("clicks: " + clicks[i]);
//         var count = document.forms["mturk_form"]["image" + i].value;
//         console.log("count: " + count[i]);
//         if(count[i] == null || count[i] != clicks[i]){
//             alert("image " + i + " people count mismatch");
//             return false;
//         }
//     }
    
    var clicks0 = clicks[0];
    console.log("clicks: " + clicks[0]);
    var count0 = document.forms["mturk_form"]["image0"].value;
    console.log("count: " + count0);
    if(count0 == null || count0 != clicks0 || count0 == ""){
        alert("image 1 | people count mismatch");
        return false;
    }
    var clicks1 = clicks[1];
    console.log("clicks: " + clicks[1]);
    var count1 = document.forms["mturk_form"]["image1"].value;
    console.log("count: " + count1);
    if(count1 == null || count1 != clicks1 || count1 == ""){
        alert("image 2 | people count mismatch");
        return false;
    }
    var clicks2 = clicks[2];
    console.log("clicks: " + clicks[2]);
    var count2 = document.forms["mturk_form"]["image2"].value;
    console.log("count: " + count2);
    if(count2 == null || count2 != clicks2 || count2 == ""){
        alert("image 3 | people count mismatch");
        return false;
    }
    var clicks3 = clicks[3];
    console.log("clicks: " + clicks[3]);
    var count3 = document.forms["mturk_form"]["image3"].value;
    console.log("count: " + count3);
    if(count3 == null || count3 != clicks3 || count3 == ""){
        alert("image 4 | people count mismatch");
        return false;
    }
    var clicks4 = clicks[4];
    console.log("clicks: " + clicks[4]);
    var count4 = document.forms["mturk_form"]["image4"].value;
    console.log("count: " + count4);
    if(count4 == null || count4 != clicks4 || count4 == ""){
        alert("image 5 | people count mismatch");
        return false;
    }
    var clicks5 = clicks[5];
    console.log("clicks: " + clicks[5]);
    var count5 = document.forms["mturk_form"]["image5"].value;
    console.log("count: " + count5);
    if(count5 == null || count5 != clicks5 || count5 == ""){
        alert("image 6 | people count mismatch");
        return false;
    }
    var clicks6 = clicks[6];
    console.log("clicks: " + clicks[6]);
    var count6 = document.forms["mturk_form"]["image6"].value;
    console.log("count: " + count6);
    if(count6 == null || count6 != clicks6 || count6 == ""){
        alert("image 7 | people count mismatch");
        return false;
    }



    var mTurkID = document.forms["mturk_form"]["mTurkID"].value;
    console.log(mTurkID);
    if(mTurkID == null || mTurkID == ""){
        alert("Please write down your Mechanical Turk Worker ID");
        return false;
    }


}
//MAKE SURE TO VALIDATE INPUT WITH CLICK#






