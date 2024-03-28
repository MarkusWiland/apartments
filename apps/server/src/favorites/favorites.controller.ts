import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, Ip } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { Prisma } from '@prisma/client';
//import { MyLoggerService } from '@server/my-logger/my-logger.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly apartmentsService: FavoritesService) {}
 //private readonly logger = new MyLoggerService(ApartmentsController.name);
  @Post()
  create(@Body() createApartmentDto: Prisma.FavoriteCreateInput) {
    return this.apartmentsService.create(createApartmentDto);
  }

  @Get()
  findAll(@Ip() ip: string) {
   // this.logger.log(`Request for ALL Apartments/t ${ip}`);
    return this.apartmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartmentsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateApartmentDto: Prisma.FavoriteUpdateInput) {
    return this.apartmentsService.update(+id, updateApartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartmentsService.remove(+id);
  }
}
