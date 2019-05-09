import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Avenger {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('int')
  hp: number;

  @Column('int')
  def: number;

  @Column('int')
  atq: number;
}
