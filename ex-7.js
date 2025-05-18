function isPalindrome(string) {
  // Start coding here
  const normalizedString = string.toLowerCase();

  const reversedString = normalizedString.split("").reverse().join("");

  return normalizedString === reversedString;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false