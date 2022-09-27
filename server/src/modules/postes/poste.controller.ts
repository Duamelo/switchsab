import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import JwtAuthGuard from '../auth/jwt-auth.guard';
import { PostesService } from './postes.service';
import posteCreateDto from './dto/posteCreateDto.dto';
import PermissionGuard from '../shared/permission.guard';
import PostesPermission from '../users/permissions/postesPermission.enum';

@Controller('postes')
@UseInterceptors(ClassSerializerInterceptor)
export class PosteController {
  constructor(private readonly postesService: PostesService) {}

  // @UseGuards(PermissionGuard(PostesPermission.ReadPostes))
  // @UseGuards(JwtAuthGuard)
  @Get()
  async index() {
    return this.postesService.index();
  }

  // @UseGuards(PermissionGuard(PostesPermission.ReadPostes))
  // @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async show(@Param('id') id: number) {
    return this.postesService.getById(id);
  }

  // @UseGuards(PermissionGuard(PostesPermission.ReadPostes))
  // @UseGuards(JwtAuthGuard)
  @Get('/groupes/:id')
  async getByGroupe(@Param('id') id: number) {
    return this.postesService.getByGroupe(id);
  }


  // @UseGuards(PermissionGuard(PostesPermission.CreatePostes))
  // @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() posteData: posteCreateDto) {
    return this.postesService.create(posteData);
  }

  // @UseGuards(PermissionGuard(PostesPermission.UpdatePostes))
  // @UseGuards(JwtAuthGuard)
  @Put('/:id')
  async update(@Body() posteData: posteCreateDto, @Param('id') id: number) {
    return this.postesService.update(id, posteData);
  }

  // @UseGuards(PermissionGuard(PostesPermission.DeletePostes))
  // @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.postesService.delete(id);
  }
}
