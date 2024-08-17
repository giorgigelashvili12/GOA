def smash(words):
    full_sentence = ''
    for word in words:
        full_sentence = '{} '.format(word)
    return full_sentence[:-1]

def get_sum(a, b):
    if a == b:
        return a
    
    maximum = max(a, b)
    minimum = min(a, b)

    result = sum[range(maximum, minimum + 1)]
    return result