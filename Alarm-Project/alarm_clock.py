import time
import datetime as dt
import pygame
import tkinter as tk
from PIL import Image, ImageTk
import os
import ctypes

# Window
root = tk.Tk()
root.title('Alarm Clock')
root.geometry('400x200')
root.resizable(False, False)

# Sound
set_sound = "./assets/get-out-memes.mp3" 

# Bg Image
image = Image.open("./assets/bg_alarm.jpg")
image = image.resize((400, 200), Image.Resampling.LANCZOS)
bg_image = ImageTk.PhotoImage(image)

# Font
def load_custom_font(path):
    FR_PRIVATE  = 0x10
    FR_NOT_ENUM = 0x20
    full_path = os.path.abspath(path)
    ctypes.windll.gdi32.AddFontResourceExW(full_path, FR_PRIVATE, 0)
    
# Font load
load_custom_font("./assets/alarm_clock.ttf") # you can change this by yourself, from adding new font whatever u want;)
FONT_NAME = "alarm clock"
    
input_time = None
alarm_trigger = False

def alarm_clock():
    global alarm_trigger
    current_time = dt.datetime.now()
    date_format = current_time.strftime("%H:%M:%S")
    date_label.config(text=date_format)
    
    if input_time == date_format and not alarm_trigger:
        pygame.mixer.init()
        pygame.mixer.music.load(set_sound)
        pygame.mixer.music.play()
        alarm_trigger = True
        
    root.after(1000, alarm_clock)
    

def get_input():
    global input_time, alarm_trigger
    input_time = entry.get()
    alarm_trigger = False
    res_label.config(text=f"Alarm will set up at : {input_time}")

# Label Background
bg_label = tk.Label(root, image=bg_image)
bg_label.place(x=0, y=0, relwidth=1, relheight=1)

# Label
date_label = tk.Label(root, text="", font=(FONT_NAME, 36))
date_label.pack(pady=5)

res_label = tk.Label(root, text="", font=("Verdana", 12))
res_label.pack(pady=5)

tag_label = tk.Label(root, text="Input Time : ", font=("Verdana", 8))
tag_label.pack(pady=5)

entry = tk.Entry(root, width=10, justify="center", font=("Verdana", 12))
entry.pack(pady=5)

# Button
input_button = tk.Button(root, text="set alarm", command=get_input)
input_button.pack(pady=5)

if __name__ == '__main__':
    alarm_clock()
    root.mainloop()
