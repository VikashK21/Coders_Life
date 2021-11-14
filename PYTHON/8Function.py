# ###################################################  Meraki Qs:
# #########################   #1
# #p1
# def ask_qestions(a):
#     print(a)
# ask_qestions("ek baar")
# ask_qestions("ek baar")
# ask_qestions("ek baar")
# ask_qestions("ek baar")
# ask_qestions("ek baar")

# #p2
# def ask_qestions(a="ek baar"):
#     for i in range(5):
#         print(a)
# ask_qestions()

# #########################   #2
# #p1
# def f(numbers = [3, 5, 7, 34, 2, 89, 2, 5]):
#     return max(numbers)
# print(f())

# #p2
# def f(numbers = [3, 5, 7, 34, 2, 89, 2, 5]):
#     return sum(numbers)
# print(f())

# #p3
# def f(numbers = [3, 5, 7, 34, 2, 89, 2, 5]):
#     x=numbers.sort()          # when we use the sort method we cannot store in a new variable at that sport.
#     numbers.sort()
#     return x
# print(f())

# #p4
# def f(numbers = [3, 5, 7, 34, 2, 89, 2, 5]):
#     numbers.reverse()
#     return numbers
# print(f())

# #p5
# def f(numbers = [3, 5, 7, 34, 2, 89, 2, 5]):
#     return min(numbers)
# print(f())

# #########################   #3 #Debugging

# # Question 1
# def sum():          #  missing of ':' colon.
#     print(12+13)
# sum()

# # Question 2
# def welcome():      # spelling error in daf (def).
#     print("Welcome to function")
# welcome()

# # Question 3
# isEven()        # we cannot call the function before the def statement. Always need to call at end and out of the indentation. 

# def isEven(a):
#     if(a%2==0):
#         print("Even Number")
#     else:
#         print("Old Number")
# isEven(22)

# #########################   #4

# def function_print_lines(a=0,b=0):
#     return (a , b)
# print(function_print_lines(a=input('enter1: '),b=input('enter2: ')))
# print(type(function_print_lines()))

# #########################   #Special Qs:
# p1
# def same(a):
#     return a
# print(same("hello"))
# def gum(b):
#     return b
# print(gum("NavGurukul"))

# ########################   #5
# def isGreaterThen20(a,b=20):
#     if a>b:
#         return "Your input is greater."
#     else:
#         return "Your input is lesser."
# print(isGreaterThen20(a=int(input("enter a No.: "))))

# ########################   #6
# num1 = 56
# num2 = 12
# def add_numbers(num1,num2):
#     return num1+num2
# print(add_numbers(num2,num1))

# ########################   #6
# a=[50, 60, 10] 
# b=[10, 20, 13]
# for i in range(3):
#     def add_numbers(n):
#         return a[n]+b[n] 
#     print(add_numbers(i))


# ########################   #5
# p1
# def check_numbers(a,b):
#     if a%2==0 and b%2==0:
#         return "Dono even hain"
#     else:
#         return "Dono numbers even nahi hai"
# print(check_numbers(a=int(input('enter a no.: ')),b=int(input('enter another no.: '))))

# ########################  #6
# a=[12,12,12,1,2,2]
# b=[12,7,68,7,8,78]
# def f(a,b):
#     return a+b
# for i in range(len(a)):
#     print(f(a[i],b[i]))

# ########################    #7
# def vote(a):
#     if a>=18:
#         return "You are eligible for vote."
#     else:
#         return "You are not eligible for vote."
# print(vote(a=int(input('Enter your age: '))))

# ########################    #8
# def perfectnum():
#     for n in range(1,100000):
#         s=0
#         for i in range(1,n):
#             if n%i==0:
#                 s+=i
#         if s==n:
#             print(s) 
# perfectnum()

#############################################   #Q3
# def ava(a,b,c):
#     print('The sum = '+str(a+b+c)) 
#     return 'The avarage = '+str((a+b+c)/3)
# print(ava(a=int(input('Enter No1: ')),b=int(input('Enter No2: ')),c=int(input('Enter No3: '))))

#############################################   #Q4
# def evodd(a):
#     for i in range(a+1):
#         if i%2==0:
#             print(i,'EVEN')
#         else:
#             print(i,'ODD')
# evodd(a=int(input('Enter a No.: ')))

#############################################   #Q5
# def add(a):
#     s=0
#     for i in range(a+1):
#         if i%3==0:
#             s+=i
#         elif i%5==0:
#             s+=i
#     return s
# print(add(a=int(input('Enter a No.: '))))

#############################################   #Q6
# def speed(a):
#     if a<=70:
#         print('OK')
#     elif a>70:
#         s=(a-70)//5
#         print('points:',s)
#         if s>=12:
#             print('License Suspended')
# speed(a=int(input('Enter the speed of vehicle: ')))

#############################################   #Q7
# def lenth(a,b):
#     if len(a)>len(b):
#         print(a)
#     elif len(b)>len(a):
#         print(b)
#     else:
#         print("",a,"\n",b)
# lenth(a=input('Enter anything: '), b=input('Enter anything: '))

#############################################   #Q8
# def nums(a):
#     sl={}
#     for i in range(1,a+1):
#         sl[i]=i**2
#     return sl
# print(nums(a=int(input('Enter a No.: ')))) 

#############################################   # Code Output: Q1
# def employee(name,salary=20000):
#         print(name,"your salary is:-",salary)

# employee("kartik",30000)
# employee("deepak")
# # Output: - kartik your salary is:- 30000  #- deepak your salary is:- 20000

#############################################   # Code Output: Q2
# def primeorNot(num):     
#     if num > 1:
#         for i in range(2,num):
#             if (num % i) == 0:
#                 print(num,"is not a prime number")
#                 print(i,"times",num//i,"is",num)
#                 break
#             else:
#                 print(num,"is a prime number")

#     else:
#            print(num,"is not a prime number")
# primeorNot(406)
# # Output:-
# # 406 is not a prime number
# # 2 times 203 is 406

#############################################   # Code Output: Q3
# def greet(*names):
#     for name in names:
#                print("Hello", name)
# greet("sonu", "kartik", "umesh", "bijender")
# # Output:-
# # Hello sonu
# # Hello kartik
# # Hello umesh
# # Hello bijender

#############################################   # Code Output: Q4
# def sumofdigits(number):
#     sum = 0
#     modulus = 0
#     while number!=0 :
#         modulus = number%10
#         sum+=modulus
#         number/=10
#     return sum

# print(sumofdigits(123))
# # Output:-
# # 6

#############################################   # Code Output: Q5
# def  meal(day,time):
#     if day=="sunday":
#         if time=="breakfast":
#             return "dosa"
#         elif time=="lunch":
#             return "dal rice"
#         elif time=="dinner":
#             return "paneer and  chapati"
#         else :
#             return "time not found"
#     elif day=="monday":
#         if time=="breakfast":
#             return "fried rice"
#         elif time=="lunch":
#             return "aloo rice"
#         elif time=="dinner":
#             return "chhole bhature"
#         else :
#             return "time not found"
#     elif day=="other":
#         if time=="breakfast":
#             return "aloo"
#         elif time=="lunch":
#             return "rajma rice"
#         elif time=="dinner"    :
#             return "veg-chapati"
#         else :
#             return "time not found"
            
# print(meal("sunday","lunch"))
# print(meal("monday","dinner"))
# # Output:-
# # - dal rice # - chhole bhature

#############################################   # Code Debugging Q1
# def calculate_sum(a,b):
#     sum = a+b
#     print(sum)
# calculate_sum(4,5)        #The name of calling is wrong name, it should be 'calculate_sum' (sum).

#############################################   # Code Debugging Q2
# def multi(a,b):        #It is the function but we start with 'def'-define name not (function).
#     multiply=a*b
#     return multiply
# print(multi(3,4))

#############################################   # Code Debugging Q3
# def Avg(number1,number2,number3):        #We know that Python is similar like our English language but we start with small letters in Python.(Def)
#     avg=number1+number2+number3/3
#     print(sum)
# Avg(1,3,2)

#############################################   # Code Debugging Q4
# def voter(age):
#     if age < 18:                #Whenever we mention colon (:) we always write something or some statements in the body otherwise it'll throw an ERROR.
#         print("eligible")
#     else:
#         print("not eligible")
# voter(20)                   #Also we call the function outside the body of func.

#############################################   # Code Debugging Q5
# def distance(kms):
#     if kms < 20:                #
#         print("close")          #
#     elif kms < 50:              #
#         print(median)           #
#     else:                       #
#         Print(far)              #
# distance(20,30)         #Every where there is Identation Error.

#######################################################################     #Extra Qs:
### Finding the length.
# a=({"vikash",'rajesh'},56)
# def length(a):
#     s=0
#     for i in a:
#         s+=1
#     return s
# print(length(a))

#######################################################################

























