# 1.
def multiply(a, b):
    return a * b

# 2. 
"""
javascript 

function getCount(s){
    let count = 0;
    const vowels = 'aeiouAEIOU';
  
    for(let i = 0; i < s.length; i++) {
      if(vowels.includes(s[i])) {
        count++
      } else {
        count = count;
      }
    }
  return count
}
"""

# 3. 
def solution(string):
    return string[::-1]

# 4.
def likes(names):
    users = len(names)
    
    if users == 0:
        return "no one likes this"
    elif users == 1:
        return names[0] + " likes this"
    elif users == 2:
        return names[0] + " and " + names[1] + " like this"
    elif users == 3:
        return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    else:
        return names[0] + ", " + names[1] + " and " + str(users - 2) + " others like this"
    
# 5.
def solution(number):
    
    result = []
    for i in range(1, number):
        if i % 3 == 0 or i % 5 == 0:
            result.append(i)

    return sum(result)

# 6.
"""
javascript

function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}
"""

# 7. 
"""
javascript

function highAndLow(numbers){
  let split = numbers.split(' ');
  let num = split.map(Number)
  let max = Math.max(...num);
  let min = Math.min(...num);
  
  return `${max} ${min}`;
}
"""

# 8.
"""
javascript

function findOdd(A) {
    let result = 0;
  
    for(let n of A) {
       result ^= n;
    }
  
    return result
}
"""