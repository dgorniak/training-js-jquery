var arr = [];

var printArray = function (array) {
  var element;

  for(element in array) {
    if(arr.hasOwnProperty(element)) {
        document.write(element + ": " + arr[element] + "<br/>");
    }
  }
};

//Rozmiar tablicy

document.write(arr.length + "<br/>");

arr[1000] = "something";

document.write(arr.length + "<br/>");

printArray(arr);

//Dodawanie elementów do tablicy

document.write("Add something and then print: <br/>");

arr[arr.length] = "another one";

arr.push("and another");

printArray(arr);

//Usuwanie elementów 

document.write("Remove something and then print: <br/>");

delete arr[1001];
           
printArray(arr);

arr[1001] = "another one";

//Lepszy sposób

document.write("Remove with splice and then print: <br/>");

arr.splice(1001,1);

printArray(arr);
     

​
