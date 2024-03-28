import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, Ip } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { Prisma } from '@prisma/client';
//import { MyLoggerService } from '@server/my-logger/my-logger.service';

@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}
 //private readonly logger = new MyLoggerService(ApartmentsController.name);
  @Post()
  create(@Body() createApartmentDto: Prisma.ApartmentCreateInput) {
    return this.apartmentsService.create(createApartmentDto);
  }

  @Get()
  findAll(@Ip() ip: string, @Query('role') role?: "USER" | "ADMIN") {
   // this.logger.log(`Request for ALL Apartments/t ${ip}`);
    return this.apartmentsService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartmentsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateApartmentDto: Prisma.ApartmentUpdateInput) {
    return this.apartmentsService.update(+id, updateApartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartmentsService.remove(+id);
  }
}
