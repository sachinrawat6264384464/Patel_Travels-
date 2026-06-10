import os
import shutil

src = r"C:\Users\Dell 5490T\.gemini\antigravity-ide\brain\9a9b9fbd-6ab9-4244-94d7-883c486d6848\media__1781090986083.jpg"
dest_dir = r"D:\mykhataproject\Hoa_US\HOAUSAMIN\car\public\images"
dest = os.path.join(dest_dir, "owner.jpg")

print("Python script starting...")
print("Source path exists:", os.path.exists(src))

try:
    os.makedirs(dest_dir, exist_ok=True)
    shutil.copy2(src, dest)
    print("SUCCESS: Owner image copied to public/images/owner.jpg")
except Exception as e:
    print("ERROR:", e)
