import shutil

source_folder = 'C:/Users/devku/Desktop/youtube'
destination_folder = 'C:/Users/devku/Documents/GitHub/dev_codes'
file_word = "test.py"

shutil.move(source_folder + '/' + file_word, destination_folder + "/" + file_word)
