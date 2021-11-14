# a = open("/home/navgurukul20/Desktop/VIKASH_K/Recursion.py", "r")
# print(a.read())

###############################################################
# import os 
# if os.path.exists('vikash.txt'):
#     v=open('vikash.txt',"r+")
#     v.write('I am a disco dancer.\nAnd I am also a good rapper.')
#     print(v.read(5))
#     v.close()
# else:
#     print('No')

############################################################### Meraki Qs:
# batch1_students = ["Shivam", "Rahul", "Kavay", "Dhannu", "Deepanshu", "Nitin", "Manoj", "Shakrudin", "Tara", "Suraj", "Krishna"]
# f=open('vikash.txt','a+')
# for i in batch1_students:
#     f.write(i)
# print(f.readline())
# s=0
# for k in :
#     f.read()
#     s+=1
# print(s)
# f.close()

#############Meraki###############################################################Q1
# newf=open('krish.text','r')
# for i in newf:
#     print(newf.read())
# newf.close()

#############################################################################Q2
# n=open('/home/navgurukul20/Desktop/VIKASH_K/krish.text','r')
# nw=open('people1-exercise.txt','w')
# s=0
# for i in n:
#     x=n.readline()
#     nw.write(x)
#     s+=1
# print(s)
# n.close()
# nw.close()

#############################################################################Q3
# m=open('file-question3.txt','w')
# banks_list = ["Kotak", "HDFC", "RBL", "SBI", "Bank of Baroda"]
# for i in banks_list:
#     m.write(i+"\n")
# m.close()

#############################################################################Q3
# x=open('question3.txt','r')
# a=open('delhi.txt','w')
# b=open('shimla.txt','w')
# c=open('others.txt','w')
# for i in x:
#     if 'delhi' in i:
#         a.write(i)
#     elif 'shimla' in i:
#         b.write(i)
#     else:
#         c.write(i)
# x,a,b,c.close()        
        
###########################################################Login - Sinup
vik=open('./Files_filehandling/Sinup.txt','w')
vik.write('Welcome to this Login/Signup')

print('1. Login \n2. Signup')
x=int(input('Choose the option: '))
if x==1:
    sin=open('./Files_filehandling/Sinup.txt','r')
    a=input('Email Address: ')
    s=0
    for m in sin:
        if a in m:
            s+=1
            print('Successfully done.')
    if s==0:
        print('Go for Sinup!!')
elif x==2:
    sin=open('./Files_filehandling/Sinup.txt','a')
    a=input('Email Address: ')
    b=input('Password: ')
    if '@gmail.com' in a:
        sin.write(a+"\n")
        if len(b)>=8:
            sin.write(b+"\n")
            print('Successfully done.')
        else:
            print('Weak Password!!')
    else:
        print('Invalid Email Address!!')
vik.close()






