import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import User from '../users/user.entity';
 
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'pseudo'
    });
  }
  async validate(pseudo: string, password: string): Promise<User> {
    return this.authService.getAuthenticatedUser(pseudo, password);
  }
}