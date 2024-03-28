import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from '@server/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
