# დავალება: შექმენით პითონის პროგრამა, რომელსაც გადაეცემა სამკუთხედის სამი გვერდი და შეამოწმებს არსებობს თუ არა ეს სამკუთხედი
a = 20
b = 3
c = 7

if (a + b) > c:
    print("Samkutxedi iarsebebs")
elif (a * c) > b:
    print("Samkutxedi iarsebebs")
elif (b + c) > a:
    print("Samkutxedi iarsebebs")
else:
    print("Samkutxedi ar iarsebebs")

# დავალება2: შექმენით კალკულატორის ფუნქცია, რომელსაც ექნება მიმატება, გამოკლება, გამრავლება, გაყოფა, ხარისხი
def addition(num1, num2):
    return num1 + num2

def subtraction(num1, num2):
    return num1 - num2

def multiplication(num1, num2):
    return num1 * num2

def division(num1, num2):
    if num2 == 0:
        return "Errorm, Division by zero."
    return num1 / num2

while True:
    print("Options:")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("Enter 'q' to quit")

    choice = input("Choose an option (1/2/3/4/q): ")

    if choice == 'q':
        print("Bye.")
        break

    if choice not in ['1', '2', '3', '4']:
        print("Invalid choice. Please choose a valid option.")
        continue

    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))

    if choice == '1':
        result = addition(num1, num2)
        operation = "+"
    elif choice == '2':
        result = subtraction(num1, num2)
        operation = "-"
    elif choice == '3':
        result = multiplication(num1, num2)
        operation = "*"
    elif choice == '4':
        result = division(num1, num2)
        operation = "/"

    if isinstance(result, float):
        print(num1, operation, num2, "=", result)
    else:
        print(result)

    another_calculation = input("Do you want to perform another calculation? (yes/no): ").lower()

    if another_calculation != 'yes':
        print('Bye. Thanks for using our calculator!')
        break

# დავალება: შექმენით ცვლადები სახელად num1, num2, num3. num1-ში შეინახეთ 5, ხოლო  num2-ში 10. num3-ში შეინახეთ მათი ჯამი. შემდეგ დაბეჭდეთ num3-ის მნიშვნელობა
num1 = 5
num2 = 10
num3 = num1 + num2
print(num3)
num3 = num1 * num2
print(num3)