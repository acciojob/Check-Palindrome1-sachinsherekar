// complete the given function
function palindrome(str) {
  var a = str.replace(/[^\w\s]|_/g, "").toLowerCase().replace(/\s/g, "");
  if (a === a.split("").reverse().join("")) {
    return true;
  }
  return false;
}
module.exports = palindrome


