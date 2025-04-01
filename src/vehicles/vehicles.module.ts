import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { Vehicle } from './entities/vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle])], // Registramos el repositorio
  controllers: [VehiclesController],
  providers: [VehiclesService],
  exports: [VehiclesService], //  Exportamos el servicio si lo necesitamos en otros módulos
})
export class VehiclesModule {}
