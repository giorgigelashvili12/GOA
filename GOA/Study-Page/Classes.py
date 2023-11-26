#class MyClass:
  #x = 5
#print(MyClass)
# Output: <class '__main__.MyClass'>

#class MyClass:
  #x = 5  # შეიქმნა რიცხვითი ცვლადი

#p1 = MyClass()
#print(p1.x)
# ouput: 5

# კლასების მნიშვნელობის გასაგებად, ჩვენ უნდა გავიგოთ ჩაშენებული __init__() ფუნქცია.
# ყველა კლასს აქვს ფუნქცია სახელწოდებით __init__(), რომელიც ყოველთვის სრულდება კლასის ინიცირებისას.(აღნიშვნა)
# გამოიყენეთ __init__() ფუნქცია ობიექტის თვისებებისთვის მნიშვნელობების მინიჭებისთვის ან სხვა ოპერაციებისთვის, რომლებიც აუცილებელია ობიექტის შექმნისას:

#class Person:
  #def __init__(self, name, age):
    #self.name = name
    #self.age = age

#p1 = Person("John", 36)
#print(p1.name)
#print(p1.age)

#__str__() ფუნქცია აკონტროლებს რა უნდა დაბრუნდეს, როდესაც კლასის ობიექტი წარმოდგენილია String სახით.
#თუ __str__() ფუნქცია არ არის დაყენებული, ობიექტის String გამოსახულება ბრუნდება:

#class Person:
  #def __init__(self, name, age):
    #self.name = name
    #self.age = age

#p1 = Person("John", 36)

#print(p1)
# output: <__main__.Person object at 0x000001D8D9662890>

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def __str__(self):
    return f"{self.name}({self.age})"    

p1 = Person("John", 36)

print(p1)