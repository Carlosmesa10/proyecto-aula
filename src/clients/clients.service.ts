import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  create(data: { nombre: string; email: string; telefono?: string; usuarioId?: number }) {
    return this.prisma.cliente.create({ data });
  }

  findAll() {
    return this.prisma.cliente.findMany({
      include: {
        usuario: {
          select: { id: true, nombre: true, email: true },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.cliente.findUnique({
      where: { id },
      include: {
        usuario: {
          select: { id: true, nombre: true, email: true },
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.cliente.delete({ where: { id } });
  }

  async update(id: number, data: { nombre?: string; email?: string; telefono?: string }) {
    // Obtener el cliente actual para mantener usuarioId
    const clienteActual = await this.prisma.cliente.findUnique({
      where: { id },
    });

    if (!clienteActual) {
      throw new Error('Cliente no encontrado');
    }

    // Preparar los datos actualizados
    const datosActualizados = {
      nombre: data.nombre ?? clienteActual.nombre,
      email: data.email ?? clienteActual.email,
      telefono: data.telefono ?? clienteActual.telefono,
    };

    // Borrar y recrear
    await this.prisma.cliente.delete({ where: { id } });
    
    return this.prisma.cliente.create({
      data: {
        ...datosActualizados,
        usuarioId: clienteActual.usuarioId,
      },
      include: {
        usuario: {
          select: { id: true, nombre: true, email: true },
        },
      },
    });
  }

}
