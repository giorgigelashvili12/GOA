def bunch_of_names(name1, name2, name3, name4):
    print('Hello ', name1)
    print('Hello ', name2)
    print('Hello ', name3)
    print('Hello ', name4)

bunch_of_names('name1', 'name2', 'name3', 'name4')

def check_triangle(side1, side2, side3):
    if side1 + side2 > side3 and side1 + side3 > side2 and side2 + side3 > side1:
        print('Valid')
    else:
        print('False')