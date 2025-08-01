file = open('C:/Users/user/Desktop/GOA/Day 184/classwork/test.txt', 'r')
plus = open('C:/Users/user/Desktop/GOA/Day 184/classwork/+.txt', 'w')
minus = open('C:/Users/user/Desktop/GOA/Day 184/classwork/-.txt', 'w')

numbers = file.read().split()

for i in numbers:
    if int(i) <= 0:
        minus.write(f"{i} \n")
    else:
        plus.write(f"{i} \n")
