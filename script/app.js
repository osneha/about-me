function add(x, y, z, s) {
    var a = document.getElementById(x).value;
    var b = document.getElementById(y).value;
    var c = document.getElementById(z).value;
    var d = document.getElementById(s).value;
    
    alert("SUM is: " + addValues(a,b,c,d));
    document.getElementById('sum').innerHTML="SUM is:" + addValues(a,b,c,d);
}

function addValues(a,b,c,d){
var add = 0;
add = Number(a) + Number(b) + Number(c) + Number(d);
return add;
}