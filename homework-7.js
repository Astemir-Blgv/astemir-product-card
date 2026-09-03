function showTemperature (city , temperature) {
   return `Сейчас в городе $ {city} температура - $ {temperature} градусов по Цельсию`
}


showTemperature (`Нальчик`, 25)

const SPEED_OF_LIGHT = 299792458;
function checkSpeed (speed) {
   if (speed> speedOfLight) {    return "Сверхсветовая скорость";
  }  } else if (speed < SPEED_OF_LIGHT) {    return "Субсветовая скорость";
  } else if (speed === SPEED_OF_LIGHT) {  return "Скорость света";
}


checkSpeed(299792458);

const product = "Бетон"
const price = 5000

function buyProduct (budget) { 
  if  (budget >=price)  {  return `${product} ( `${product} приобретен . `Спасибо за покупку !`; 
  } else  {const difference = price-budget;
    return `Вам не хватает `${difference}$,пополните баланс ;
  }
}

console.log (buyProduct(5000));


const name = "Астемир" ;
const surname = "Балагов" ;
const age = 35 ;

function student (name, surname, age)
  {
    return `Имя: ${name}, фамилия: ${surname}, возраст: ${age}`;
  }

  student (name, surname, age)