import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, Ip } from '@nestjs/common';
import {  UserService } from './users.service';
import { Prisma } from '@prisma/client';
//import { MyLoggerService } from '@server/my-logger/my-logger.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}
 //private readonly logger = new MyLoggerService(ApartmentsController.name);
  @Post()
  create(@Body() createApartmentDto: Prisma.UserCreateInput) {
    return this.usersService.create(createApartmentDto);
  }

  @Get()
  findAll(@Ip() ip: string) {
   // this.logger.log(`Request for ALL Apartments/t ${ip}`);
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: Prisma.UserUpdateInput) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
