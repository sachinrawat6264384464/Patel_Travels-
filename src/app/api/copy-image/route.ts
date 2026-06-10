import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const src = `C:\\Users\\Dell 5490T\\.gemini\\antigravity-ide\\brain\\9a9b9fbd-6ab9-4244-94d7-883c486d6848\\media__1781090986083.jpg`;
  const destDir = `D:\\mykhataproject\\Hoa_US\\HOAUSAMIN\\car\\public\\images`;
  const dest = path.join(destDir, "owner.jpg");

  try {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    if (!fs.existsSync(src)) {
      // Let's also check the alternative path just in case
      const altSrc = `C:\\Users\\Dell 5490T\\.gemini\\antigravity-ide\\brain\\9a9b9fbd-6ab9-4244-94d7-883c486d6848\\.tempmediaStorage\\media_9a9b9fbd-6ab9-4244-94d7-883c486d6848_1781091335288.jpg`;
      if (fs.existsSync(altSrc)) {
        fs.copyFileSync(altSrc, dest);
        return NextResponse.json({
          success: true,
          message: `Successfully copied from alt path ${altSrc} to ${dest}`
        });
      }
      return NextResponse.json({
        success: false,
        error: `Source file does not exist: ${src} and alt path does not exist: ${altSrc}`
      }, { status: 404 });
    }
    fs.copyFileSync(src, dest);
    return NextResponse.json({
      success: true,
      message: `Successfully copied from ${src} to ${dest}`
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message || String(err)
    }, { status: 500 });
  }
}
