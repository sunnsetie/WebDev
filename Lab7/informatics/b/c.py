a = int(input())
b = int(input())

if (str(a) == str(a)[::-1]) & (len(str(a)) == 4):
    if b == 1:
        print("YES")
    else:
        print("NO")
else:
    if b != 1:
        print("YES")
    else:
        print("NO")

