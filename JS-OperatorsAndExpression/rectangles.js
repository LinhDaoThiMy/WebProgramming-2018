function solve(args) {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var rs1 = x * y;
    var rs2 = (2 * x) + (2 * y);
    document.getElementById("res1").innerHTML = rs1;
    document.getElementById("res2").innerHTML = rs2;
}