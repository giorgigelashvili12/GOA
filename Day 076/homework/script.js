function firstNonRepeatingLetter(s) {
  const lower_s = s.toLowerCase();
  
  for(let i = 0; i < s.length; i++){
    if(lower_s.indexOf(lower_s[i]) === lower_s.lastIndexOf(lower_s[i])){
      return s[i]
    }
  }
  
  return ""
}

function descendingOrder(n){
  const str_n = String(n);
  const numbers = [];
  
  for(let i = 0; i < str_n.length; i++){
    numbers.push(Number(str_n[i]))
  }
  
  numbers.sort(function(a, b) {return b - a})
  
  let result = '';
  
  for(let i = 0; i < numbers.length; i++){
    result += String(numbers[i]);
  }
  
  return Number(result)
  
}

function getCount(str) {
  const vowels = ['a','e','i','o','u'];
  let count = 0;
  
  for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])){
      count++;
    }
  }
  
  return count;
}