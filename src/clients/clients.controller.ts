import { Controller, Get, Post, Body, Param, Delete, UseGuards, Req, Patch, } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminGuard } from '../auth/admin.guard';


@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  // Ver lista de clientes: cualquier usuario autenticado
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  // Ver un cliente: cualquier usuario autenticado
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(Number(id));
  }

  // Crear cliente: SOLO admin
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post()
  create(@Req() req, @Body() body: { nombre: string; email: string; telefono?: string }) {
    const user = req.user;
    return this.clientsService.create({
      ...body,
      usuarioId: user.userId,
    });
  }

  // Borrar cliente: SOLO admin (si quieres)
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(Number(id));
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: { nombre?: string; email?: string; telefono?: string }) {
    return this.clientsService.update(Number(id), body);
  }


}
