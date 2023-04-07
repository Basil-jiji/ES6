//A Simple program to calculate the discount percentage
//d = (l-s) / l * 100;

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = (listingPrice - sellingPrice) / listingPrice * 100;
console.log("Discount is :" + discountPercent);

displayDiscountPercent = Math.round(discountPercent);

console.log(displayDiscountPercent + " %off");