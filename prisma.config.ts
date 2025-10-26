import { config } from 'dotenv';
import { defineConfig } from '@prisma/config';

config(); // 🔹 Carga variables de entorno desde .env

export default defineConfig({
  schema: './prisma/schema.prisma',
  // Prisma usará automáticamente process.env.DATABASE_URL
});