import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Crear usuario
  async create(data: { nombre: string; email: string; password: string }) {
    return this.prisma.usuario.create({
      data,
    });
  }

  // Listar todos los usuarios
  async findAll() {
    return this.prisma.usuario.findMany();
  }
}
