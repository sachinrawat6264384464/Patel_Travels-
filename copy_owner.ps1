$src = "C:\Users\Dell 5490T\.gemini\antigravity-ide\brain\9a9b9fbd-6ab9-4244-94d7-883c486d6848\.tempmediaStorage\media_9a9b9fbd-6ab9-4244-94d7-883c486d6848_1781091335288.jpg"
$dest = "D:\car_web\Patel_Travels-\public\images\owner.jpg"
$destDir = "D:\car_web\Patel_Travels-\public\images"

if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

if (Test-Path $src) {
    Copy-Item $src $dest -Force
    Write-Host "SUCCESS: Owner image copied to $dest"
} else {
    Write-Host "Source not found: $src"
    # Try alternate source
    $src2 = "C:\Users\Dell 5490T\.gemini\antigravity-ide\brain\9a9b9fbd-6ab9-4244-94d7-883c486d6848\media__1781090986083.jpg"
    if (Test-Path $src2) {
        Copy-Item $src2 $dest -Force
        Write-Host "SUCCESS: Copied from alt path"
    }
}
