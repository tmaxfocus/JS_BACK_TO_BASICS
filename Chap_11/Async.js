function count(maxNumber) {
  let i = 0;
  while (i < Number) {
    console.log(i);
    i++;
  }
}

count(1000);

//Creating a promise chain
doLogin()
  .then((result) => sendLoginData(result))
  .then((result1) => logIn(result1))
  .then((result2) => loadPage(result2))
  .then((result3) => {
    console.log(`final result: ${result3}`);
  })
  .catch(failureCallback);

//WRITING PROMISES
/* To create a basic promise, use the new keyword with the Promise constructor. The 
Promise constructor takes a callback function as its argument. 
This callback function takes two callback function arguments: resolve and reject:*/

let myPromise = new Promise((resolve, reject) => {
  someAsynchronusfFunction(function () {
    resolve("Success!");
  });
});

// call myPromise
myPromise().then((result) => {
  console.log(result);
});

function doProcessing() {
  var timeout;
  timeout = setTimeout(function () {
    console.log("doing first thing");
    timeout = setTimeout(function () {
      console.log("step 2");
      timeout = setTimeout(function () {
        console.log("step 3");
        setTimeout(function () {
          console.log("last thing!");
        }, 300);
      }, 1000);
    }, 2500);
  }, 3000);
}
doProcessing();
