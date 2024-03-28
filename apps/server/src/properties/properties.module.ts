import { Module } from '@nestjs/common';
import { PropertyService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { DatabaseModule } from '@server/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [PropertiesController],
  providers: [PropertyService],
})
export class PropertiesModule {}
