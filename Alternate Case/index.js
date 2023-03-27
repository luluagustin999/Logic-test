var alternateCase = function (s) {
  var chars = s.toLowerCase().split("");
  for (var i = 0; i < chars.length; i += 2) {
    chars[i] = chars[i].toUpperCase();
  }
  return chars.join("");
};

var txt1 = "abc";
var txt2 = "ABC";
var txt3 = "hello world";
console.log(alternateCase(txt1));
console.log(alternateCase(txt2));
console.log(alternateCase(txt3));
