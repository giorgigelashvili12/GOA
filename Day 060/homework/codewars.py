# 1
def smash(words):
    combination = ' '.join(words)
    return combination

# 2
def difference_in_ages(ages):
    youngest = min(ages)
    oldest = max(ages)
    difference = oldest - youngest
    result = (youngest, oldest, difference)
    
    return result

# 3
def get_sum(a,b):
    if a == b:
        return a or b
    
    minimum = min(a, b)
    maximum = max(a, b)
    
    result = sum(range(minimum, maximum + 1))
    return result

# 4
def best_friend(txt, a, b):
    for i in range(len(txt)):
        if txt[i] == a:
            if i + 1 == len(txt):
                return False
            elif txt[i + 1] != b:
                return False
    return True

# 5
import time

def make_me_slow():
    start = time.time()
    while time.time() - start < 7:
        pass

# 6
def find_short(s):
    words = s.split()
    
    minlen = 100000000000000000000000000 # random
    
    for i in words:
        word_len = len(i)
        
        if word_len < minlen:
            minlen = word_len
            
    return minlen

# 7
def find(string):
    num = int(string[0])
    answer = num
    i = 1
    test = str(num)
    
    while test != string:
        if test == string[:len(test)]:
            num += 1
            test += str(num)
        else:
            i += 1
            num = int(string[:i])
            answer = num
            test = str(num)

    return answer