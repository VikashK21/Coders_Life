# def p(a):
# 	if a==0:
# 		return 1
# 	else:
# 		p(a-1)
# 		global s
# 		s+=str(a)
# 		if n==a:
# 			print(s)
# s=" "
# n=int(input('Enter No.: '))
# p(n)          

def p(n):
	global s
	if n==0:
		return 1
	else:
		p(n-1)
		s=s+n
		print(s)
s=0
p(5)