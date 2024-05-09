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
# vergavige 10jer vcade zustad sxvadasxva kodi da mainc ar qna

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
# piroba ver gavige, zogi 1 nishniani zogi 2iani da 3iani ratoa