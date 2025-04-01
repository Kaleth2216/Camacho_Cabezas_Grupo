import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const newVehicle = this.vehicleRepository.create(createVehicleDto);
    return this.vehicleRepository.save(newVehicle);
  }

  async findAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  async findOne(id: number): Promise<Vehicle> {
    return this.vehicleRepository.findOne({ where: { id } });
  }

  async update(id: number, updateVehicleDto: UpdateVehicleDto): Promise<Vehicle> {
    await this.vehicleRepository.update(id, updateVehicleDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.vehicleRepository.delete(id);
  }
}
