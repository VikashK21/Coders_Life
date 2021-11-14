#####################################TASK1:
import requests, json

# from bs4 import BeautifulSoup
# from pprint import pprint

# movie=requests.get('https://www.imdb.com/india/top-rated-indian-movies/?ref_=nv_mv_250_in')
# soup=BeautifulSoup(movie.text, 'html.parser')
# def scrape_top_list():
    
#     ss=soup.find("tbody",class_="lister-list")
#     trs=ss.find_all('tr')
#     global TheMoviesList
#     TheMoviesList=[]
#     for tr in trs:
#         lism=0
#         p_n_y=tr.find('td', class_="titleColumn").get_text()
#         lism=p_n_y.strip().split("\n")
#         lism.extend([tr.find('td', class_="ratingColumn imdbRating").strong.get_text(),'https://www.imdb.com/'+(tr.find('td', class_="titleColumn").a['href'])])
#         tp=int(lism[0][:-1])
#         ty=int(lism[2][1:-1])
#         trating=float(lism[3])
#         dic={'Position':tp, 'Name':lism[1].strip( ), 'Year':ty, 'Rating':trating, 'Url':lism[-1]}
#         TheMoviesList.append(dic)
#     jfile=open('/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task1.json', 'w')
#     json.dump(TheMoviesList, jfile, indent=4)
#     jfile.close()
#     return TheMoviesList
# pprint(scrape_top_list())







#####################################TASK2:

# import json
# from pprint import pprint
# def group_by_year():
#     jfile=open('/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task1.json', 'r')
#     imdbmovies=json.load(jfile)
#     moviesdic={}
#     for movies in imdbmovies:
#         listdic=[]
#         for same in imdbmovies:
#             if movies['Year']==same['Year']:
#                 listdic.append(same)
#         moviesdic.update({int(movies['Year']):listdic})
#     jfile1=open('/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task2.json', 'w')
#     json.dump(moviesdic, jfile1, indent=4)
#     jfile.close()
#     return moviesdic

# pprint(group_by_year())
        















# #####################################TASK3:
# import json
# def group_by_decade():
#     jfile1=open('/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task2.json', 'r')
#     moviesyear=json.load(jfile1)
#     moviesperiod={}
#     for yrs in moviesyear:
#         moviedetails=[]
#         # print(moviedetails)
#         yrs1=(int(yrs))//10*10
#         # print(yrs1)
#         for period in range(yrs1, yrs1+10):
#             if str(period) in moviesyear:
#                 moviedetails.extend(moviesyear[(str(period))])
#                 # print(moviesyear[(str(period))])
#         moviesperiod.update({(str(yrs1)+" - "+str(yrs1+9)):moviedetails})
#     jfile2=open('/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task3.json', 'w')
#     json.dump(moviesperiod, jfile2, indent=4)      
#     jfile2.close()
#     return moviesperiod
# print(group_by_decade())









# import ProTra 
# print(ProTra.avarage(2,3))













# #####################################TASK4:

# import json, requests
# from bs4 import BeautifulSoup
# op=open('/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task1.json', 'r')
# movie_=json.load(op)
# movie_list=[]
# for us_url in movie_:
#     movie_request=requests.get(us_url['Url']+'?ref_=hm_rvi_tt_t_1')
#     soup=BeautifulSoup(movie_request.text, 'html.parser')   
#     dirctr=soup.find('div', class_="ipc-metadata-list-item__content-container").text
#     dirctr2=soup.find('a', class_="ipc-metadata-list-item__list-content-item ipc-metadata-list-item__list-content-item--link").text
#     director = [dirctr2, dirctr[len(dirctr2): ]]
#     if len(director[-1])==0:
#         director.pop()
#     # print(director)    
#     bio=soup.find('span', class_="GenresAndPlot__TextContainerBreakpointXL-cum89p-2 gCtawA").text
#     # print(bio)    
#     try:
#         navrasa=soup.findAll('div', class_="ipc-chip-list GenresAndPlot__GenresChipList-cum89p-4 gtBDBL")      
#     finally:
#         generic = []
#         for i in navrasa:
#             p=(i.findAll("a"))
#             for i in p:
#                 generic.append(i.text)
#         # print(generic)
#     ru=soup.find('div',class_="TitleBlock__TitleMetaDataContainer-sc-1nlhx7j-2 hWHMKr")
#     for i in ru:
#         p1=(i.findAll("li"))
#         for k in p1:
#             pass            
#     duration=k.text.split()
#     try:
#         rtime=(int(duration[0].strip('h'))*60 + int(duration[-1].strip('min')))
#         # print(rtime)
#     except:
#         pass
#         # print(rtime)
#         # rtime=(int(duration.strip('h'))*60)    
#     lan=soup.find('ul', class_="ipc-metadata-list ipc-metadata-list--dividers-all ipc-metadata-list--base").text
#     try:
#         pr=(lan.split())
#         # print(pr[6])
#         # print()
#     except:
#         pass
#         # print(lan)    
#     lan=soup.find('ul', class_="ipc-metadata-list ipc-metadata-list--dividers-all ipc-metadata-list--base")
#     detail=[]
#     for ik in lan:
#         p2=(ik.findAll('li'))
#         for ki in p2:
#             detail.append(ki.text)
#     # print(detail)
#     try:
#         country=detail[1]
#     except:
#         country='India'
#     finally:
#         if len(detail[2:-1])>3:
#             language=detail[2:5]
#         else:
#             language=detail[2:-1]    
#     image=soup.find('img', class_="ipc-image")    
#     Url=str(image).split()
#     for v in Url:
#         if v[0:4]=="src=":
#             Url1=v.strip('src="')
#             break
#     movie_list.append({'Name':us_url['Name'], 'Director':director, 'Country':country, 'Language':language, 'Poster_image_Url':Url1, 'Bio':bio, 'Runtime':rtime, 'Genre':generic, })     
#     # print(movie_list)   
# task4=open('/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task4.json', 'w')
# json.dump(movie_list, task4, indent=4)  











# #############################################################################################
# ########################TASK6 p1:

# file2point0=open('./Files_requests_API+WebS/Task4.json', 'r')

# loading=json.load(file2point0)

# def analyse_movies_language(movies_list):
#     hr=movies_list['Runtime']//60
#     min=movies_list['Runtime']%60
#     movies_list['Runtime']={'hours':hr, 'minutes':min}
# for details in loading:
#     analyse_movies_language(details)
    
# file2point1=open('./Files_requests_API+WebS/Task5_6.json', 'w')
# f=open('./Files_requests_API+WebS/copy_5_6.json', 'r')
# f2=json.load(f)
# json.dump(f2, file2point1, indent=4)    



# #############################################################################################
# ########################TASK6 p2:

# files=open('./Files_requests_API+WebS/Task5_6.json', 'r')
# v3=json.load(files)
# dic={}
# def analyse_movies_language(movies_list):
#     global s
#     for cout in movies_list:
    
#         if cout in dic:
#             s=dic[cout]
#             s+=1
#             dic.update({cout:s})
#         else:
#             if len(cout)<=10 and " " not in cout:
#                 dic.update({cout:s})

# for details in v3:
#     s=1
#     analyse_movies_language(details['Language'])
# print(dic)
    
    
    
    
    
# #########################################################################################
# #####################Task7:

# files=open('/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task5_6.json', 'r')
# v3=json.load(files)
# dic={}    
# def analyse_movies_directors(movies_list):
#     global s
#     for cout in movies_list:
    
#         if cout in dic:
#             s=dic[cout]
#             s+=1
#             dic.update({cout:s})
#         else:
#             dic.update({cout:s})

# for details in v3:
#     s=1
#     analyse_movies_directors(details['Director'])
# print(dic)

    
# #########################################################################################
# #####################Task8:

# # These question is just about the json files that is also known as cache files.
# # Which we always prefer to do in the json files. and that's what I have done.


# #########################################################################################
# #####################Task9:     

# import json, requests
# from bs4 import BeautifulSoup
# import random, time
# rsleep=random.randint(1, 3)
# op=open('/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task1.json', 'r')
# movie_=json.load(op)
# movie_list=[]
# for us_url in movie_:
#     time.sleep(rsleep)
#     movie_request=requests.get(us_url['Url']+'?ref_=hm_rvi_tt_t_1')
#     soup=BeautifulSoup(movie_request.text, 'html.parser')   
#     dirctr=soup.find('div', class_="ipc-metadata-list-item__content-container").text
#     dirctr2=soup.find('a', class_="ipc-metadata-list-item__list-content-item ipc-metadata-list-item__list-content-item--link").text
#     director = [dirctr2, dirctr[len(dirctr2): ]]
#     if len(director[-1])==0:
#         director.pop()
#     print(director)    
#     bio=soup.find('span', class_="GenresAndPlot__TextContainerBreakpointXL-cum89p-2 gCtawA").text
#     print(bio) 
#     try:
#         navrasa=soup.findAll('div', class_="ipc-chip-list GenresAndPlot__GenresChipList-cum89p-4 gtBDBL")      
#     finally:
#         generic = []
#         for i in navrasa:
#             p=(i.findAll("a"))
#             for i in p:
#                 generic.append(i.text)
#         # print(generic)
#     ru=soup.find('div',class_="TitleBlock__TitleMetaDataContainer-sc-1nlhx7j-2 hWHMKr")
#     for i in ru:
#         p1=(i.findAll("li"))
#         for k in p1:
#             pass            
#     duration=k.text.split()
#     try:
#         rtime=(int(duration[0].strip('h'))*60 + int(duration[-1].strip('min')))
#         # print(rtime)
#     except:
#         pass
#         # print(rtime)
#         # rtime=(int(duration.strip('h'))*60)    
#     lan=soup.find('ul', class_="ipc-metadata-list ipc-metadata-list--dividers-all ipc-metadata-list--base").text
#     try:
#         pr=(lan.split())
#         # print(pr[6])
#         # print()
#     except:
#         pass
#         # print(lan)    
#     lan=soup.find('ul', class_="ipc-metadata-list ipc-metadata-list--dividers-all ipc-metadata-list--base")
#     detail=[]
#     for ik in lan:
#         p2=(ik.findAll('li'))
#         for ki in p2:
#             detail.append(ki.text)
#     # print(detail)
#     try:
#         country=detail[1]
#     except:
#         country='India'
#     finally:
#         if len(detail[2:-1])>3:
#             language=detail[2:5]
#         else:
#             language=detail[2:-1]    
#     image=soup.find('img', class_="ipc-image")    
#     Url=str(image).split()
#     for v in Url:
#         if v[0:4]=="src=":
#             Url1=v.strip('src="')
#             break
#     movie_list.append({'Name':us_url['Name'], 'Director':director, 'Country':country, 'Language':language, 'Poster_image_Url':Url1, 'Bio':bio, 'Runtime':rtime, 'Genre':generic, })     
#     # print(movie_list)   
# task4=open('/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task4.json', 'w')
# json.dump(movie_list, task4, indent=4)  











# # ###################################################################################################
# # ################################   Playing with the data of the movies.....  #############################
# # #########################################################################################

# # dataopen=open('/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task5_6.json', 'r')
# # data=json.load(dataopen)
# # s=1
# # for eachdic in data:
# #     print(s, eachdic['Name'])
# #     s+=1
# # op=int(input('\nEnter the Movie option: '))
# # for i in data[op-1]:
# #     print(f'\n\n   {i}  ~   {data[op-1][i]}')
    
    

# ########################################################################################
# ###################################################################
# ##################Task10:

# files=open('/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task5_6.json', 'r')
# v3=json.load(files)
# dic={}    
# def analyse_movies_directors(movies_list,languagelist):
#     global s
#     for cout in movies_list:   
#         for language in languagelist:
#             if cout in dic:
#                 dic3=dic[cout]
#                 if language in dic[cout]:
#                     s=dic[cout][language]
#                     s+=1                     
#                     dic.update({cout:{language:s}})
#                 else:
#                     dic3[language]=s
#                     dic[cout]=dic3
#             else:
#                 dic.update({cout:{language:s}})
# for details in v3:
#     s=1
#     analyse_movies_directors(details['Director'],details['Language'])
# print(dic)


# ###################################################################
# ##################Task11:

# files=open('/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task5_6.json', 'r')
# v3=json.load(files)
# dic={}
# def analyse_movies_genre(movies_list):
#     global s
#     for cout in movies_list:
#         if cout in dic:
#             s=dic[cout]
#             s+=1
#             dic.update({cout:s})
#         else:
#             dic.update({cout:s})

# for details in v3:
#     s=1
#     analyse_movies_genre(details['Genre'])
# print(dic)

    

# ###################################################################
# ##################Task12:

# import requests, json
# from bs4 import BeautifulSoup
# import random, time

# rsleep=random.randint(1, 3)
# file_=open("/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task1.json", 'r')
# file_task1=json.load(file_)

# dic=[]
# for movedic in file_task1:
#     time.sleep(rsleep)
#     url=requests.get(movedic['Url']+"fullcredits?ref_=tt_cl_sm#cast")
#     soup=BeautifulSoup(url.text, "html.parser")
#     movie_=soup.find_all('table', class_="cast_list")
#     s=1
#     ss=soup.findAll("table",class_="cast_list")
#     for i in ss:
#         p=(i.findAll("a"))
#         s=0
#         for j in p:
#             lisitms=(str(j)).split("/")
#             if len(lisitms)==5:
#                 dic.append({'Name':(lisitms[-2]).strip('  ">\n<'), 'Id':lisitms[-3]})

#     print(dic)    
# anfile=open("/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task12.json", 'w')
# json.dump(dic, anfile, indent=4)
# anfile.close()
   


# ##############################################################
# #################Task13:

# import requests, json
# from bs4 import BeautifulSoup
# import random, time

# rsleep=random.randint(1, 3)
# file_=open("/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task1.json", 'r')
# file_2=open("/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task4.json", 'r')
# file_task1=json.load(file_)
# file_task4=json.load(file_2)

# s=0
# for movedic in file_task1:
#     dic=[]
#     time.sleep(rsleep)
#     url=requests.get(movedic['Url']+"fullcredits?ref_=tt_cl_sm#cast")
#     soup=BeautifulSoup(url.text, "html.parser")
#     ss=soup.findAll("table",class_="cast_list")
#     for i in ss:
#         p=(i.findAll("a"))
#         for j in p:
#             lisitms=(str(j)).split("/")
#             if len(lisitms)==5:
#                 dic.append({'Name':(lisitms[-2]).strip('  ">\n<'), 'Id':lisitms[-3]})
#     (file_task4[s]).update({"Cast":dic})
#     print(file_task4[s])  
#     s+=1
# anfile=open("/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task13.json", 'w')
# json.dump(file_task4, anfile, indent=4)
# anfile.close()



# ##############################################################
# #################Task14 p1:

# file_12p=open("/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task13.json", 'r')
# task_12p1=json.load(file_12p)
# ls=[]
# for z in task_12p1:
#     nls=[]
#     for y in z['Cast']:
#         nls.append(y['Id'])
#     ls.append(nls)

# #################Task14 p2: The above one is also connected.

# file_13=open("/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task13.json", 'r')
# task_14=json.load(file_13)

# for dic in task_14:
#     cast_list=[]
#     castlist=dic['Cast']
#     print()
#     for cast in range(len(dic['Cast'])-1):
#         s=0
#         dic2=castlist[cast]
#         dic3=castlist[cast+1]
#         for ids in ls:
#             if dic3['Id'] in ids and dic2['Id'] in ids:
#                 s+=1
#         frequent_co={'imdb_id':dic3['Id'], 'Name':dic3['Name'], 'num_movie':s}
#         cast_list.append({dic2['Id']:{'Name':dic2['Name'], 'Frequent_co_actors':[frequent_co]}})
#         print()
#     dic.update({"Cast":cast_list})  
#     print(dic)  
# file_14=open("/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task14.json", "w")
# json.dump(task_14, file_14, indent=4)
# file_14.close()



# ##############################################################
# #################Task15 p1:

# file_14=open("/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task14.json", "r")
# task_15=json.load(file_14)
# def analyse_actors(movies_list):
#     list_cast=[]
#     for cast in movies_list:
#         for i in cast:
#             if (cast[i]['Frequent_co_actors'][0]['num_movie'])>1:
#                 print(cast)
#                 list_cast.append(cast)
#                 # print(movies_list)
#     return list_cast
# for get_movie_list_details in task_15:
#     x=analyse_actors(get_movie_list_details['Cast'])
#     get_movie_list_details['Cast']=x
# file_15=open('/home/navgurukul20/Desktop/VIKASH_K/Files_requests_API+WebS/Task15.json', 'w')
# json.dump(task_15, file_15, indent=4)