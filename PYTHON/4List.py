# # "THE THIRD MAX ROUGH:"
e=[12,13,21100,15,10,89]
for i in range(0,len(e)):
    for v in range(0,len(e)):
        if e[i]>e[v]:
            x=e.pop(i)
            e.insert(v,x)
            y=e.pop(v)
            e.insert(v,y)
print(e)



### LIST BUBBLESORT.
# e=[2,34,65,9,29]
# for i in range(len(e)): 
#     for j in range(len(e)):
#         if e[i]>e[j]:
#             t=e[i]
#             e[i]=e[j]
#             e[j]=t
# print(e[2])


########################################################################################################
# "CONVERSION OF BINARY TO DECIMAL:"
# b=int(input('Enter any No. to convert in Binary: '))
# n=b
# s=''
# while (n+1)!=1:
#     s+=str(n%2)
#     n=n//2
# print(s[::-1])    
    
########################################################################################################
# e=[34,9,65,41,54,77,33,78,65,78,1,7]
# b=[]
# s=0
# n=0
# x=len(e)
# while n<x:
#     for v in e:
#         if v>s:
#             s=v
#     b.append(s)
#     for i in range(e.count(s)):
#         e.remove(s)
#     s=0
#     n+=1
# print(b,b[2])
# b=[]
# s=0
# n=0
# x=len(e)
# while n<x:
#     for v in e:
#         if v>s:
#             s=v
#     b.append(s)
#     for i in range(e.count(s)):
#         e.remove(s)
#     s=0
#     n+=1
# print(b,b[2])

########################################################################################################






























