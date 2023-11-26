# MADLOBA TYESHELA 

# Arithmetic Operators

x = 10
y = 3

addition_result = x + y # 10 + 3 = 13
subtraction_result = x - y # 10 - 3 = 7
multiplication_result = x * y # 10 X 3 = 30
division_result = x / y # 10 : 3 = 3.333..
integer_division_result = x // y # 10 :: 3 = 3 no nashti
modulus_result = x % y # 10 % 3 = 1
exponentiation_result = x ** y # 10 XX 3 = 1000

# Assigment Operators

x = 5

# 3 is an example
equal_to = "=" # example x = 5
plus_or_equal = "+=" # x += 3, same as x = x + 3
minus_or_equal = "-+" # x -= same as x = x - 3
substraction_or_equal = "*=" # x *= 3 same as x = x * 3
division_or_equal = "/=" # x /= same as x = x / 3, (:)
modulus_or_equal = "%=" # x %= same as x = x % 3
floor_division_or_equal = "//=" # x //= same as x = x // 3
exponentiation_or_equal = "**=" # x **= same as x = x ** 3
and_capital_or_equal = "&-=" # x &= same as x = x & 3, output: 1
or_capital_or_equal = "|=" # x |= same as x = x|3, output: 7
xor_capital_or_equal = "^=" # x ^= same as x = x ^ 3, ouput: 6
zero_fill_left_shift_or_equal = ">>=" # x >>= same as x = x >> 3, output: 0
signed_right_shift_or_equal = "<<=" # x <<= same as x = x << 3, ouput: 40

# Comparison Operators

x = 5

equal = "==" # example x == y (if False -> Error)
not_equal = "!=" # example x != y 
greater_than = ">" # example x > y
less_than = "<" # example x < y
greater_or_equal = ">=" # x >= y
less_or_equal = "<=" # x <= y

# Logical Operators

operator_and = "x < 5 and  x < 10" # Returns True if both statements are true
operator_or = "x < 5 or x < 4" # Returns True if one of the statements is true
operator_not = "not(x < 5 and x < 10)" # Reverse the result, returns False if the result is true

# Identity Operators

operator_is = "x is y" # Returns True if both variables are the same object
operator_is_not = "x is not y" # Returns True if both variables are not the same object

# Membership Operators

operator_in = "x in y" # Returns True if a sequence with the specified value is present in the object
operator_not_in = "x not in y" # Returns True if a sequence with the specified value is not present in the object

# Bitwise Operators
 
x = 3 # here

operator_capital_and = "&, x & y"  # Sets each bit to 1 if both bits are 1
# output: 2
operator_capital_or = "|, x | y" # Sets each bit to 1 if one of two bits is 1
# output: 7
operator_capital_xor = "^, x ^ y" # Sets each bit to 1 if only one of two bits is 1
# output: 5
operator_capital_not = "~, x ~ y" # Inverts all the bits
# output: -4
operator_zero_fill_left_shift = "<<, x << 2" # Shift left by pushing zeros in from the right and let the leftmost bits fall off
# output: 12
operator_signed_right_shift = ">>, x >> 2" # Shift right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
# output: 2

# Operator Predence
# - Examples:
print((6 + 3) - (6 + 3))
# Parentheses has the highest precedence, meaning that expressions inside parentheses must be evaluated first
print(100 + 5 * 3)
# Multiplication * has higher precedence than addition +, and therefor multiplications are evaluated before additions

# - Operators:
# x is an example, x = 3
parentheses = "()"
exponentiation = "**"
unary_plus = "+x" # output: 96
unary_minus = "-x" # output: 97
unary_bitwise_not = "~x" # utput: 103
multiplication = "*" # 2 * 3 = 6
division = "/" # 6 / 2 = 3
floor_division = "//" # 6 // 4 = 1
modulus = "%" # 6 % 4 = 2
addition = "+" # 2 + 2 = 4
subtraction = "-" # 4 - 3 = 1
bitwise_left_shifts = "<<"
bitwise_right_shifts = ">>"
bitwise_capital_and = "&"
bitwise_capital_xor = "^"
bitwise_capital_or = "|"

# Membership Operators:
fruits = ['apple', 'banana', 'cherry']

is_in_list = 'banana' in fruits # True
is_not_in_list = 'orange' not in fruits # True

# Identity Operators:
x = [1, 2, 3]
y = x

is_same_object = x is y  # True
is_not_same_object = x is not None  # True

