#def exclamation(word):
    #if word == "spam":
        #print(word)
    #else:
        #print(word + "!")

#exclamation("spam")
#exclamation("gio")

# output:
# spam
# gio!

#def exclamation(word):
    #print(word + "!")

#exclamation("gela")

# ouput:
# gela!

#def print_sum_twice(x, y):
    #print(x + y)
    #print(y + x)

#print_sum_twice(5, 8)

# output: 13, 13


#def sum(x, y): #iqmneba funqcia
    #return x+y #abrunebs gamotvlil mnishvnelobas da inaxavs mexsierebashi
#sum(5, 1)

x = lambda a : a + 10
print(x(5)) # aq, a = 5, shesruldeba a (5)+ 10 = 15

x = lambda a, b, c: a + b + c # shesruldeba 5 + 6 + 2 = 13
print(x(5, 6, 2)) # a = 5, b = 6, = 2

cars = ["Ford", "Volvo", "BMW"]
cars.pop(1)#0      #1      #2
print(cars)  #anu shlis meore elements (mocemulia)

fruits = ["apple", "banana", "cherry"]
fruits.clear() # shlis siashi mocemul yvela elements
print(fruits)

fruits = ["apple", "banana", "cherry"]#   <<<<<
x = fruits.copy() # sia opirdeba da x gardaiqmneba siad
print(x)

fruits = ["apple", "banana", "cherry"]
x = fruits.count("cherry") # itvlis ramdenjer aris 'cherry' mocemuli
print(x)

fruits = ['apple', 'banana', 'cherry']
cars = ['Ford', 'BMW', 'Volvo']
fruits.extend(cars) 
#rashi chaematos # es (siebi)
print(fruits)

fruits = ['apple', 'banana', 'cherry']
#            0        1          2
x = fruits.index("cherry")  # ra adgilze dgas es elementi? (manishnebeli)
print(x)

cars = ['Ford', 'BMW', 'Volvo']
cars.sort()  # alpabetis mixedvit awyobs elementebs
print(cars)



# ARGUMENTS
# codes can be used in function element such as if and loops

#DAVALEBA!!!!!!!!!!!!!!!!!!!!!!!!!!!
#შექმენით ფუნქცია რომელსაც ექნება ორი პარამეტრი 
# 1. saxeli
#2) ასაკი
#ფუნქცია უნდა პრინტავდეს წინადადებას სახელისა და ასაკის გამოყენებით,
#გამოიძახეთ ეს ფუნქცია ოჯახის ყველა წევრისთვის.

# Idea N: 1
#def parameter(name, age):
    #print("My name is " + name + " and I'm " + age + " years old")

#parameter("Giorgi", "12")

#def parameter_one(name_of_mom, age_of_mom):
    #print("My mom's name is " + name_of_mom + " and her age is " + age_of_mom)

#parameter_one("Natia", "40")



