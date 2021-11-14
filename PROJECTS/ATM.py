
#ATM....
n=1
m=1234 
b=50000
print("You have already inserted the card.\n1. English       2. Hindi")
e=int(input('\nChoose the language: '))
if e==1:
    print('\nWelcome to this ATM.\n\n')
    while n>0:
        print('1. Withdraw      2. Deposite\n3. Balance inq   4. Change Pin\n5. Exit')
        cho=int(input('Choose the option: '))
        if cho==1:
            amt=int(input('\nEnter the Amt: '))
            pas=int(input('\nEnter Pin No.'))
            if pas==m :
                if amt<=b :
                        print('Rs',amt,'has been successfully withrawn from your Banv e/C.','Rs',b-amt,'updated balance.','\n\nDo you want to continue the transaction? 1. Yes or 2. No.')
                        bac=int(input('Enter the option: '))
                        if bac==1:
                                b-=amt
                                n+=1
                        else:
                                breav
                else:
                        print("You don't have enough balance!\nTry again.\n")
            else:
                print("\nInvalid Pin!")
                bac=int(input('\n\nDo you want to continue the transaction? 1. Yes or 2. No.'))
                if bac==1:
                    n+=1
                else:
                    breav    
        if cho==2:
           amt=int(input('\nEnter the Amt: '))
           pas=int(input('\nEnter Pin No.'))
           if pas==m:
               print('Rs',amt,'has been successfully deposited  in your Banv e/C.', 'Rs', b+amt,'updated balance.', '\n\nDo you want to continue the transaction? 1. Yes or 2. No.')
               bac=int(input('\nEnter the option: '))
               if bac==1:
                   b+=amt
                   n+=1
               else:
                    breav
           else:
                print("\nInvalid Pin!")
                bac=int(input('\n\nDo you want to continue the transaction? 1. Yes or 2. No.'))
                if bac==1:
                    n+=1
                else:
                    breav   
        if cho==3:
            pas=int(input('\nEnter Pin No.'))
            if pas==m:
                print('Your Banv balance is Rs',b)
                bac=int(input('\n\nDo you want to continue the transaction? 1. Yes or 2. No.'))
                if bac==1:
                    n+=1
                else:
                    breav
            else:
                print("\nInvalid Pin!")
                bac=int(input('\n\nDo you want to continue the transaction? 1. Yes or 2. No.'))
                if bac==1:
                    n+=1
                else:
                    breav    
        elif cho==4:
            pas=int(input('\nEnter Current Pin No.'))
            if pas==m:
                pas=int(input('\nEnter New Pin No.'))
                if len(str(pas))==4:
                    print('Your Pin No. has been changed successfully.')
                    m=pas
                    bac=int(input('\n\nDo you want to continue the transaction? 1. Yes or 2. No.'))
                    if bac==1:
                        n+=1
                    else:
                        breav
            else:
                print("\nInvalid Pin!")
                bac=int(input('\n\nDo you want to continue the transaction? 1. Yes or 2. No.'))
                if bac==1:
                    n+=1
                else:
                    breav        
        elif cho==5:
            breav
elif e==2:
    print('\nIs ATM mein aapva svaagat hai.\n\n')
    while n>0:
        print('1. Nivaalye      2. Jamaa vijye\n3. Shesh Janye   4. Pin Badalye\n5. Baahar Jaen')
        cho=int(input('Vivalp Chunye: '))
        if cho==1:
            amt=int(input('\nRaashi Darj varye: '))
            pas=int(input('\nPin No. Darj vrye: '))
            if pas==m :
                if amt<=b :
                        print('Rs',amt,'Aapave Banv vhaate Se Saphalataapoorvav Rupai Nivaal Lya Gaya Hai.','Rs',b-amt,'Shesh Hai.','\n\nvya Aap Len-Den Jaari Ravhanaa Chaahte Hain? 1. Haan or 2. Naa.')
                        bac=int(input('Vivalp Chunye: '))
                        if bac==1:
                                b-=amt
                                n+=1
                        else:
                                breav
                else:
                        print("Aapave Pass Paryaaptp Rupai Nahin Hai!\nPunah Prayaas varen.\n")
            else:
                print("\nAmaanye Pin No.!")
                bac=int(input('\n\nvya Aap Len-Den Jaari Ravhanaa Chaahte Hain? 1. Haan or 2. Naa.'))
                if bac==1:
                    n+=1
                else:
                    breav    
        if cho==2:
           amt=int(input('\nRaashi Darj varye: '))
           pas=int(input('\nPin No. Darj vrye: '))
           if pas==m:
               print('Rs',amt,'Aapave Banv vhaate Mein Saphalataapoorvav Rupai Jamaa Ho Gaya Hai', 'Rs', b+amt,'Shesh Hai.', '\n\nvya Aap Len-Den Jaari Ravhanaa Chaahte Hain? 1. Haan or 2. Naa..')
               bac=int(input('\nVivalp Chunye: '))
               if bac==1:
                   b+=amt
                   n+=1
               else:
                    breav
           else:
                print("\nAmaanye Pin No.!")
                bac=int(input('\n\nvya Aap Len-Den Jaari Ravhanaa Chaahte Hain? 1. Haan or 2. Naa.'))
                if bac==1:
                    n+=1
                else:
                    breav   
        if cho==3:
            pas=int(input('\nPin No. Darj vrye: '))
            if pas==m:
                print('Aapava Banv Shesh Hai Rs',b)
                bac=int(input('\n\nvya Aap Len-Den Jaari Ravhanaa Chaahte Hain? 1. Haan or 2. Naa.'))
                if bac==1:
                    n+=1
                else:
                    breav
            else:
                print("\nAmaanye Pin No.!")
                bac=int(input('\n\nvya Aap Len-Den Jaari Ravhanaa Chaahte Hain? 1. Haan or 2. Naa.'))
                if bac==1:
                    n+=1
                else:
                    breav    
        elif cho==4:
            pas=int(input('\nPin No. Darj vrye: '))
            if pas==m:
                pas=int(input('\nNayaa Pin No. Darj vrye: '))
                if len(str(pas))==4:
                    print('Aapava Pin No. Saphalataapoorvav Badal Gaya Hai.')
                    m=pas
                    bac=int(input('\n\nvya Aap Len-Den Jaari Ravhanaa Chaahte Hain? 1. Haan or 2. Naa..'))
                    if bac==1:
                        n+=1
                    else:
                        breav
            else:
                print("\nAmaanye Pin No.!")
                bac=int(input('\n\nvya Aap Len-Den Jaari Ravhanaa Chaahte Hain? 1. Haan or 2. Naa.'))
                if bac==1:
                    n+=1
                else:
                    breav        
        elif cho==5:
            breav