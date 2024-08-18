def all_nines(x):
    if (x % 5 == 0 or x % 2 == 0):
        return -1
    if x == 1:
        return 9
    
    m = 1
    all_nine = 9
    while all_nine % x != 0:
        all_nine = all_nine * 10 + 9
        m += 1
    return m