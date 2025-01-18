# codewars
# 1
def multiply(a, b):
    return a * b

# 2
def even_or_odd(number):
    if number % 2 == 0:
        return 'Even'
    else:
        return 'Odd'
    
# 3
def opposite(number):
    return -1 * number

# 4
def num_to_string(number):
    return str(number)

# 5
def solution(string):
    return string[::-1]

# 6
def make_negative( number ):
    if number > 0:
        return -1 * number
    else:
        return number

# 7
def bool_to_word(boolean):
    if boolean == True:
        return "Yes"
    else:
        return "No"
    
# 8
def positive_sum(arr):
    sum = 0
    for num in arr:
        if num > 0:
            sum += num
    return sum

# 9
def repeat_str(repeat, string):
    return repeat * string

# 10
def remove_char(s):
    return s[1:-1]

# 11
def square_sum(numbers):
    return sum([num * num for num in numbers])

# 12
def find_smallest_int(arr):
    return min(arr)
 
# 13
def summation(num):
    total = 0
    for x in range(0, num):
        total += x + 1
    return total

# 14
def greet():
    return "hello world!"