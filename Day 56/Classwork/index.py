# All hws in python
# 1
import math

def litres(time):
    return math.floor(0.5 * time)

# 2
def paperwork(n, m):
    if n < 0 or m < 0:
        return 0
    else:
        return n * m
    
# 3
def grow(arr):
    new_list = sorted(arr)
    result = 1
    for i in new_list:
        result = result * i
    return result

# 4
def fake_bin(x):
    chars = []
    for i in x:
        num = int(i)
        if num < 5:
            chars.append('0')
        else:
            chars.append('1')
    result = ''.join(chars)
    return result
# listebit gavakete imitom stringit ver vqeni

# 5
def count_by(x, n):
    result = []
    for i in range(1, n + 1):
        result.append(x * i)

    return result

# 6
def to_jaden_case(string):
    word_count = string.split()
    cased_words = [i.capitalize() for i in word_count]
    return ' '.join(cased_words)
# used a little help

# 7
def accum(s):
    result = []
    for x, y in enumerate(s): # anawevrebs asoebs :) (amazec daxmareba imitoro ver davanawevre)
        part1 = y.upper() + y.lower() * x
        result.append(part1)
        
    return '-'.join(result)

# 8 
def remove_smallest(numbers):
    min_value = min(numbers)
    num_index = numbers.index(min_value)
    updated = numbers[:num_index] + numbers[num_index+1:]
    return updated
# Some of these worked

# 9
def solution(number):
    
    result = []
    for i in range(1, number):
        if i % 3 == 0 or i % 5 == 0:
            result.append(i)

    return sum(result)
# es gaketebuli mqonda :]

# 10 
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
    
# 11
def is_pangram(s):
    alphabet = set('abcdefghijklmnopqrstuvwxyz')
    filtered = set(s.lower()) & alphabet
    return filtered == alphabet
