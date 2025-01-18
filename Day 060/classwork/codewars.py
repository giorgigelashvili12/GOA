def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
    
def count_sheeps(sheep):
    amount_of_sheeps = 0
    for element in sheep:
        if element == True:
            amount_of_sheeps += 1
    return amount_of_sheeps
