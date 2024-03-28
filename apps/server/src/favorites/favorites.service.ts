import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '@server/database/database.service';

@Injectable()
export class FavoritesService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createFavoriteDto: Prisma.FavoriteCreateInput) {
    return this.databaseService.favorite.create({
      data: createFavoriteDto,
    });
  }

  async findAll() {

    return this.databaseService.favorite.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.favorite.findUnique({ where: { id } });
  }

  async update(id: number, updateFavoriteDto: Prisma.FavoriteUpdateInput) {
    return this.databaseService.favorite.update({
      where: { id },
      data: updateFavoriteDto,
    })
  }

  async remove(id: number) {
    return this.databaseService.favorite.delete({ where: { id } })
  }
}
