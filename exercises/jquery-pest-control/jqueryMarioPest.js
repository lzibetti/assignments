var getTotal = 0;
var goomba = parseInt($("#gTotl").html());
var bob = parseInt($("#bTotl").html());
var cheep = parseInt($("#cTotl").html());

function addTotals() {
    var sumsAll = goomba + bob + cheep;
    return sumsAll;
}
$('#sumsAll').html(addTotals());
