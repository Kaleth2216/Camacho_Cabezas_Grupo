import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesModule } from './vehicles/vehicles.module';
import { Vehicle } from './vehicles/entities/vehicle.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      database: process.env.DB_NAME || 'nest_vehicles',
      entities: [Vehicle],
      synchronize: true, // Crea tablas automáticamente
      dropSchema: false, // Evita que se borren los datos en reinicios
      migrationsRun: true, // Ejecuta migraciones (si usamos)
      autoLoadEntities: true, // Carga entidades automáticamente
    }),
    VehiclesModule,
  ],
})
export class AppModule {}
