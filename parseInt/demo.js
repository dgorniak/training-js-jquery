var ints = {};
var number;

ints["1"] = parseInt("1");
ints["01"] = parseInt("01");
ints["09"] = parseInt("09");
ints["09_10"] = parseInt("09", 10);
ints["20 USD"] = parseInt("20 USD");

document.write("Parsed integers...");

for (number in ints) {
    if (ints.hasOwnProperty(number)) {
        document.write("<br/>");
        document.write("\"" + number + "\"" + " : " + ints[number]);
    }
}