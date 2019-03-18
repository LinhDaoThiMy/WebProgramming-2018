function solve(args) {
    //var x = parseFloat(document.getElementById("myNumber").value);
    var x = Array[0];
    x = parseFloat()
    var y = parseFloat(document.getElementById("myNumber1").value);

    var dis = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    if (dis <= 2) {
        document.getElementById("res2").innerText = ("yes " + Math.round(dis*100)/100);
    } else document.getElementById("res2").innerText = ("no " + Math.round(dis * 100) / 100);
}