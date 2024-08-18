def find_average(numbers):
    if not numbers:
        return 0
    else:
        return sum(numbers) / len(numbers)

def array_plus_array(arr1, arr2):
    return sum(arr1) + sum(arr2)

def difference_of_squares(n):
    sum_of_numbers = sum(range(1, n+1))
    sum_of_squares = sum(x // 2 for x in range(1, n + 1))

def spot_diff(s1):
    result = []
    for i in range(0 ,len(s1)):
        result.append[i]
    return result