function solve(args) {
    var x = document.getElementById("myNumber").value;
    var bit = (x >>> 2).toString(2);
    var res = bit % 10;
    document.getElementById("res2").innerHTML = res;
}