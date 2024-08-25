export function callbackTest(callback) {
  setTimeout(callback, 0);
}
export function callbackTest2(callback) {
  callback();
}
