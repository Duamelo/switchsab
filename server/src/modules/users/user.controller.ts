import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Put,
  UseGuards,
} from '@nestjs/common';
import JwtAuthGuard from '../auth/jwt-auth.guard';
import UpdateUserDto from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Get('id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getById(id);
  }

  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Get()
  async getByAllUsers() {
    return await this.userService.getByIds();
  }

  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ) {
    return await this.userService.update(id, user);
  }

  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteCustomer(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.delete(id);
  }
}
