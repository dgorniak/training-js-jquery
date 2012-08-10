// Przygotuj tablicę z nazwami miesięcy
var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

//Wylistuj wszystkie miesiące
for (i = 0; i < months.length; i++) {
    document.write("<p>" + (i + 1) + ". " + months[i] + "</p>");
}

//Wybierz miesiąc o najdłuższej nazwie
var longestName = '';

for (i = 0; i < months.length; i++) {
    if (months[i].length > longestName.length) {
        longestName = months[i];
    }
}

document.write("<br/>");
document.write("Miesiąc o najdłuższej nazwie to: " + longestName);

//Uproszczona zmiana formatu daty
var shortDateString = "2012-01-01";

var dateArr = shortDateString.split("-");

if (dateArr.length != 3) {
    alert("Niepoprawny format daty");
    return;
}

var monthIndex = parseInt(dateArr[1], 10);

if (isNaN(monthIndex)) {
    alert("Niepoprawny numer miesiąca");
    return;
}

var longDateString = dateArr[2] + " " + months[monthIndex] + " " + dateArr[0];

document.write("<br/>");
document.write("Skrócona data: " + shortDateString);
document.write("<br/>");
document.write("Pełna data: " + longDateString);​
