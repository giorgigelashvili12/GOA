import random
n = (8)

def passswordGenerator(n):
    characters = "1234567890qwertyuiopasdfghjklzxcvbnm"

    password = ""

    for i in range(n):
        password += random.choice(characters)

    return password

password = passswordGenerator(n)
print("Strong Password: ", password)