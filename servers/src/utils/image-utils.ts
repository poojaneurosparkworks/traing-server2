import path from "path";
import sharp from "sharp";

export async function fromPath(filePath: string) {
  try {
    const [_dir, _base] = [path.dirname(filePath), path.basename(filePath)];
    const filename = `${_dir}/${_base}-thumbnail.webp`;
    const modified = await sharp(filePath).resize(100).webp().toFile(filename);
    console.log(modified);
  } catch (error) {
    console.log(error);
  }
}
