const favoriteMovie = {
    title: "Puff the Magic Dragon",
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneezes"]
  };
  function printMovie(movie) {
    console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(", ")}.`);
  }
  printMovie(favoriteMovie);

  
  const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: false },
    { title: "1984", author: "George Orwell", alreadyRead: true }
  ];
    for (let book of books) {
    if (book.alreadyRead) {
      console.log(`You already read "${book.title}" by ${book.author}`);
    } else {
      console.log(`You still need to read "${book.title}" by ${book.author}`);
    }
  }


const recipe = {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
  };
    console.log(recipe.title);
  console.log(`Serves: ${recipe.servings}`);
  console.log("Ingredients:");
  for (let ingredient of recipe.ingredients) {
    console.log(ingredient);
  }

  
  function tellFortune(kids, partner, location, job) {
    console.log(`You will be a ${job} in ${location}, and married to ${partner} with ${kids} kids.`);
  }
  tellFortune(2, "Alice", "Paris", "Developer");
  tellFortune(3, "Sam", "Tokyo", "Chef");
  tellFortune(1, "Priya", "New York", "Designer");

  
  function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const age1 = currentYear - birthYear;
    const age2 = age1 - 1;
    console.log(`You are either ${age2} or ${age1}`);
  }
  calculateAge(2000); 
  

  function calculateSupply(age, amountPerDay) {
    const maxAge = 90;
    const yearsRemaining = maxAge - age;
    const totalAmount = Math.round(yearsRemaining * 365 * amountPerDay);
      console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
  }
    calculateSupply(25, 2);      
  calculateSupply(40, 3.5);   
  calculateSupply(60, 1.2);
  
  
  function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference.toFixed(2)}`);
  }
    function calcArea(radius) {
    const area = Math.PI * radius * radius;
    console.log(`The area is ${area.toFixed(2)}`);
  }
    calcCircumference(5);
  calcArea(5);


function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheit.toFixed(1)}°F`);
  }
    function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius.toFixed(1)}°C`);
  }
    celsiusToFahrenheit(30);
  fahrenheitToCelsius(86);
  
  