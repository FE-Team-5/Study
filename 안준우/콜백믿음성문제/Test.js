import { callbackTest, callbackTest2 } from "./lib.js";

// case 1
let a = 0;
function outputA() {
  console.log(a);
}

a++; // a = 1
callbackTest(outputA);
a++; // a = 2
callbackTest2(outputA);

/*
a++; // a = 1
callbackTest2(outputA);
a++; // a = 2
callbackTest(outputA);
*/
