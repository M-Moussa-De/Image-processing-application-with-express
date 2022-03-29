import supertest from 'supertest';
import { app } from '../server';
import { processImage } from '../processImage';

const request = supertest(app);

describe('Home page', () => {
  it('Home page has route.', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});

describe('Check if the url for images processing is running properly', () => {
  it('Server running', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });
});

describe('Image processing funtcion', () => {
  it('Control if function runs as expected!', () => {
    expect(async () => {
      await processImage('fjord', 500, 500);
    }).not.toThrow();
  });
});
