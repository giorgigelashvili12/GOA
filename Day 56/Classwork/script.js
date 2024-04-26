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