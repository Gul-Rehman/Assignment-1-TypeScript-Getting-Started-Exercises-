function carInfo(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    args.forEach(function (arg, i) {
        if (i % 2 === 0 && typeof args[i + 1] === 'string') {
            car[arg] = args[i + 1];
        }
    });
    return car;
}
// Call the function with required and optional parameters
var myCar = carInfo('Toyota', 'Camry', 'color', 'red', 'year', '2022', 'trim', 'LE');
console.log(myCar);
