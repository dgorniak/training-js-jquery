var user = {
    firstName : "John",
    lastName  : "Doyle",
    email     : "doyle@company.com"
}

var property;

for(property in user) {
    if(user.hasOwnProperty(property) && typeof property !== 'function') {
        document.write(property + ": " + user[property] + "<br/>");
    }
}

//Usuwanie właściowości

delete user.email;

document.write("After email deletion <br/>");

for(property in user) {
    if(user.hasOwnProperty(property) && typeof property !== 'function') {
        document.write(property + ": " + user[property] + "<br/>");
    }
}
