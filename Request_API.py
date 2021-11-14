# import requests
 
# a=requests.get("http://saral.navgurukul.org/api/courses/")
# b=a.json()
# print(a)
# print(b)
######################################################################################3
# import requests

# #the required first parameter of the 'get' method is the 'url':
# x = requests.get('https://w3schools.com/python/demopage.htm')

# #print the response text (the content of the requested file):
# print(x.text)

########################################################################################
# import requests

# x = requests.get('https://w3schools.com')
# print(x.status_code)

################################################################################33
# import requests

# url = 'https://w3schools.com/python/demopage.htm'

# x = requests.get(url)

# print(x.apparent_encoding)

################################################################################    Meraki Qs1: 
# $****This was my hardest task till 18th of Sept, and became favourite also :D

import requests, json

url=requests.get('http://saral.navgurukul.org/api/courses')
a = url.json()
print(a)
# cou=1
# list1=[]
# for i in a['availableCourses']:
#     print(cou,i['name'])
#     cou+=1
#     list1.append(i['id'])
# while True:    
#     n=int(input('\nChoose a Lesson: '))
#     lisn=list1[(n-1)]
#     url2=requests.get('http://saral.navgurukul.org/api/courses/'+lisn+'/exercises')
#     c=url2.json()
#     list2=[]
#     anlist2=[]
#     coun2=1
#     for topics in c['data']:
#         list2.append(topics['id'])
#         anlist2.append(topics['slug'])
#         print('\n ', coun2, topics['name'])    
#         coun2+=1
#         for anoite in topics['childExercises']:
#             list2.append(anoite['id'])
#             anlist2.append(anoite['slug'])
#             print('\n ', coun2, anoite['name'])
#             coun2+=1
#     # exit()
#     print()
#     n2=int(input('Choose a Topic: '))
#     lisn2=list2[n2-1]
#     slug=anlist2[n2-1]
#     url1=requests.get('http://saral.navgurukul.org/api/courses/'+lisn2+f'/exercise/getBySlug?slug={slug}')

#     b1=url1.json()
#     x2=json.loads(b1['content'])
#     print('\n   ',x2[0]['value'])


