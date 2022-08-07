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
import { GroupesService } from './groupes.service';
import groupeCreateDto from './dto/groupeCreateDto.dto';
import groupeDto from './dto/groupeDto.dto';

@Controller('groupes')
@UseInterceptors(ClassSerializerInterceptor)
export class GroupeController {
  constructor(private readonly groupesService: GroupesService) {}

    //@UseGuards(PermissionGuard(GroupesPermission.ReadGroupes))
    @UseGuards(JwtAuthGuard)
    @Get()
    async index() { 
      return this.groupesService.index();
    }

  //@UseGuards(PermissionGuard(GroupesPermission.ReadGroupes))
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async show(@Param('id') id: number) {
    return this.groupesService.getById(id);
  }

    //@UseGuards(PermissionGuard(GroupesPermission.CreateGroupes))
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() groupeData: groupeCreateDto) {
     return this.groupesService.create(groupeData);
    }

  //@UseGuards(PermissionGuard(GroupesPermission.UpdateGroupes))
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  async update(@Body() groupeData: groupeDto, @Param('id') id: number) {
    return this.groupesService.update(id, groupeData);
  }

  //@UseGuards(PermissionGuard(GroupesPermission.DeleteGroupes))
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.groupesService.delete(id);
  }
}
