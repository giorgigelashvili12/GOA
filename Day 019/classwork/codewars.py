# CODEWARS PRACTICES
# digitizing nums in listes reversed
n = 35231 # --> [1,3,2,5,3]
def digitize(n):
    new_arr = n
    for char in str(n):
        new_arr.append(int(char))
    new_arr.reverse()
    return new_arr

# Create a function, which returns time in miliseconds
# h = 0
# m = 1
# s = 1
# result = 61 000
def past(h,m,s):
    return (h * 3600 + m * 60 + s * 1) * 1000 # miliseconds
        #secs in hour # secs in min # sec

# paperwork function for children
# n is count of children
# m is count of paperwork
def paperwork(n, m):
    if n or m < 0:
        return 0
    else:
        return n * m
    
# timmy and mary are in love,
# forgot the question :/
def love_fune(flower1, flower2):
    if flower1 % 2 == 0 and flower2 % 2 != 0:
        return True
    elif flower1 % 2 != 0 and flower2 % 2 == 0:
        return True
    else:
        return False
    
# convert name in symbols
# option 1
def abbrev_name(name):
    words = name.split() # splits name and surname
    first_letter = words[0][0].capitalize() # outputs 1st letter of 1st word
                #1st word   #1s letter
    second_letter = words[1][0].capitalize()
                #2nd word   #1st letter
    new_word = first_letter + "." + second_letter
    return new_word # outputs in terminal
# print(abbrev_name("Giorgi Gelashvili")) # name for example

# second option:
def abbrev_name(name):
    words = name.split()
    first_letter = words[0][0]
    second_letter = words[1][0]
    result = ".".join(first_letter + second_letter)
    return result

# third option
def abbrev_name(name):
    abrev = ""
    abrev += name[0]
    abrev += "."
    for i in range(len(name)):
        if name[i] == " ":
            abrev += name[i + 1]
    return abrev.upper()

# fourth option (WOW)
def abbrev_name(name):
    words = name.split()
    first_letter = words[0][0]
    first_letter.upper()
    second_letter = words[1][0]
    second_letter.upper()
    return "{}.{}".format(first_letter,second_letter)

print(abbrev_name("George Harris"))