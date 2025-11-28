import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: '*', // permite cualquier origen (para desarrollo)
  });

  await app.listen(3000);
  console.log(`Aplicación corriendo en http://localhost:3000`);
}

bootstrap();
