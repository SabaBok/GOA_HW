def find_additive_numbers(num):
    print(num)
    for i in range(1, len(num)):
        if i > 1 and num[0] == '0':
            return []
        a = num[:i]
        for j in range(i+1, len(num)):
            if j-i > 1 and num[i] == '0':
                break
            b = num[i:j]
            seq, rest = [a,b], num[j:]
            while rest:
                x = str(int(seq[-2]) + int(seq[-1]))
                if not rest.startswith(x):
                    break
                seq.append(x)
                rest = rest[len(x):]
            else:
                return seq
    return []

#https://www.codewars.com/kata/5693239fb761dc8670000001