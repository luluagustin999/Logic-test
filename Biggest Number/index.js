const number = 1000;
const maxRedigit = function(number) {
   if(number < 100 || number > 999)
      return null
   return +number
   .toString()
   .split('')
   .sort((a, b) => b - a)
   .join('')
};
console.log(maxRedigit(number));
