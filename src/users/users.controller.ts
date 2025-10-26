import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Obtener todos los usuarios
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // Crear un usuario
  @Post()
  create(@Body() body: { nombre: string; email: string; password: string }) {
    return this.usersService.create(body);
  }
}
