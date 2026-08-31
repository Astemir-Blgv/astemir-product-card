function showTemperature (city , temperature) {
  console.log (`Сейчас в городе $ {city} температура - $ {temperature} градусов по Цельсию`);
}


showTemperature (`Нальчик`, 25)

const speedOfLight = 299792458;
function checkSpeed (speed) {
  if (speed> speedOfLight) {    console.log("Сверхсветовая скорость");
  } else if (speed< speedOfLight) {    console.log("Субсветовая скорость");
  } else if (speed === speedOfLight) {  console.log ("Скорость света");}
}

checkSpeed(299792458);

const product = "Бетон"
const price = 5000

function buyProduct (budget) { 
  if  (budget >=price)  { console.log ( `${product} приобретен . Спасибо за покупку !`) ;
  } else  {const difference = price-budget;
  console.log (`Вам не хватает ${difference}$,пополните баланс`);
  }
}

buyProduct(5000);


const name = "Астемир" ;
const surname = "Балагов" ;
const age = 35 ;

function student (name, surname, age)
  {
    console.log (`Имя : ${name}, фамилия :${surname} , возраст : ${age},`);
  }

  student (name,surname,age)