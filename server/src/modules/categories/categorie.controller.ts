import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, UseGuards, UseInterceptors } from "@nestjs/common";
import JwtAuthGuard from "../auth/jwt-auth.guard";
import PermissionGuard from "../shared/permission.guard";
import CategoriesPermission from "../users/permissions/categoriesPermission.enum";
import { CategoriesService } from "./categories.service";
import categorieDto from './dto/categorieDto.dto';

@Controller('categories')
@UseInterceptors(ClassSerializerInterceptor)
export class CategorieController {
    constructor(
      private readonly categoriesService: CategoriesService,
    ) {}

    //@UseGuards(PermissionGuard(CategoriesPermission.ReadCategories))
    @UseGuards(JwtAuthGuard)
    @Get()
    async index() { 
      return this.categoriesService.index();
    }

    //@UseGuards(PermissionGuard(CategoriesPermission.ReadCategories))
    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    async show(@Param('id') id: number) { 
      return this.categoriesService.getById(id);
    }

    //@UseGuards(PermissionGuard(CategoriesPermission.CreateCategories))
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() categorieData: categorieDto) {
     return this.categoriesService.create(categorieData);
    }

    //@UseGuards(PermissionGuard(CategoriesPermission.UpdateCategories))
    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    async update(@Body() categorieData: categorieDto, @Param('id') id: number) {
      return this.categoriesService.update(id, categorieData);
    }

    //@UseGuards(PermissionGuard(CategoriesPermission.DeleteCategories))
    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    async delete(@Param('id') id: number) {
      return this.categoriesService.delete(id);
    } 
}