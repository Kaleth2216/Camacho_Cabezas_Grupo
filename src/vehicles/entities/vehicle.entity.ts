import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  año: number;

  @Column()
  kilometraje: number;

  @Column()
  color: string;

  @Column()
  tipo_combustible: string;

  @Column()
  transmision: string;

  @Column('decimal')
  precio: number;

  @Column({ default: true })
  disponible: boolean;

  @Column({ type: 'text', nullable: true })
  descripcion: string;
}
