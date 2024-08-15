my_str = 'Hello World'
new_str=""

for char in my_str:
    if char != " ":
        new_str += char
print(new_str)



def count_sheeps(sheep):
    amount_of_sheeps = 0
    for element in sheep:
        if element == True:
            amount_of_sheeps += 1
    return amount_of_sheeps



import math
def litres(time):
    return math.floor(time * 0.5)