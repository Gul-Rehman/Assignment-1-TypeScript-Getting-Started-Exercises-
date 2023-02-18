type Car = {
  manufacturer: string;
  model: string;
  [key: string]: string;
};

function carInfo(manufacturer: string, model: string, ...args: string[]): Car {
  const car: Car = { manufacturer, model };
  args.forEach((arg, i) => {
    if (i % 2 === 0 && typeof args[i + 1] === 'string') {
      car[arg] = args[i + 1];
    }
  });
  return car;
}

// Call the function with required and optional parameters
const myCar = carInfo('Toyota', 'Camry', 'color', 'red', 'year', '2022', 'trim', 'LE');
console.log(myCar);
