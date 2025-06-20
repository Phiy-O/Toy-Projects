# first install - pip install tkinter (if you are not install that before)
# and then, install - pip install Translator
# for the last one is - pip install googletrans==4.0.0-rc1
# install all of that on your terminal(cmd, powershell, etc..)

from tkinter import *
from tkinter import ttk
import tkinter as tk
from googletrans import Translator, LANGUAGES

bg_color = "#578FCA"
height = 600
width = 700

def change(text="type", src="en", dest="id"):
    trans = Translator()
    result = trans.translate(text, src=src, dest=dest)
    return result.text

def data():
    s = combo_sor.get()
    d = combo_dest.get()
    masg = source_text.get(1.0, END)
    text_get = change(text=masg, src=s, dest=d)
    source_dest.delete(1.0, END)
    source_dest.insert(END, text_get)
    
root = Tk()
root.title("Simple Google Translator")
root.geometry(f"{width}x{height}")
root.config(bg=bg_color)

# Heading Text
head_text = Label(root, text="TRANSLATOR", font=("Verdana", 12, "bold"))
head_text.place(x=0, y=0, height=60, width=width)

frame = Frame(root).pack(side=BOTTOM)

# Heading 2
label_text = Label(root, text="Source Text :", font=("Verdana", 12, "italic bold"), fg="black", bg=bg_color)
label_text.place(x=20, y=80, height=30, width=120)
# Box
source_text = Text(frame, font=("Verdana", 12, "normal"), wrap=WORD)
source_text.place(x=10, y=120, height=200, width=width-20)

list_text = list(LANGUAGES.values())

# Left List
combo_sor = ttk.Combobox(frame, values=list_text)
combo_sor.place(x=10, y=340, height=40, width=120)
combo_sor.set("english")

# Translate button
button_translate = Button(frame, text="Translate", relief=RAISED, command=data)
button_translate.place(x=140, y=340, height=40, width=100)

# Right List
combo_dest = ttk.Combobox(frame, values=list_text)
combo_dest.place(x=250, y=340, height=40, width=120)
combo_dest.set("-")

# Dest Box
dest_text = Label(root, text="Dest Text :", font=("Verdana", 12, "italic bold"), fg="black", bg=bg_color)
dest_text.place(x=20, y=400, height=30, width=120)
# Box
source_dest = Text(frame, font=("Verdana", 12, "normal"), wrap=WORD)
source_dest.place(x=10, y=440, height=200, width=width-20)

root.mainloop()
