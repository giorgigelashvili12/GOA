# HW 1
# მოცემული 3 მთელი a, b, c ̸= 0
# მოძებნეთ a და b რიცხვებს შორის მოხვედრილი c რიცხვის ჯერადი რიცხვების რაოდენობა ყველა შესაძლო ვარიანტისთვის
# თუ რომელიმე a, b-დან ჯერადია c-ს, მაშინ ჩათვალეთ შესაბამისი საზღვარი
def b(a, b, c):
    if a == 0 or b == 0 or c== 0:
        return 0 
    
    s = (a * b) // c
    e = (a // b) * c

    if a % c == 0 or b % c == 0:
        e = (b // c) * a 

    print(s, e)

b(1, 99, 3)

# HW 2
# რიცხვები გადაყავს ერთი პოზიციური სისტემიდან მეორეში ჩაშენებული ფუნქციების გამოყენების გარეშე
# პროგრამა მინიმუმ უნდა მუშაობდეს 2, 4, 10, 16 ფუძის მქონე სისტემებისთვის

# def f():
#     return
    # პოზიციური სისტემა ანუ bin, hex?
def f(n, b):
    # monacemis gadamowmeba
    if n == 0:
        return "0"
    
    negative = n < 0

    if negative:
        n = abs(n)

    v = []
    #monacemis damushaveba
    r = n % b
    v.append(str(r))

    v.reverse()
    result = ''.join(v)

    if negative: 
        result = '-' + result 
    return result

print(f(45, 3))
print(f(25, 6))
print(f(-10, 3))

# HW 3
# გამოიკვლიეთ მასივში მაქსიმუმის მოძებნის ამოცანა 5 ელემენტის შემთხვევაში
#  დაწერეთ ფსევდოკოდი, ბლოკ-სქემა, ანალიზი
def m(a, b, c, d, e):
    if a > b:
        if a > c:
            if a > d:
                if a > e:
                    print(a)
                else:
                    if e:
                        print(e)
            else:
                if d > e:
                    print(d)
                else:
                    print(e)
        else:
            if c > d:
                if c > e:
                    print(c)
    else:
        if b > c:
            if b > d:
                if b > e:
                    print(b)
                else:
                    print(e)
            else: 
                if d > e:
                    print(d)
                else:
                    print(e)
        else:
            if c > d:
                if c > e:
                    print(c)
            else: 
                if d > e: 
                    print(d)

m(3, 5, 1, 3, 6)