function solve(args) {
    var x = document.getElementById("myNumber").value;
    var a = true;
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            a = false;
        }
    }
    document.getElementById("res2").innerText = a;
    //if (a = true) {
    //    document.getElementById("res2").innerText = "true";
    //} else document.getElementById("res2").innerText = "false";
    
}