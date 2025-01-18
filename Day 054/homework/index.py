# 1. შექმენით ორი ცვლადი სადაც შეინახავთ int ტიპის მნიშვნელობებს და print() ის გამოყენებით გააკეთეთ ყველა მათემატიკური ოპერაცია: გამრავლება, გაყოფა, მიმატება და გამოკლება.
num1 = 10
num2 = 10

addition_result = num1 + num2
subtraction_result = num1 - num2
division_result = num1 / num2
multiplication_result = num1 * num2

print(addition_result)
print(subtraction_result)
print(division_result)
print(multiplication_result)

#2. შექმენით ცვლადები 10 წიგნისთვის ( სახელი ცალკე, ფასი ცალკე, 
# 5 წიგნს გაუკეთეთ 10%იანი ფასდაკლება, 5 წიგნს გაუკეთეთ 20%იანი ფასდაკლება) 
# Gavartule da klassebi shevqmeni, da ki naswavli maq yvelaferi da sruliad gasagebia

class Book:
    def __init__(self, name, price, arthor):
        self.name = name
        self.price = price
        self.arthor = arthor

    def __str__(self):
        return self.name + " was written by " + self.arthor + " and it costs " + str(self.price) + " Euros"

book1 = Book("Killing Floor", 6.99, "Lee Child")
book2 = Book("The One Memory Of Flora Banks", 6.99, "Emily Barr")
book3 = Book("Selected Stories By D. H. Lawrence", 6.99, "Anne Collins")
book4 = Book("The Call of the Wild", 6.99, "Jack London")
book5 = Book("The Prince and the Pauper", 6.99, "Mark Twin")
book6 = Book("Robinson Crusoe", 6.99, "Daniel Defoe")
book7 = Book("The Wizard of Oz", 6.99, "L. Frank Baum")
book8 = Book("King Arthur and the Knights of the Round Table", 6.99, "Stephen Colbourn")
book9 = Book("Artemis Fowl", 6.99, "Eoin Colfer")
book10 = Book("Oliver Twist", 6.99, "Charles Dickens")

print(book1)
print(book2)
print(book3)
print(book4)
print(book5)
print(book6)
print(book7)
print(book8)
print(book9)
print(book10)

# 3. შემოიტანეთ თქვენი ოჯახის წევრების ასაკი და დაუპრინტეთ თუ რამდენი წლისები იქნებიან 25 წლის შემდეგ.
dad = 40
mom = 41

future_dad = dad + 25
future_mom = mom + 25

print(future_dad)
print(future_mom)

# მომხმარებელს შემოატანინეთ თავისი სახელი, გვარი, ასაკი, საცხოვრებელი ადგილი, პროფესია, ჰობი და კიდევ დამატებითი ინფორმაცია, შემდეგ ამ შემოტანილი ინფორმაციით ააწყვეთ ერთი დიდი წინადადება და დაბეჭდეთ ტერმინალში.
name = input("Enter Your Name: ")
surname = input("Enter Your Surname: ")

while True:
    
    age = int(input("Enter Your Age: "))
    break

address = input("Enter Your Address: ")
job = input("Enter Your Job: ")
hobby = input("Enter Your Hobby/Hobbies (e.g., 'Hiking'): ")

if ' ' in hobby:
    hobby_result = "Your hobbies are " + hobby
else:
    hobby_result = "Your hobby is " + hobby

result = (
    "Your name is " + name,
    "Your surname is " + surname,
    "You are " + str(age) + " years old",
    "You live at " + address,
    "You are a " + job,
    hobby_result
)

print(result)

# 5. მომხმარებელს შემოატანინეთ რიცხვი და დაბეჭდეთ ლუწია თუ კენტი.
number = int(input("Enter a full number: "))

if number % 2 == 0:
    print(str(number) + " is an even number.")
else:
    print(str(number) + " is an odd number.")

# Explanation: number % 2 calculates if number can divide by two, and if the remainder is equal to zero (number % 2 == 0), then it is an even number, and if remainder is bigger than 0, than the number is an odd number.