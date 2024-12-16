const request = require('supertest');
const app = require('../app');  // Импорт вашего приложения
it('responds with Ya lublu shavel', async () => {
  const response = await request(app).get('/'); // Просто вызываем app, чтобы получить запрос
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Ya lublu shavel\n');
});