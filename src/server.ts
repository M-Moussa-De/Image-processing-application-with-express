import express, { Request, Response } from 'express';
import path from 'path';
import { processImage } from './processImage';

export const app = express();

app.use(express.static(path.join(__dirname, './../output')));

const imgs = ['fjord', 'encenadaport', 'icelandwaterfall', 'santmonica'];

app.get('/', (_req:Request, res:Response) => {
  res.send('Please, check Readme file to access the right url to process your image');
});

app.get('/api/images?', async(req: Request, res: Response) => {
    const filename = String(req.query.filename) || '';
    const width = Number(req.query.width) || 0;
    const height = Number(req.query.height) || 0;

    const isimageNameValid: boolean = (filename != '') && (filename == imgs[0] || filename == imgs[1] || filename == imgs[2] || filename == imgs[3]);
    const isWidthValid: boolean = (width >= 100) && (width <= 1200);
    const isHeightValid: boolean = (height >= 100) && (height <=1200);

    if(isimageNameValid && isWidthValid && isHeightValid) {
      await processImage(filename, width, height);
      
      const img = `<img src="/imgs/${filename}.${width}.${height}.jpg" />`;
      let html = `<!DOCTYPE html><html><head><title>Image Processing App</title>
      <link rel="stylesheet" href="/style.css"></head>`;
      html += `<body><main>${img}</main></body></html>`;
    
      res.send(html);    
      res.end();
    } else {
      res.send('<p>Please, provide a valid image\'s name, width and height must be between 100px and 1200px (See Readme for help).</p>');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});