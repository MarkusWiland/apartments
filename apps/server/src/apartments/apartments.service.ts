import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '@server/database/database.service';

@Injectable()
export class ApartmentsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createApartmentDto: Prisma.ApartmentCreateInput) {
    return this.databaseService.apartment.create({
      data: createApartmentDto,
    });
  }

  async findAll(role?: 'USER' | 'ADMIN') {
    if (role)
      return this.databaseService.apartment.findMany({
        where: {
          role,
        },
      });
    return this.databaseService.apartment.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.apartment.findUnique({ where: { id } });
  }

  async update(id: number, updateApartmentDto: Prisma.ApartmentUpdateInput) {
    return this.databaseService.apartment.update({
      where: { id },
      data: updateApartmentDto,
    })
  }

  async remove(id: number) {
    return this.databaseService.apartment.delete({ where: { id } })
  }
}
