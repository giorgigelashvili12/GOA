# My own calculator 
print("Calculator")
print("Options:")

# List of Options
option_list = ["Addition", "Subtraction", "Multiplication", "division"]

print(option_list)

while True:
    choice = input("Choose 1/2/3/4")
    if choice in ('1', '2', '3', '4'):
        a = float(input())
        b = float(input())

        if choice == '1':
            print(int(a + b))
        elif choice == '2':
            print(int(a - b))
        elif choice == '3':
            print(int(a * b))
        elif choice == '4':
            print(int(a / b))
        else:
            print("Error has been detected.")