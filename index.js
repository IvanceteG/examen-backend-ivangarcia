import 'dotenv/config';
import express from 'express';
import mascotasRouter from './routes/mascotasRouter.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    missatge: 'API de Mascotas',
    endpoints: ['/api/mascotas', '/api/mascotas/id']
  });
});

app.use('/api/mascotas', mascotasRouter);

app.listen(PORT, () => {
  console.log(`Servidor escoltant a http://localhost:${PORT}`);
});