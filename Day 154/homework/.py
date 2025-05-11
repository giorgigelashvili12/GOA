'''
function highAndLow(numbers){
  let split = numbers.split(' ');
  let num = split.map(Number)
  let max = Math.max(...num);
  let min = Math.min(...num);
  
  return `${max} ${min}`;
}
'''

def solution(nums):
    if nums == None:
        return []
    
    return sorted(nums)

def greet(name): 
    return 'Hello ' + name.capitalize() + '!'