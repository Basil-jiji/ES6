const uid = "abc123";

var fullName = "Basil jiji";
var email = "basiljiji@protonmail.com";
var password = "123456";
var confirmPassword = "123456";
var country = "India";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// var fullname = prompt("Enter your name : ");

console.log(fullName);
console.log("Your Full Name is :" + fullName);
console.log("Your Name is :",fullName);

//Interpolation
console.log(`
    Your Full Name is : ${fullName}
    and email is : ${email}
    with password : ${password}
    and from ${country}
    with enrolled for courses : ${courseCount}
`);