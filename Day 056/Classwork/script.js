// All hws in js
// 1
function litres(time) {
    return Math.floor(0.5 * time)
}

// 2
function paperwork(n, m) {
    if(n < 0 || m < 0) {
      return 0;
    } else {
      return n * m
    }
}

// 3
function grow(x){
    let newList = x.sort();
    let result = 1;
    for(let i in newList) {
      result = result * i;
    }
    return result;
} // ver gavige
  
// 4
function fakeBin(x) {
  let chars = [];

  for (let i = 0; i < x.length; i++) {
    let num = parseInt(x[i]);
    
    if (num < 5) {
      chars.push('0');
    } else {
      chars.push('1');
    }
  }
  
  let result = chars.join('');
  
  return result;
}

// 5
function countBy(x, n) {
  let result = [];
  for(let i = 1; i <= n; i++) {
    result.push(x * i)
  }
  return result;
}
// gaketebuli mqonda

// 6
String.prototype.toJadenCase = function () {
  let wordCount = this.split();
  let casedWords = (function(word) {
    return word[0].toUpperCase() + word.slice(1);
  });
    
  return casedWords.join(' ');
};
// es vergavige

// 7
