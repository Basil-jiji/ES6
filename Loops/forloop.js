var myStates = ["Rajasthan", "Delhi", "Assam", 1947, "TamilNadu", "Kerala"];

for (i = 0; i < myStates.length; i++) {
  //   if (typeof myStates[i] !== "string") continue;
  //   if (typeof myStates[i] === "string") continue;
  if (typeof myStates[i] !== "string") break;
  console.log(myStates[i]);
}
