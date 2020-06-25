// function setValue(){
//     var zero = document.getElementById("vall");
//     zero.value=0;
// }
// setValue()

function calc(num){
    var vall = document.getElementById("vall");
    vall.value += num;
}


function clearRes(){
    var vall = document.getElementById("vall");
    vall.value = "";
}


function get(){
    var vall = document.getElementById("vall");
    vall.value = eval(vall.value);
}

function del(){
    var vall= document.getElementById("vall").value;
if(vall.length > 0){
vall = vall.substring(0, vall.length - 1);
document.getElementById("vall").value = vall;
}
    
}