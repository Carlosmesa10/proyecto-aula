import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',              // Desarrollo local
      'https://proyecto-aula.surge.sh'      // Frontend en producción (Surge)
    ],
    credentials: true,
  });

  const port = process.env.PORT || 8080;
  await app.listen(port);
  console.log(`Servidor corriendo en puerto ${port}`);
}

bootstrap();
