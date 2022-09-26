import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateRapportDto from './dto/rapport.dto';
import { RapportService } from './rapport.service';

@Controller('rapport')
export class RapportController {
  constructor(private readonly rapportService: RapportService) {}

  // @UseGuards(PermissionGuard(PostesPermission.CreatePostes))
  // @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() rapport: CreateRapportDto) {
    return await this.rapportService.add(rapport);
  }

  // @UseGuards(PermissionGuard(PostesPermission.ReadPostes))
  // @UseGuards(JwtAuthGuard)
  @Get()
  async getRapport() {
    return await this.rapportService.findAll();
  }
}
