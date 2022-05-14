x=int(input("Enter the number here"))
y=int(input("Enter the number here"))
z=int(input("Enter the number here"))
n=2
final_list=[]
list=[i for i in range(0,x+1)]
list1=[j for j in range(0,y+1)]
list2=[k for k in range(0,z+1)]
for a in list2:
    for  b in list1:
        for c in list:
            if a+b+c!=n:
                    d=[a,b,c]
                    final_list.append(d)
print(final_list)


##### Combinations:
i = int(input('Enter length: '))
j = int(input('Enter width: '))
k = int(input('Enter height: '))
n = int(input('Enter expected sum: '))
o = [i for i in range(5)]
# print(o)

