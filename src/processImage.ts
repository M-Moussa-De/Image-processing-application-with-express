import path from 'path';
import sharp from 'sharp';

//  To process images
export async function processImage(filename: string, width: number, height: number):Promise<boolean> {
    const output = path.join(__dirname, `./../output/imgs/${filename}.${width}.${height}.jpg`);
  
    await sharp(path.join(__dirname, `../assets/images/${filename}.jpg`))
      .resize({ width: width, height: height })
      .toFile(output)
      .then((info) => console.info(info))
      .catch((err) => console.error(err));

    return true;
  }