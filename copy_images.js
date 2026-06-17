const fs = require('fs');
const path = require('path');

const srcGlanza = "C:\\Users\\Dell 5490T\\.gemini\\antigravity-ide\\brain\\9a9b9fbd-6ab9-4244-94d7-883c486d6848\\toyota_glanza_1781719285336.png";
const srcRumion = "C:\\Users\\Dell 5490T\\.gemini\\antigravity-ide\\brain\\9a9b9fbd-6ab9-4244-94d7-883c486d6848\\toyota_rumion_1781719301918.png";

const destDir = "D:\\car_web\\Patel_Travels-\\public\\images";

try {
  if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  if (fs.existsSync(srcGlanza)) {
    fs.copyFileSync(srcGlanza, path.join(destDir, "glanza.png"));
    console.log("Glanza copied successfully!");
  } else {
    console.log("Glanza source not found");
  }

  if (fs.existsSync(srcRumion)) {
    fs.copyFileSync(srcRumion, path.join(destDir, "rumion.png"));
    console.log("Rumion copied successfully!");
  } else {
    console.log("Rumion source not found");
  }
} catch (err) {
  console.error("Error during copy:", err);
}
