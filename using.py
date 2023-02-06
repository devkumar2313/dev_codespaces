import pyautogui
import time

path = " C:\\\\Users\\\\devku\\\\Desktop\\\\youtube\\\\All_answer_codes"
pyautogui.hotkey('winleft')
pyautogui.write('Git')
time.sleep(2)
pyautogui.press("enter")
time.sleep(5)
pyautogui.write("cd" + path)
pyautogui.press("enter")
time.sleep(2)
command = "echo \"# Youtube_codes Video no. {}\" >> README.md".format(video_number)
pyautogui.write(command)
pyautogui.press("enter")
time.sleep(2)
pyautogui.write('git init')