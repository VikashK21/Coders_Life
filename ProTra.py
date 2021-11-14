# a=int(input('Enter a No.: '))
# for k in range(1,a+1):
#     s=0
#     for i in range(1,k+1):
#         if k%i==0:
#             s+=1
#     if s==2:
#         print(k,'Prime No.')
#     else:
#         print(k,'not a Prime No.')
        
######################################################
# a=[15,15,15,10,20,16,14,2,5,11,22,8,9]
# v=[]
# for i in range(len(a)-1):
#     if a[i]+a[i+1]==30:
#         b=[a[i],a[i+1]]
#         if b not in v:
#             v.append(b)
# print(v)                
           
######################################################
# x=[]
# while True:
#     a=input('Enter the input: ')
#     if a not in x:
#         x.clear()
#         x.append(a)
#         print(a)
#     else:
#         x.append(a)
#         print(a,"_",(len(x)-1))    
    

###########################################################
# a=[1]
# for i in a:
#     a.append(1)
# print(i)

##############################################
##############as on 14th Sept:
# e=[12,13,21100,15,10,89,56]
# for i in range(0,len(e)):
#     for v in range(0,len(e)):
#         if e[i]>e[v]:
#             x=e.pop(i)
#             e.insert(v,x)
#             y=e.pop(v)
#             e.insert(v,y)
# print(e)
# print(e[3],'The third max.')
# print(e[-3],'The third min.')

##########################################################################   
# a=[15,15,15,10,20,16,14,2,5,11,22,8,9,15,15]
# v=[]
# for i in range(len(a)-1):
#     if a[i]+a[i+1]==30:
#         b=[a[i],a[i+1]]
#         if b not in v:
#             v.append(b)
# print(v)


# a=5
# if a==5:
#     #vikash
#    print(a)
# else:
#  print(a,'vikash')

###########################################################
##as on 22and Sept:

# import json
# while True:
#     print('\n1. Add         2. Update\n3. Delete      4. Enter anything to exit')
#     cho=int(input('Choose an Option: '))
#     if cho==1:
#         a=open('/home/navgurukul20/Desktop/VIKASH_K/Files_JSON/ProTra_1.json','r')
#         b=json.load(a)
#         pnum=int(input('Phone No.: '))
#         pnum=str(pnum)
#         if len(pnum)==10:
#             s=-1
#             for i in b:
#                 if pnum in i:
#                     s+=1
#             if s==-1:
#                 email=input('Gmail Address: ')
#                 if '@gmail.com' in email or '@navgurukul.org' in email:
#                     pasw=input('Passward: ')
#                     if len(pasw)>=8:
#                         name=input('Full name: ')
#                         print('Successfully Signed Up.')
#                         dic={'email':email, 'name':name, 'passward':pasw}
#                         b.append({pnum:dic})
#                         a1=open('/home/navgurukul20/Desktop/VIKASH_K/Files_JSON/ProTra_1.json','w')
#                         json.dump(b, a1, indent=4)
#                         a.close()
#                     else: print('Invalid Passward!! ')
#                 else: print('Invalid Phone No.!!')
#             else: print('Aready Loged in.')
#         else: print('Invalid Email Address!!')

#     elif cho==2:
#         a=open('/home/navgurukul20/Desktop/VIKASH_K/Files_JSON/ProTra_1.json','r')
#         b=json.load(a)
#         pnum=input('Phone No.: ')
#         s=-1
#         cou=0
#         for i in b:
#             if pnum in i:
#                 s=cou
#             else:
#                 cou+=1
#         if s!=-1:
#             name=input('Full name: ')
#             email=input('Gmail Address: ')
#             if '@gmail.com' in email or '@navgurukul.org' in email:
#                 if email not in b:
#                     pasw=input('Passward: ')
#                     if len(pasw)>=8:
#                         print('Successfully Updated.')
#                         dic={'email':email, 'name':name, 'passward':pasw}
#                         b[s].update({pnum:dic})
#                         a1=open('/home/navgurukul20/Desktop/VIKASH_K/Files_JSON/ProTra_1.json','w')
#                         json.dump(b, a1, indent=4)
#                         a.close()
#                     else: print('Invalid Passward!! ')
#                 else: print('Invalid Phone No.!!')
#             else: print('Aready Loged in.')
#         else: print('Does not exist!!')
#     elif cho==3:
#         a=open('/home/navgurukul20/Desktop/VIKASH_K/Files_JSON/ProTra_1.json','r')
#         b=json.load(a)
#         pnum=input('Phone No.: ')
#         cou=0
#         for i in b:
#             if pnum in i:
#                 s=cou
#             cou+=1
#         b.pop(s)
#         a1=open('/home/navgurukul20/Desktop/VIKASH_K/Files_JSON/ProTra_1.json','w')

#         json.dump(b, a1, indent=4)
#         a1.close()
#     else:
#         break

            
        
    
        
# # sa=json.load(a)
# print(type(sa))

#############################################################
########### As on 11th Oct:

# s=0
# s2=1
# sto=0
# n=int(input('enter a no.: '))
# t=n2=int(input('enter another no.: '))
# a=0
# while True:
#     print(sto)
#     if sto%n==0:
#         n2-=1
#     if n2==-1:
#         print(f"\n***Index of number divisible by {n} from the series, {t} times = {a}\n")
#         break   
#     s=s2
#     s2=sto
#     sto=s+s2
#     a+=1


#############################################################
# print(3 and 0 and 1 and 0.5 and 1)
###########Reverse G
# s="     "
# s2="      "
# for i in range(1,8):
#     if i<=3:
#         print(s+"*"*1)
#         s+=" "
#     elif i==4:
#         s=""
#         print("*"*3+"     "+"*")
#     else:
#         print("*"*1+s+"*"*1+s2+"*"*1)
#         s+=" "
#         if i==6:
#             s2=" "
#         else:
#             s2="    "
        


#############
# a=[1,1,1,1,1,1,2,3,3,4,5,5,6,6,34567,34567,6,7,7,8,5]
# c=a.copy()
# for i in a:
#     if c.count(i)>1:
#         for k in a:
#             if i in c:
#                 c.remove(i)
# print(c)

##################
# n=10
# a=""
# b=""
# for v in range(n):
#     if v<5:
#         a=""
#         a+=str(11**v)
#         print(((" "*n)+a+(" "*n)))
#     else:
#         for k in range(len(a)-1):
#             b+=str((int(a[k]))+(int(a[k+1])))
#         a=(" "*n)+("1"+b+"1")
#         b=""
#         print(a)    
#     n-=1
            

##################
# print(chr(65))
# print(chr(90))
# for alpha in range(65, 91):
#     for n in range(65, alpha+1):
#         print(chr(alpha), end=" ")
#     print()

#################################
# def alpha(n, s=1):
#     if n==65+al:
#         return
#     else:
#         print()
#         def prnt(a):
#             if a==0:
#                 return 
#             else:
#                 print(chr(n), end=" ")
#                 return prnt(a-1)
#         prnt(s)
#         alpha(n+1, s+1)
# al=int(input('Enter any num between 1 to 26: '))
# alpha(65)
###

# def fun(a,b=1):
#     if (a==70):
#         return
#     else:
#         print()
#         def fn(d,c=0):
#             if d==c:
#                 return
#             else:
#                 print(chr(a),end=" ")
#                 return fn(d,c+1)
#         fn(b)
#         return fun(a+1,b+1)
# fun(65)  
        
##########################
# a={'a':2, 'b':6, 'c':1, 'd':3}
# a=1
# b=1
# while a<=50:
#     print(b)
#     b+=1
#     print(b)
#     b+=1
#     a+=1
    

######################################
# a=[1,2,3,4,5,6]
# c=len(a)
# b=0
# d=0
# while c>0:
#     a.append(a[c-1])
#     a.remove(a[c-1])
#     c-=1

# print(a)
    
    
    
###########REVERSE THE LIST as the above:

# a=[12,13,14,15,16,1,2,3,4,5]
# b=0
# while len(a)>b:
#     a.insert(b, a[-1])
#     a.pop()
#     b+=1
# print(a)



####mahendra
# a=int(input('Range: '))
# for i in range(1,a+1):
#     b=0
#     for j in range(1,i+1):
#         if i%j==0:
#             b+=1
#     if b==2:
#         print(i)


# for r in range(7):
#     for c in range(6):
#         if c in (0,3) and r in (0,1,2,3,4):
#             print('H',end=' ')
#         elif r==2 and c in (1,2):
#             print('H',end=' ')
#         else:
#             print(' ',end=" ")
#     print()






# a='ankit'
# print(f"New {a}")

# def dem():
#     if True:
#         print('vikash')
#     else:
#         def dem2():
#             for i in range(5):
#                 print(i, end="")
#             print()
#         dem2()
# dem()

# def avarage(a,b):
#     x=a+b/2
#     return x

# import pprint
# a=[12,1,2,3,4,5,6,3]
# b=a.copy()
# pprint(a==b)


# a=[12,1,24,1,12,4,4,3,3]
# b=[]
# for i in range(len(a)):
#     s=a[i]
#     for k in range(i, len(a)):
#         if s<a[k]:
#             s=a[k]
#     a[i]=s
    
#     if s not in b:
#         b.append(s)
# print(b)
 
 
######################finding the length:
# x=a.count('')
# print(x-1)

# a='khaja'
# n=-1
# x=1
# while x!=0:
#     n-=1
#     x=a.index(a[n])
# print(n*(-1))


# a='vikash'
# b=list(a)
# print(b)

# a={1:{12:2, 2:34},3:23}
# if type(a[1])==dict:
#     print('vki')

checkup=open('demo.js', 'w')
checkup.write('var a=5\nvar b=8\nconsole.log(a+b)')
checkup.close()