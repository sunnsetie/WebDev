b = input()
d = 0

for i in range(len(b)):
    digit = int(b[i])
    d += digit * 2**(len(b)-1-i)


print(d)