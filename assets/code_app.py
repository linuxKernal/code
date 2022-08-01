import time
import pyautogui
from tkinter import *
from tkinter import messagebox
import threading
root = Tk()
root.resizable(0,0)
root.title('code pro max')
pyautogui.FAILSAFE = True
title = Label(root,text="super fast",bg="green",fg="white",font=('Times',30),padx=600)
title.grid(row=0,column=0,padx=10,pady=10,columnspan=10)
text = Text(root,width=140)
text.grid(row=3,column=0,pady=20,padx=5,columnspan=8)
info = "after clicking the start button within 5 seconds go and\nplace the cursor in skillrack code area\nthen don't touch mouse and keyboard until the the code completed"
def start_typeing():
    messagebox.showinfo('info',info)
    program = text.get(1.0,'end-1c')  
    time.sleep(5)
    txt = str(program).replace('{','{ ').replace('    ','')
    pyautogui.write(txt,interval=0.1)

butn = Button(root,text="Start",fg="white",bg="orange",font=('Times',12),width=10,command=lambda:threading.Thread(target=start_typeing).start())
butn.grid(row=1,column=6,columnspan=5)

root.mainloop()
