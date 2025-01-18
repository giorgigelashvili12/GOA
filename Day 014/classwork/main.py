
def positive_sum(arr):
    sum_of_positives = 0
    for num in arr:
        if num > 0:
            sum_of_positives += num
    
    return sum_of_positives


def count_sheeps(sheep):
    amount_of_sheeps = 0
    for element in sheep:
        if element == True:
            amount_of_sheeps += 1
    return amount_of_sheeps

my_str = 'Hello World'
new_str=""

for char in my_str:
    if char != " ":
        new_str += char
print(new_str)