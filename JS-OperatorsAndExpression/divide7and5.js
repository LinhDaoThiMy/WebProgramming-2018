function solve(args) {
    var x = document.getElementById("myNumber").value;
    if (x % 5 == 0 && x % 7 == 0) {
        document.getElementById("res0").innerText = "true";
    } else document.getElementById("res0").innerText = "false";
    document.getElementById("res").innerHTML = x;
}