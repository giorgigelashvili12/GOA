# codewars
# 1
def string_to_array(s):
    if s == "":
        return [""]
    else:
        s = s.split()
        s = list(s)
        return s
    
# 2
def number_to_string(num):
    return str(num)

# 3
def positive_sum(arr):
    new_arr = []
    for i in arr:
        if i > 0:
            new_arr.append(i)
    return sum(new_arr)

# 4
def points(games):
    count = 0
    for i in games:
        if i[0] > i[2]:
            count += 3
        elif i[0] == i[2]:
            count += 1
    return count

# 5
def solution(number):
    if number < 0:
        return 0
    else:
        count = 0
        for i in range(1, number):
            if i % 3 == 0 or i % 5 == 0:
                count += i
        return count
  
# 6
#?