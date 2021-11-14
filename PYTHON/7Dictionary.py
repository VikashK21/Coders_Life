# dic1={1:10, 2:20}
# dic2={3:30,2:40}
# dic3={5:50,6:60}
# for i in dic2, dic3:
#     for v in i.items():
#         if v[0] in dic1:
#             dic1[v[0]]=dic1[v[0]]+dic2[v[0]]
#         else:
#             dic1.update({v})
# print(dic1)

# a={}
# a.update({(1,2)})
# print(a)

# ############################################################################

# di={3:30,2:40,1:10,2:20,5:50,6:60}
# n=input('Enter the element: ')
# s=0
# for v in di:
#     print(v)
#     if n==v:
#         s+=1
#         print(v)
# if s>0:
#     print("exist in the dictionary.")
# else:
#     print("not exist in the dictionary.")

# ############################################################################

# list1=['one','two','three','four','five','hf']
# list2=[1,2,3,4,5,56]
# d={}
# for k in range(len(list1)):
#     p=list1[k]
#     lp=list2[k]
#     d.update({p:lp})
# print(d)

# ###########################################################################

# dic={
#     'ball':'red',
#     'bat':4,
#     'wicket':8,
#     'ball':'green',
#     'bat':3,
#     'bat':56
#     }
# print(dic)

# ###########################################################################

# l=[
#      {"first":"1"}, 
#      {"second": "2"}, 
#      {"third": "1"}, 
#      {"four": "5"}, 
#      {"five":"5"}, 
#      {"six":"9"},
#      {"seven":"7"}
# ]
# u=[]
# for k in l:
#     for v in k.values():
#         u.append(v)
# print(u)

# ###########################################################################

# dic={}
# n=0
# while n<2:
#     a=input('Eroll name: ')
#     b=int(input('Enter age: '))
#     dic[a]=b
#     n+=1
# print(dic)

###########################################################################

# a="MISSISSIPPI"
# d={}
# for v in a:
#    s=0
#    for k in a:
#       if k==v:
#          s+=1
      
#    d.update({v:s})
# print(d)

# ###########################################################################

# dic =  {
#    'Alex': ['subj1', 'subj2', 'subj3'], 
#    'David': ['subj1', 'subj2']}
# s=0
# for v in dic:
#    s+=len(dic[v])
# print(s)

########################################################################## #13

# my_dict = {
#     'a':50, 
#     'b':58,
#     'c': 56,
#     'd':40,
#     'e':100, 
#     'f':20
#     }
# a=[]
# b=0
# for k in sorted(my_dict.values()):
#     a.append(k)
# b=[]
# for i in range(-1,-4,-1):
#     for v in my_dict:
#         if my_dict[v]==a[i]:
#             b.append(v)
# print(b)

##########################################################################  #14

# a={'bijender':45,'deepak':60,'param':20,'anjili':30,'roshini':50}
# n=0
# b=[]
# l={}
# while n<len(a)+1:
#     for k,v in a.items():
#         if n==0:
#             b.append(v)
#         else:
#             b.sort()
#             if b[n-1]==v:
#                 l.update({k:b[n-1]})
#     n+=1
# print(l)

##########################################################################  #15 finding the ans:

# a = {(1,2):1,(2,3):2}
# print(a[1,2])

# a = {'a':1,'b':2,'c':3}
# print (a['a','b'])

# fruit = {}

# def addone(index):
#     if index in fruit:
#         fruit[index] += 1
#     else:
#         fruit[index] = 1
        
# addone('Apple')
# addone('Banana')
# addone('apple')
# addone('Apple')

# print (len(fruit))
# print(fruit)


# Student = {}
# Age = {}
# Details = {}
# Student['name'] = "bikki"
# Age['student_age'] = 14
# Details['Student'] = Student
# Details['Age'] = Age
# print (len(Details["Student"])) 

# my_dict = {}
# my_dict[(1,2,4)] = 8
# my_dict[(4,2,1)] = 10
# my_dict[(1,2)] = 12

# sum = 0
# for k in my_dict:
#     sum += my_dict[k]

# print (sum)
# print(my_dict)


# box = {}
# jars = {}
# crates = {}
# box['biscuit'] = 1
# box['cake'] = 3
# jars['jam'] = 4
# crates['box'] = box
# crates['jars'] = jars
# print(len(crates['box']))

# rec = {
# "Name" : "Python", 
# "Age":"20",
# "Addr" : "NJ", 
# "Country" :"USA"
# }
# id1 = id(rec)
# del rec
# rec = {
#     "Name" : "Python", 
#     "Age":"20", 
#     "Addr" : "NJ", 
#     "Country" : "USA"
#     }
# id2 = id(rec)
# print(id1 == id2)

# #########################################################################  #16 Debugging the codes:

# details={
#     "name":"Shanti",
#     "age":12,
#     "email":"shanti@navgurukul.org",
#     }

# print(details["name"])
# print(details["email"])
# print(details['age'])

# dict1={1:2,2:3,3:4,4:5}
# sum=0
# for i in dict1.values():    
#     sum=sum+i
# print(sum)

# c=dict()
# for i in range(1,16):
#     c.update({i:i*i})
# print(c) 

# d=dict()
# for i in range(1,16):
#     d[i]=i**2
# print(d)

# s={'umesh':21,'bijender':54,'amar':67,'peter':89,'sonu':56}
# a={'python':20,"gaurav":300,'dev':34,"karan":43}
# c={}
# for i in s,a:
#     c.update(i)
# # s.update(a)
# print(c)


#########################################################################  #universal code for the students detail.

# # n=int(input('No. of students details: '))
# # a={}
# # p=1
# # while p<=n:
# #     s=input('Student '+str(p)+': ')

# #     g=int(input('   Age: '))
# #     x=input('   Gender: ')
# #     c=input('   Standard: ')
# #     a.update({'Student'+str(p):[{'Name':s},{'Age':g},{'Gender':x},{'Standard':c}]})
# #     p+=1
# # print(a)

# n=int(input('No. of students details: '))
# a={}
# p=1
# while p<=n:
#    b={}
#    s=input('Student '+str(p)+': ')
#    b.update({'Name':s})
#    g=int(input('   Age: '))
#    b.update({'Age':g})
#    x=input('   Gender: ')
#    b.update({'Gender':x})
#    c=input('   Standard: ')
#    b.update({'Standard':c})
#    a.update({'Student'+str(p):b}) 
#    p+=1
# print(a)

#########################################################################  #Replacing the key to value and value= no of keys fo which has the value as same:

# r={'vik':3,"rhyaz":3,"shar":3,"k":1,"k":2} 
# a={}
# for k in r.items ():
#     b=[]
#     for v in r.items():
#         if k[1]==v[1]:
#             b.append (v[0])
#     a.update({k[1]:b})
# print(a)

#*********######################################################################## #Sort the dictionary created in previous example according to marks.

# a={"a":45,"b":56,"c":65,"d":76,"e":90,"f":95,"k":34,"v":23,"l":1}
# b={}
# for i in a:
#     s=a[i]
#     for v in a:
#         if s<a[v]:
#             s=a[v]   
#             b.update({v:a[v]})    
# print(b)

########################################################################  #Use dictionary to store antonyms of words. E.g.- 'Right':'Left', 'Up':'Down', etc. Display all words and then ask user to enter a word and display antonym of it.
# a={"up":"down","right":"left","black":"white","front":"behind","on":"off"}
# print(a)
# b=input('Enter a word: ')
# for k in a:
#     if k==b:
#         print(a[k])
#     elif a[k]==b:
#         print(k)

########################################################################  #Take a list containg only strings. Now, take a string input from user and rearrange the elements of the list according to the number of occurence of the string taken from user in the elements of the list.

# eg={"LIST" : ["no bun","bug bun bug bun bug bug","bunny bug","buggy bug bug buggy"]}
# for k in eg:
#     x=eg[k]
#     s=x[0]
#     for v in range(len(x)):
#         if len(x[v])>len(s):
#             s=x[v]
   
########################################################################  #CARD GAME....
# c={"♠":{'𝐀♠', '𝟏♠', '𝟐♠', '𝟑♠', '𝟒♠', '𝟓♠', '𝟔♠', '𝟕♠', '𝟖♠', '𝟗♠', '𝟏𝟎♠', '𝐊♠', '𝐐♠', '𝐉♠'}, "♣":{'𝐀♣', '𝟏♣', '𝟐♣', '𝟑♣', '𝟒♣', '𝟓♣', '𝟔♣', '𝟕♣',  '𝟖♣', '𝟗♣', '𝟏𝟎♣', '𝐊♣', '𝐐♣', '𝐉♣'}, "♦":{'𝐀♦', '𝟏♦', '𝟐♦', '𝟑♦', '𝟒♦', '𝟓♦', '𝟔♦', '𝟕♦', '𝟖♦', '𝟗♦', '𝟏𝟎♦', '𝐊♦', '𝐐♦', '𝐉♦'},"♥":{'𝐀♥', '𝟏♥', '𝟐♥', '𝟑♥', '𝟒♥', '𝟓♥', '𝟔♥', '𝟕♥', '𝟖♥', '𝟗♥', '𝟏𝟎♥', '𝐊♥', '𝐐♥', '𝐉♥'}}
# s={'𝐀':156, '𝟏':1,'𝟐':2,'𝟑':3,'𝟒':4, '𝟓':5, '𝟔':6, '𝟕':7, '𝟖':8, '𝟗':9, '𝟏𝟎':10, '𝐊':196, '𝐐':144, '𝐉':121}
# l=[0]
# for v in range(4):
#     p="Player "+str(v+1)+": "
#     t=0
#     for k in c:
#         a=list(c[k])
#         p+=a[v]+"   "
#         t+=s[(a[v])[:-1]]
#     if l[0]<t:
#         l.clear()
#         l.extend([t,v+1])
#     print(p)
# print("\nPlayer "+str(l[-1])+": is the winner of this game.")

# ########################################### this good game for spent money.
# c={"♠":{'𝐀♠', '𝟏♠', '𝟐♠', '𝟑♠', '𝟒♠', '𝟓♠', '𝟔♠', '𝟕♠', '𝟖♠', '𝟗♠', '𝟏𝟎♠', '𝐊♠', '𝐐♠', '𝐉♠','𝐀♣', '𝟏♣', '𝟐♣', '𝟑♣', '𝟒♣', '𝟓♣', '𝟔♣', '𝟕♣',  '𝟖♣', '𝟗♣', '𝟏𝟎♣', '𝐊♣', '𝐐♣', '𝐉♣','𝐀♦', '𝟏♦', '𝟐♦', '𝟑♦', '𝟒♦', '𝟓♦', '𝟔♦', '𝟕♦', '𝟖♦', '𝟗♦', '𝟏𝟎♦', '𝐊♦', '𝐐♦', '𝐉♦','𝐀♥', '𝟏♥', '𝟐♥', '𝟑♥', '𝟒♥', '𝟓♥', '𝟔♥', '𝟕♥', '𝟖♥', '𝟗♥', '𝟏𝟎♥', '𝐊♥', '𝐐♥', '𝐉♥'}}
# s={'𝐀':256, '𝟏':1,'𝟐':2,'𝟑':3,'𝟒':4, '𝟓':5, '𝟔':6, '𝟕':7, '𝟖':8, '𝟗':9, '𝟏𝟎':10, '𝐊':196, '𝐐':144, '𝐉':121}
# l=[0]
# for v in range(4):
#     p="Player "+str(v+1)+": "
#     t=0
#     a=list(c["♠"])
#     for k in range(4):
#         p+=a[v+k*k]+"   "
#         t+=s[(a[v+k*k])[:-1]]
#     if l[0]<t:
#         l.clear()
#         l.extend([t,v+1])
#     print(p)
# print("\nPlayer "+str(l[-1])+": is the winner of this game."+str(l))

########################################################################







e=[12,13,21100,15,10,89]
for i in range(0,len(e)):
    for v in range(0,len(e)):
        if e[i]>e[v]:
            x=e.pop(i)
            e.insert(v,x)
            y=e.pop(v)
            e.insert(v,y)
print(e)
  











