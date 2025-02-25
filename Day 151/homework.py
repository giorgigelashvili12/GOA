# 1. 8kyu
def bool_to_word(boolean):
    # TODO
    if boolean == True:
        return "Yes"
    else:
        return "No"
    
# 2. 8kyu
def remove_char(s):
    return s[1:-1]

# 3. 8kyu
def string_to_number(s):
    return int(s)
# or
def string_to_number(s):
    # your code here
    if s == str(s):
        return int(s)
    
# 4. 8kyu
def no_space(x):
    result_string = x.replace(" ", "")
    return result_string

# or
def no_space(x):
    #your code here
    return x.replace(' ' ,'')

# 5. 8kyu
def sum_array(a):
    return sum(a)

# 6. 8kyu
def simple_multiplication(num):
    if num % 2 == 0:
        num *= 8
    else:
        num *= 9
    return num

# 7. 8kyu
def invert(lst):
    return [-num for num in lst]

# 8. 8kyu
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

# 9. 8kyu
def string_to_array(s):
    return s.split(' ')

# 10. 8kyu
def rps(p1, p2):
    if p1 == 'scissors' and p2 == 'paper':
        return 'Player 1 won!'
    elif p1 == 'scissors' and p2 == 'rock':
        return 'Player 2 won!'
    elif p1 == 'rock' and p2 == 'scissors':
        return 'Player 1 won!'
    elif p1 == 'rock' and p2 == 'paper':
        return 'Player 2 won!'
    elif p1 == 'paper' and p2 == 'rock':
        return 'Player 1 won!'
    elif p1 == 'paper' and p2 == 'scissors':
        return 'Player 2 won!'
    else:
        return 'Draw!'
    
# 11. 8kyu
def greet(name, owner):
    if name == owner:
        return 'Hello boss'
    else:
        return 'Hello guest'
    
# 12. 8kyu
def monkey_count(n):
    return list(range(1, n + 1))

# 13. 8kyu
def human_years_cat_years_dog_years(human_years):
    if human_years == 1:
        return [1, 15, 15]
    elif human_years == 2:
        return [2, 24, 24]
    else:
        cat_years = 24 + (human_years - 2) * 4
        dog_years = 24 + (human_years - 2) * 5
        return [human_years, cat_years, dog_years]
    
# 14. 8kyu
def is_isogram(word):
    word = word.lower()
    return len(set(word)) == len(word)