import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import FreePostDto from './dto/freepost.dto';
import { FreepostService } from './freepost.service';

@Controller('freepost')
export class FreepostController {
  constructor(private readonly freePosteService: FreepostService) {}

  // @UseGuards(PermissionGuard(PostesPermission.CreatePostes))
  // @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() poste: FreePostDto) {
    return this.freePosteService.add(poste);
  }

  // @UseGuards(PermissionGuard(PostesPermission.ReadPostes))
  // @UseGuards(JwtAuthGuard)
  @Get()
  async getAllFreePost() {
    return this.freePosteService.getAllFreePost();
  }

  // @UseGuards(PermissionGuard(PostesPermission.DeletePostes))
  // @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.freePosteService.remove(id);
  }
}
