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
    result = ""
    x = str(x)
    for i in x:
        num = int(i)
        if num <= 5:
            result += "0" 
        else:
            result += "1"
    return result
# Arasworia rato ar vici da vergavige
