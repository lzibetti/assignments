var getTotal = 0;
var goomba = parseInt(document.getElementById("gTotl").innerHTML);
var bob = parseInt(document.getElementById("bTotl").innerHTML);
var cheep = parseInt(document.getElementById("cTotl").innerHTML);

function addTotals() {
    var sumsAll = goomba + bob + cheep;
    return sumsAll;
}

document.getElementById('sumsAll').innerHTML = addTotals();
