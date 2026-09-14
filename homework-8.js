//3 . Объект личная информация
const person = {
  firstName: "Астемир",
  lastName: "Балагов",
  email: "b.astemir07@mail.ru",
  job: "Инженер строитель",
  age: "35",
  country: "Russia",
  city: "Nalchik",
  relationshipStatus: "Не женат",
  hobby: "Горы",
};

//4. Объект , хранящие данные об автомобиле.
const car = {
  brand: "BMW",
  model: "530d",
  year: "2015",
  color: "black",
  transmition: "Auto",
};

car.owner = person;
//6.Фунцкия добваление свойства, максимальная скорость.
function ensureMaxSpeed(obj) {
  if (!obj.hasOwnProperty("maxSpeed")) {
    obj["maxSpeed"] = 220;
  }
}
ensureMaxSpeed(car);
console.log("car после добваления maxSpeed:", car);

//Задание 6.  Функция вывода значения свойства объектов.
function getPropertyValue(obj, prop) {
  console.log('Значение свойства"${prop}":', obj[prop]);
}
console.log(car, "brand");

//7. Массив продукты
const products = ["хлеб", "молоко", "яйца", "масло", "сыр"];

//8. Массив книги.
const books = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    coverColor: "красный",
    genre: "роман",
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    coverColor: "серый",
    genre: "роман",
  },
  {
    title: "Тихий Дон",
    author: "Михаил Шолохов",
    year: 1940,
    coverColor: "фиолетовый",
    genre: "роман",
  },
];
books.push({
  title: "Дубровский",
  author: "Александр Пушкин",
  year: 1832,
  coverColor: "синий",
  genre: "роман",
});
console.log("Массив книг после добавления:", books);

// Задание 9. Ещё один массив книг + объединение с предыдущим
const otherBooks = [
  {
    title: "Мёртвые души",
    author: "Николай Гоголь",
    year: 1835,
    coverColor: "красный",
    genre: "повесть",
  },
  {
    title: "Муму",
    author: "Иван Тургенев",
    year: 1852,
    coverColor: "синий",
    genre: "рассказ",
  },
];
const allBooks = [...books, ...otherBooks];
console.log("Объединённый массив книг:", allBooks);

// Задание 10. Функция с map

function markRareBooks(booksArray) {
  return booksArray.map((book) => ({
    ...book,
    isRare: book.year > 1850,
  }));
}
const rareMarkedBooks = markRareBooks(allBooks);
console.log("Книги со свойством isRare:", rareMarkedBooks);
