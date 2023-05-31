const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 127.9;
    //return the dollar value
    return valueInYen;
}
const fromPoundToYen = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInPound=  valueInYen * 0.8;
    //return the dollar value
    return valueInPound;
}
module.exports = { fromEuroToDollar,fromDollarToYen, fromPoundToYen }