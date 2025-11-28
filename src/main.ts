import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://proyecto-aula.surge.sh'
    ],
    credentials: true,
  });

  // Health check endpoint
  app.getHttpServer().on('request', (req, res) => {
    if (req.url === '/' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'Backend funcionando correctamente' }));
      return;
    }
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Servidor corriendo en puerto ${port}`);
}

bootstrap();
