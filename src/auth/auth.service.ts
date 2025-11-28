import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Registro de usuario
  async register(data: { 
    nombre: string; 
    email: string; 
    password: string; 
    role?: string 
  }) {
    const userData = {
      ...data,
      role: data.role || 'user',
    };

    return this.usersService.create(userData);
  }

  // Login con búsqueda por email
  async login(email: string, password: string) {
    try {
      const user = await this.usersService.findByEmail(email);
      
      if (!user || user.password !== password) {
        throw new UnauthorizedException('Credenciales inválidas');
      }

      const payload = { 
        sub: user.id, 
        email: user.email, 
        role: user.role 
      };

      const token = await this.jwtService.signAsync(payload);

      const { password: _, ...userResult } = user;

      return {
        message: 'Login exitoso',
        access_token: token,
        user: userResult,
      };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('Credenciales inválidas');
    }
  }

  // Validar token (opcional)
  async validateToken(token: string) {
    try {
      const payload = await this.jwtService.verifyAsync(token);
      return payload;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
