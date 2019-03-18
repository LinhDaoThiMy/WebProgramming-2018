function solve(args) {
    var x = document.getElementById("myNumber").value;
    var res = 0;
    for (var i = 0; i < 3; i++) {
        res = x % 10;
        x = Math.floor(x / 10); 
    }
    if (res == 7) {
        document.getElementById("res1").innerText = "true";
    } else {
        document.getElementById("res1").innerText = "false";
        document.getElementById("res2").innerHTML = res;
    }
}