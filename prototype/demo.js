//Douglas Crockford object creation simplification
if(typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function() {};
        F.prototype = o;
        return new F();            
    }
}
        
var user = {
    firstName : "John",
    lastName  : "Doyle"        
}

var eUser = Object.create(user);
    
document.write("1. First name: " + eUser.firstName + "<br/>");
    
eUser.firstName = "Steve";
    
document.write("2. First name: " + eUser.firstName + "<br/>");
document.write("3. Prototype first name: " + user.firstName + "<br/>");    

eUser.email = "steve.doyle@enterprise.com";
    
document.write("4. Email: " + eUser.email + "<br/>");
document.write("5. Prototype email: " + user.email + "<br/>");

user.website = "www.doyle.com";

document.write("6. Website: " + eUser.website);
