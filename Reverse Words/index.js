const wordsReverse = str => str.split(' ').map(
    word => 
    word.split('').reverse()
    .map(
        (letter, i, arr) => 
        arr[arr.length - i - 1].toUpperCase() === arr[arr.length - i - 1] ?
        letter.toUpperCase() :
        arr[arr.length - i - 1].toLowerCase() === arr[arr.length - i - 1] ?
        letter.toLowerCase() :
        letter
    )
    .join('')
)
.join(' ');

console.log(wordsReverse("I am A Great human"));
