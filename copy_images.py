import os
import shutil

src_glanza = r"C:\Users\Dell 5490T\.gemini\antigravity-ide\brain\9a9b9fbd-6ab9-4244-94d7-883c486d6848\toyota_glanza_1781719285336.png"
src_rumion = r"C:\Users\Dell 5490T\.gemini\antigravity-ide\brain\9a9b9fbd-6ab9-4244-94d7-883c486d6848\toyota_rumion_1781719301918.png"

dest_dir = r"D:\car_web\Patel_Travels-\public\images"

try:
    os.makedirs(dest_dir, exist_ok=True)
    if os.path.exists(src_glanza):
        shutil.copy2(src_glanza, os.path.join(dest_dir, "glanza.png"))
        print("SUCCESS: Glanza copied")
    else:
        print("ERROR: Glanza src not found")
        
    if os.path.exists(src_rumion):
        shutil.copy2(src_rumion, os.path.join(dest_dir, "rumion.png"))
        print("SUCCESS: Rumion copied")
    else:
        print("ERROR: Rumion src not found")
except Exception as e:
    print("ERROR:", e)
