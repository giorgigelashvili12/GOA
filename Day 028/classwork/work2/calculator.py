# Simple Python Calculator! only 4 operators

import math

# addition function
def addition(num1, num2):
    return num1 + num2
# subtraction fucntion
def subtraction(num1, num2):
    return num1 - num2
# multiplication function
def multiplication(num1, num2):
    return num1 * num2
# division function 
def division(num1, num2):
    return num1 / num2

# selection (offers)
print("select: ")
print("1. addition")
print("2. subtraction")
print("3. multiplication")
print("4. division")

# choosing operator & numbers
selection = int(input("Select operation: 1, 2, 3, 4 :"))
enter_num1 = int(input("Enter first number: "))
enter_num2 = int(input("Enter second number: "))

if selection == 1: # if chosen 1, do addition
    print(enter_num1, "+", enter_num2, "=", addition(enter_num1, enter_num2))
elif selection == 2: # if chosen 2, do subtraction
    print(enter_num1, "-", enter_num2, "=", subtraction(enter_num1, enter_num2))
elif selection == 3: # if chosen 3, do multiplication
    print(enter_num1, "*", enter_num2, "=", multiplication(enter_num1, enter_num2))
elif selection == 4: # if chosen 4, do division
    print(enter_num1, "/", enter_num2, "=", division(enter_num1, enter_num2))
else: # if error error :)
    print("Error.")