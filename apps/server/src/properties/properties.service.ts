import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '@server/database/database.service';

@Injectable()
export class PropertyService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createPropertyDto: Prisma.PropertyCreateInput) {
    return this.databaseService.property.create({
      data: createPropertyDto,
    });
  }

  async findAll() {

    return this.databaseService.property.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.property.findUnique({ where: { id } });
  }

  async update(id: number, updatePropertyDto: Prisma.PropertyUpdateInput) {
    return this.databaseService.property.update({
      where: { id },
      data: updatePropertyDto,
    })
  }

  async remove(id: number) {
    return this.databaseService.property.delete({ where: { id } })
  }
}
