var dollarAmt = 11111.231;

function formatMoney(amount){
  return amount.toFixed(2);
}

function numberWithCommas(addCurrencySymbol) {
    addCurrencySymbol = formatMoney(addCurrencySymbol).toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(addCurrencySymbol))
        addCurrencySymbol = addCurrencySymbol.replace(pattern, "$1,$2");
    return "$" + addCurrencySymbol;
}

console.log(numberWithCommas(dollarAmt));