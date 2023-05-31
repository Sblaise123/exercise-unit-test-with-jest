test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')

    
    const dollars = fromEuroToDollar(3.5)

    
    const expected = 3.5 * 1.2; 
    
    
     expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("one dollar should be 127.9 yen", function(){

    const { fromDollarToYen } = require('./app.js')

    const dollars = fromDollarToYen(127.9)

    const expected = 1.2 * 0.0072;

    expect(fromDollarToYen(117.780)).toBe(0.00864)
})

test("one pound should be 173.24 yen", function(){

    const { fromYenToPound } = require('./app.js')

    const dollars = fromYenToPound(173.24)

    const expected = 0.0058 * 173.24

    expect(fromYenToPound(0.0058)).toBe(1.00479)
})