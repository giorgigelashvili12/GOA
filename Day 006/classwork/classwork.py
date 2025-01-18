age = int(input("Enter Your Age"))
limit = 18
height = int(input("Enter Your Height"))

if age > limit or height > 180:
    print("Yes")
elif age < limit and height > 180:
    print("You're a Kid..")
else: 
    print("You're Short")