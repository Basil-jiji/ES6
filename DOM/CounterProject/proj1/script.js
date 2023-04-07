var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1; //For iteration

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 1);

setTimeout(() => {
  followers.innerText = "Followers on Instagram";
}, 4000);
