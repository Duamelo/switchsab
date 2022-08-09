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
import { TarifsService } from './tarifs.service';
import tarifCreateDto from './dto/create-tarif.dto';

@Controller('tarifs')
@UseInterceptors(ClassSerializerInterceptor)
export class TarifController {
  constructor(private readonly tarifsService: TarifsService) {}

  //@UseGuards(PermissionGuard(TarifsPermission.ReadTarifs))
  @UseGuards(JwtAuthGuard)
  @Get()
  async index() {
    return this.tarifsService.index();
  }

  //@UseGuards(PermissionGuard(TarifsPermission.ReadTarifs))
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async show(@Param('id') id: number) {
    return this.tarifsService.getById(id);
  }

  //@UseGuards(PermissionGuard(TarifsPermission.CreateTarifs))
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() tarifData: tarifCreateDto) {
    return this.tarifsService.create(tarifData);
  }

  //@UseGuards(PermissionGuard(TarifsPermission.UpdateTarifs))
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  async update(@Body() tarifData: tarifCreateDto, @Param('id') id: number) {
    return this.tarifsService.update(id, tarifData);
  }

  //@UseGuards(PermissionGuard(TarifsPermission.DeleteTarifs))
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.tarifsService.delete(id);
  }
}
