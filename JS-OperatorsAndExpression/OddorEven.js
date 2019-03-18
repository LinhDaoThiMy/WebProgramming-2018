function solve(args) {
    var x = document.getElementById("myNumber").value;
    if (x % 2 != 0) {
        document.getElementById("res1").innerText = "odd";
    } else document.getElementById("res1").innerText = "even";
    document.getElementById("res2").innerHTML = x;
}