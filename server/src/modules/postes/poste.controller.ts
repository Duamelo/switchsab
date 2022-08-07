import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, UseGuards, UseInterceptors } from "@nestjs/common";
import JwtAuthGuard from "../auth/jwt-auth.guard";
import { PostesService } from "./postes.service";
import posteDto from './dto/posteDto.dto';

@Controller('postes')
@UseInterceptors(ClassSerializerInterceptor)
export class PosteController {
    constructor(
      private readonly postesService: PostesService,
    ) {}

    //@UseGuards(PermissionGuard(PostesPermission.ReadPostes))
    @UseGuards(JwtAuthGuard)
    @Get()
    async index() { 
      return this.postesService.index();
    }

    //@UseGuards(PermissionGuard(PostesPermission.ReadPostes))
    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    async show(@Param('id') id: number) { 
      return this.postesService.getById(id);
    }

    //@UseGuards(PermissionGuard(PostesPermission.CreatePostes))
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() posteData: posteDto) {
     return this.postesService.create(posteData);
    }

    //@UseGuards(PermissionGuard(PostesPermission.UpdatePostes))
    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    async update(@Body() posteData: posteDto, @Param('id') id: number) {
      return this.postesService.update(id, posteData);
    }

    //@UseGuards(PermissionGuard(PostesPermission.DeletePostes))
    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    async delete(@Param('id') id: number) {
      return this.postesService.delete(id);
    } 
}