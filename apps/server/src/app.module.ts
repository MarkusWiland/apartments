import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ApartmentsModule } from './apartments/apartments.module';
import { PropertiesModule } from './properties/properties.module';
import { FavoritesModule } from './favorites/favorites.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DatabaseModule,
    ApartmentsModule,
    PropertiesModule,
    FavoritesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
