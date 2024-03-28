import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, Ip } from '@nestjs/common';
import { PropertyService } from './properties.service';
import { Prisma } from '@prisma/client';
//import { MyLoggerService } from '@server/my-logger/my-logger.service';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertyService: PropertyService) {}
 //private readonly logger = new MyLoggerService(ApartmentsController.name);
  @Post()
  create(@Body() createPropertyDto: Prisma.PropertyCreateInput) {
    return this.propertyService.create(createPropertyDto);
  }

  @Get()
  findAll(@Ip() ip: string) {
   // this.logger.log(`Request for ALL Apartments/t ${ip}`);
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePropertyDto: Prisma.PropertyUpdateInput) {
    return this.propertyService.update(+id, updatePropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyService.remove(+id);
  }
}
