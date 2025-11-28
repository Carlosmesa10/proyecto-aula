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

  // Buscar usuario por ID
  async findOne(id: number) {
    return this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  // Eliminar usuario por ID
  async remove(id: number) {
    return this.prisma.usuario.delete({
      where: { id },
    });
  }

  // Actualizar usuario
  async update(id: number, data: any) {
    return this.prisma.usuario.update({
      where: { id },
      data,
    });
  }

  findByEmail(email: string) {
    return this.prisma.usuario.findUnique({
      where: { email },
    });
  }
}
