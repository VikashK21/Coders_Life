# import json
# x={'a':34, 'b':45, 'c':48, 'd':49}
# p=json.dumps(x) # python to json
# print(type(p))
# print(type(json.loads(p))) # json to python
# d=open("./Files_JSON/ankit11.json","r")
# c=json.load(d)
# print(type(c))

# import json
# x={"name":"vikash","age":30,"city":"Bangalore"}
# # print(type(x))
# y=json.loads(x)
# print(y)

########################################################## Meraki Q1:
# import json
# a= {'Name': 'Ram', 
#     'Class': 'IV', 
#     'Age': 9
# }
# b=json.dumps(a)
# c=json.loads(b)
# print(c)

########################################################## Meraki Q2:
# import json
# a={"name": "David",
#      "class":"I",
#      "age": 6  
# }
# b=json.dumps(a)
# print(json.loads(b))

########################################################## Meraki Q3:
# import json
# a= {'Name': 'Ram', 
#     'Class': 'IV', 
#     'Age': 9
# }
# print(json.dumps(a))

########################################################## Meraki Q4:
# import json
# a= {
#     '4': 5, 
#     '6': 7, 
#     '1': 3, 
#     '2': 4}
# v=json.dumps(a,sort_keys=True)
# print(json.loads(v))

########################################################## Meraki Q5:
# import json
# a={'Name': 'Ram', 
#     'Class': 'IV', 
#     'Age': 9
# } 
# x=json.dumps(a)
# print(type(x))
# i=json.loads(x)
# print(type(i))
# k=open("./Files_JSON/MirakiQ4.json","r+")
# # p=json.dump(i,k)
# # print(type(p))
# b=json.load(k)
# print(type(b),"n")
# if type(b)==complex:
#     print('yes')
# else:
#     print('no')
    
########################################################## Meraki Q6:
# import json
# a={
#  "a":  1,
#  "a":  2,
#  "a":  3, 
#  "a": 4,   
#  "b": 1, 
#  "b": 2
#  }
# b=json.dumps(a)
# dictj=json.loads(b)
# print(b)
# print(dictj)

########################################################## Meraki Q7:
# import json
# fh=open('./Files_filehandling/Miraki_JsonQ7.txt','r+')
# # fh.write('Name Abhishek\nDesignation CEO of navgurukul\nGender male\nAge 29')
# dict1 = {}
# for line in fh:
#     c, a = line.strip("\n").split(" ", 1)
#     dict1[c] = a
# print(dict1)
# x=json.dumps(dict1)
# print(x)
# fh.close()

########################################################## Meraki Q8:
# import json
# b=[
#     ['Neelam','Progrmer','24','2400'],
#     ['Komal','Trainer','24','20000'],
#     ['Anuradha','HR','25','40000'],
#     ['Abhishek','manager','29','63000']
#     ]
# a=['Name','Designation','Age','Salary'] 
# dic1={}  
# for i in range(len(b)):
#     x={}
#     for k in range(len(a)):
#         x.update({a[k]:b[i][k]})
#     dic1.update({('emp'+str(i+1)):x})    

# k=open('./Files_JSON/MirakQ8.json','r')
# # v=json.dump(dic1,k)
# print(json.load(k))
# k.close()

########################################################## Meraki Q9: Shopping...
# import json


# a={
#     "shopping_list":
#         { 
#             "chaco":"15",
#             "Biscuits":"50",
#             "Diary_milk":"30",
#             "ice_cream":"20",
#         } 
# }
# # # 1
# while True:
#     vik=int(input('1. Open the shop.\n2. Buy the items.\n3. Ready to leave the shop.\nChoose the option: '))
#     if vik==1:
#         b=open('./Files_JSON/MirakiQ9.json','w')
#         c=json.dump(a,b)
#         b.close()
#     ## 2
#     elif vik==2:
#         z=open('./Files_JSON/MirakiQ9.json','r')
#         d=json.load(z)
#         print(d['shopping_list'])
#         e=input('Enter the item name: ')
#         f=int(input('Total items: '))
#         if e in d['shopping_list']: 
#             p=d['shopping_list'][e]
#             d['shopping_list'][e]=str(int(p)-f)
#             print(d,'|...The current Status...|')
#         else:
#             d['shopping_list'][e]=str(f)
#             print(d)
#         x=open('./Files_JSON/MirakiQ9.json','w')
#         g=json.dump(d,x)


#         x.close()
#     else:
#         break

########################################################## Extra qs: Login/Sinup:
import json
# from os import uname
print('\n                       ***Login/SignUp***\n\n\n')
# lo_si=open('/home/navgurukul20/Desktop/VIKASH_K/Files_JSON/Login&Sinup.json','w')
# a=json.dump({},lo_si)
# lo_si.close()
print('Welcome to this LOGIN/SINUP Platform.')
while True:
    print('\nDo you want to continue the process? y/n')
    cho=input('Enter the option: ')
    if cho=='n':
        break
    print('1. Login\n2. SignUp.')
    z=int(input('Choose an Option: '))
           
    if z==1:
        lo_si=open('./Files_JSON/Login&Sinup.json','r')
        b=json.load(lo_si)
        usname=input('User name: ')
        if usname in b:
            for i in range(3):
                c=input('\nEmail Address: ')
                if c in b[usname]:
                    d=input('Passward: ')
                    if b[usname][c]==d:
                        print('\nSuccessfully Logged In.')
                        break
                    else:
                        print('Wrong Passward!!')
                if i==2:
                    print('Go first for SignUp!.')
                    
                else:
                    print('Invalid Email ID!!')
            # l=open('./Files_JSON/Login&Sinup.json','w')
            # json.dump(b,l)
            lo_si.close()
        else:
            print('This user name does not exist!!.')
    if z==2:
        lo_si=open('/home/navgurukul20/Desktop/VIKASH_K/Files_JSON/Login&Sinup.json','r')
        b=json.load(lo_si)
        an=input('Enter your full name: ')
        while True:
            c=input('\nEmail Address: ')
            ema=""
            for letters in c:
                if letters != "@":
                    ema+=letters
                else:
                    break
            if ema.isalnum()==True and '@gmail.com' in c or '@navgurukul.org' in c or '@gubbachi.org' in c:
                if c not in b:
                    d=input('Passward: ')
                    import string
                    strfor=string.punctuation
                    fo=0
                    for s in strfor:
                        if s in d:
                            fo='y'
                    if (len(d)>=8) and ("1" in d or "2" in d or "3" in d or "4" in d or "5" in d or "6" in d or "7" in d or "8" in d or "9" in d or "0" in d) and fo=='y':
                        print('\nSuccessfully Signed Up.')
                        b.update({an:{c:d}})
                        a1=open('/home/navgurukul20/Desktop/VIKASH_K/Files_JSON/Login&Sinup.json','w')
                        json.dump(b,a1)
                        a1.close()
                        break
                    else:
                        print('Invalid Passward!!')
                else:
                    print('This Account is already Logged In.')
            else:
                    print('Invalid Email ID!!')


#############################################################################################








    













