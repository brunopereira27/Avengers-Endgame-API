import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BattleAction } from './../battle/battle.entity';

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

  @OneToMany(type => BattleAction, battleAction => battleAction.avenger)
  battleActions: BattleAction[];
}
