# def t(n):
#     return lambda a: a*n
# n=int(input("Enter any No.: "))
# for i in range(1,10):
#     print(t(i))


# n=int(input('Enter a number:-'))
# x=lambda a:a*n
# for i in range(1,11):
#     print(x(i))


# #####################################################
# n=int(input("Table till: "))
# l=int(input("Table counting Till: "))
# a=1
# b=1
# while a<=n:
#     print(str(a)+' * '+str(b)+' = '+str(a*b))
#     if b<l:
#         b+=1
#     else:
#         print()
#         a+=1
#         b=1

# ####################################################
# def twopowers(number):
#     if number==1:
#         return 1
#     return 2 * twopowers(number-1)

# index=1
# while(index<10):
#     print(twopowers(index))
#     index+=1

# ####################################################
# def factorial(number):
#     if number==1:
#         return 1
#     return number * factorial(number - 1)

# print(factorial(number=int(input('Enter a No.: '))))

# ####################################################
# def pattern(number):
#     if number == 1:
#         return 1
#     else:
#         return pattern(number-1) + 3
# print(pattern(10))

# #####################################################################################################################
#   ###################### #Extra Qs: .....................THE SPECIAL CODE...............############################
# ######################################################################################################################
v=1
vi=2
c = 0
s=0
n=int(input('Enter a No.: '))
def pattern():
    global v,vi,c,s
    s+=1
    c=v
    if s==n:
        return "The pattern is right here. "
    def func(x):
        if x==0:
            return 1
        else:
            func(x-1)
            if x<=v and x>c:
                if x<10:
                    print(x,end="  ")
                else:
                    print(x,end=" ")
    v += vi
    vi += 1    
    print() 
    func(v)
    pattern()
print(1)
pattern()




