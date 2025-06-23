var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  console.log(Object.keys(student).join(","));
  

  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
    console.log("Before deletion:", student);
  delete student.rollno;
  console.log("After deletion:", student);

  
  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
    console.log("Length:", Object.keys(student).length);


var library = [  
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false } 
 ];
  for (let book of library) {
   if (book.readingStatus) {
     console.log(`You already read "${book.title}" by ${book.author}`);
   } else {
     console.log(`You still need to read "${book.title}" by ${book.author}`);
   }
 }

 
 class Cylinder {
    volume(radius, height) {
      return (Math.PI * Math.pow(radius, 2) * height).toFixed(4);
    }
  }
    let c = new Cylinder();
  console.log("Volume =", c.volume(5, 10));


function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
    console.log(bubbleSort([6, 4, 0, 3, -2, 1]));
  

  function subsets(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        result.push(str.slice(i, j));
      }
    }
    return result;
  }
    console.log(subsets("dog"));

  //q8
  

  class Circle {
    area(radius) {
      return Math.PI * radius * radius;
    }
      perimeter(radius) {
      return 2 * Math.PI * radius;
    }
  }
    let r = 5;
  let circle = new Circle();
    console.log("Area =", circle.area(r).toFixed(2));
  console.log("Perimeter =", circle.perimeter(r).toFixed(2));

  
  var library = [  
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
  ];
   for (var i = 0; i < library.length - 1; i++) {
    for (var j = 0; j < library.length - i - 1; j++) {
      if (library[j].libraryID < library[j + 1].libraryID) {
        
        var temp = library[j];
        library[j] = library[j + 1];
        library[j + 1] = temp;
      }
    }
  }
    console.log(library);

  //q11
  