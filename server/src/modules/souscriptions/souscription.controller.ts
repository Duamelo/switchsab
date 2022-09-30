import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import JwtAuthGuard from '../auth/jwt-auth.guard';
import { SouscriptionsService } from './souscriptions.service';
import souscriptionDto from './dto/souscriptionDto.dto';
import durationDto from './dto/duration.dto';
import PermissionGuard from '../shared/permission.guard';
import SouscriptionsPermission from '../users/permissions/souscriptionsPermission.enum';

@Controller('souscriptions')
@UseInterceptors(ClassSerializerInterceptor)
export class SouscriptionController {
  constructor(private readonly souscriptionsService: SouscriptionsService) {}

  // @UseGuards(PermissionGuard(SouscriptionsPermission.ReadSouscriptions))
  // @UseGuards(JwtAuthGuard)
  @Get()
  async index() {
    return this.souscriptionsService.index();
  }

  // @UseGuards(PermissionGuard(SouscriptionsPermission.ReadSouscriptions))
  // @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async show(@Param('id') id: number) {
    return this.souscriptionsService.getById(id);
  }

  // @UseGuards(PermissionGuard(SouscriptionsPermission.CreateSouscriptions))
  // @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() souscriptionData: souscriptionDto) {
    return await this.souscriptionsService.create(souscriptionData);
  }

  // @UseGuards(PermissionGuard(SouscriptionsPermission.CreateSouscriptions))
  // @UseGuards(JwtAuthGuard)
  @Put('/:id')
  async updateSouscription(
    @Body() subscribing: durationDto,
    @Param('id') id: number,
  ) {
    return await this.souscriptionsService.update(id, subscribing);
  }
}
