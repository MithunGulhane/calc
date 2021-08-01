function number(num){
    var res = document.getElementById('input');
    res.value += num;
}

function clr(){
    var res = document.getElementById('input');
    res.value="";
}
function deletenum(){
    var res = document.getElementById('input');
    var del = res.value;
    del = del.slice(0, -1);
    res.value =del;

}
function ans(){
    var res = document.getElementById('input');
    res.value = eval(res.value);
}
