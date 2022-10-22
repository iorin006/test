#N予備校 自動再生
import pyautogui as gui
import datetime
import time
import os

count = 1
jikanlist = []
countlist = 0

print('動画の個数を数字で入れてください。')
douga = int(input())
os.system("clear")  # コンソールをクリア

for i in range(douga):
    print(f'{count}つ目動画の長さを分単位で入力してください')
    print('例）動画が>7:06<の場合>8<と入力')
    jikan = int(input())
    jikanlist.append(jikan)
    count = count + 1
    os.system("clear")

now = datetime.datetime.now()
dt2 = now + datetime.timedelta(minutes=sum(jikanlist))
print(f"{dt2}に終了する予定です")
print(f'終了まで約{sum(jikanlist)}分')  # jikanlistの中身を足し算
print('カーソルを位置に置いてください')
input('開始します')
print('開始しました')
time.sleep(10)

for j in range(douga):
    time.sleep(5)
    hun = jikanlist[countlist] * 60  # jikanで入力した数値に60を掛けてhunに代入
    time.sleep(hun)
    gui.moveRel(0, 57)
    time.sleep(1)
    gui.click()
    countlist = countlist + 1
print('処理が終わりました')
