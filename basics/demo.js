// Przygotuj tablicę z nazwami miesięcy

var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']

//Wylistuj wszystkie miesiące
   
for(i=0; i<months.length; i++) {
  document.write("<p>" + (i+1) + ". " + months[i] + "</p>");            
}
    
//Wybierz miesiąc o najdłuższej nazwie
var longestName = ''
    
for(i=0; i<months.length; i++) {
    if(months[i].length > longestName.length) {
      longestName = months[i]
    }
}

document.write("<br/>");
document.write("Miesiąc o najdłuższej nazwie to: " + longestName)    
    