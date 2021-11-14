##############################################################################
###############ZOMATO:
# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver import ActionChains
# import time

# driver=webdriver.Chrome(executable_path="/home/navgurukul20/Desktop/CELENIUM/chromedriver")
# driver.get("https://www.google.com/")
# driver.maximize_window()
# time.sleep(2)
# google=driver.find_element_by_xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input")
# google.send_keys("zomato.com")
# google.send_keys(Keys.RETURN)
# zomato=driver.find_element_by_xpath('//*[@id="tads"]/div/div/div/div[1]/a')
# zomato.click()
# time.sleep(2)
# search_zomato=driver.find_element_by_xpath('/html/body/div[1]/div/div[2]/header/nav/ul[2]/li[1]/div/div/div[3]/input')
# search_zomato.click()
# search_zomato.send_keys("Pizza")
# time.sleep(5)
# ksearch=driver.find_elements_by_class_name('sc-gAmQfK sc-hAXbOi vWrCo')
# k=ActionChains(driver)
# k.click_and_hold(ksearch)
# time.sleep(5)
# try:
#     move=ActionChains(driver)
#     move.double_click(ksearch)
# except:
#     ksearch.double_click()
# time.sleep(2)
# ksearch.click()



# driver.get("https://www.youtube.com/")
# print(driver.title)
# driver.maximize_window()
# time.sleep(5)
# search_enable=driver.find_element_by_id("search-input")
# search_enable2=driver.find_element_by_name("search_query")
# print(search_enable.is_displayed())
# print(search_enable2.is_enabled())


# # driver.minimize_window()
# driver.get("https://www.youtube.com/watch?v=DJelsGw2bS8&list=RDDJelsGw2bS8&start_radio=1")
# time.sleep(3)
# driver.back()
# time.sleep(5)
# driver.forward()
# time.sleep(30)

# driver.quit()

###############################################################
#######################################################FACEBOOK:
# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
# import time

# driver2=webdriver.Chrome(executable_path="/home/navgurukul20/Desktop/CELENIUM/chromedriver")
# driver2.get("https://www.google.com/")
# driver2.maximize_window()
# time.sleep(5)

# search=driver2.find_element_by_xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input")
# search.send_keys("facebook.com")
# search.send_keys(Keys.RETURN)
# time.sleep(5)
# select=driver2.find_element_by_xpath('//*[@id="rso"]/div[1]/div/div/div/div/div/div/div[1]/a')
# select.click()
# time.sleep(10)
# filling=driver2.find_element_by_xpath('//*[@id="email"]')
# filling.send_keys("123456789")
# filling2=driver2.find_element_by_xpath('//*[@id="pass"]')
# filling2.send_key('123456789')
# time.sleep(10)
# k=driver2.find_element_by_xpath('/html/body/div[1]/div[2]/div[1]/div/div/div/div[2]/div/div[1]/form/div[2]/button')
# k.click()
# time.sleep(10)
# chrome_options=webdriver.ChromeOptions()
# prefs={"profile.default_content_setting_values.notifications":2}
# chrome_options.add_experimental_option("prefs", prefs)
# time.sleep(4)
# driver2.find_element_by_xpath('/html/body/div[1]/div/div[1]/div/div[2]/div[4]/div[1]/div[4]/a/div[2]').click()
# name=driver2.find_element_by_xpath('//*[@id="u_5_b_Ai"]')
# # name.click()
# name.send_keys('Baal')
# name.send_keys(Keys.RETURN)
# time.sleep(2)
# uname=driver2.find_element_by_xpath('//*[@id="reg_box"]/div[1]')
# uname.click()
# uname.send_keys('Baal Veer')
# time.sleep(2)
# gendersel=driver2.find_element_by_xpath('//*[@id="u_5_3_Ua"]')
# gendersel.click()
# ok=driver2.find_element_by_xpath('/html/body/div[3]/div[2]/div/div/div[2]/div/div/div[1]/form/div[1]/div[10]/button')
# ok.click()

# driver2.quit()

################################################
#######################################################################################
################################################

from selenium import webdriver
from selenium.webdriver.common import keys
from selenium.webdriver.common.keys import Keys
from pytube import YouTube
import time

# def get_video_url(video_name):
    
#     driver=webdriver.Chrome(executable_path="/home/navgurukul20/Desktop/CELENIUM/chromedriver")
#     driver.get("https://www.youtube.com/")
#     time.sleep(5)
#     search=driver.find_element_by_xpath('/html/body/ytd-app/div/div/ytd-masthead/div[3]/div[2]/ytd-searchbox/form/div[1]/div[1]/input')
#     search.send_keys(video_name)
#     search.send_keys(Keys.RETURN)
#     time.sleep(5)
#     video=driver.find_element_by_xpath('/html/body/ytd-app/div/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-video-renderer[1]/div[1]/div/div[1]/div/h3/a')
#     video.click()
#     time.sleep(5)
#     a=driver.current_url
#     time.sleep(15 )
#     driver.quit()
#     return a
# lis=input('Enter your search: ')
# for i in lis:    
# url=get_video_url(lis)
    # time.sleep(2)
#     print(url)
#     myvideo=YouTube(str(url))
#     print("\nSearching...")
#     n=myvideo.title
#     print("Title Name: ", n)
#     print("\n")
#     print("Wait until download is finished")
#     print("Downloading...")
#     myvideo.streams.get_highest_resolution().download('/home/navgurukul20/Videos/Movies')
#     print("Video is downloaded!! : )")

def output_url(search):
    print('Here you go with your result.\nLoading...')
    driver=webdriver.Chrome(executable_path="/home/navgurukul20/Desktop/CELENIUM/chromedriver")
    driver.get('https://www.duckduckgo.com')
    driver.maximize_window()
    s=driver.find_element_by_xpath('/html/body/div/div[2]/div/div[1]/div[2]/form/input[1]')
    time.sleep(5)
    s.send_keys(search)
    s.send_keys(Keys.RETURN)
    time.sleep(20)
    return driver.current_url
inp=input('What to search: ')
print(output_url(inp))
