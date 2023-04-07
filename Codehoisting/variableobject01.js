/* This code worked because the functions are scanned and defined in 
global context */

tipper("85");
function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

/*This function won't work because variable are scanned 
and made undefined in Global context */
bigTipper(5);
var bigTipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 15);
};
