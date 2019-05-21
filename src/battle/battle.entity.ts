import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Avenger } from './../avengers/avenger.entity';
import { Villain } from './../villains/villains.entity';

@Entity()
export class Battle {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: string;

  @OneToMany(type => BattleAction, battleAction => battleAction.battle)
  battleActions: BattleAction[];
}

@Entity()
export class BattleAction {
  @PrimaryGeneratedColumn()
  id: number;

  // A ply is the technical term for the "turn" played by one player.
  @Column('int')
  ply: number;

  @Column('boolean')
  isAvengerPly: boolean;

  @ManyToOne(type => Battle, battle => battle.battleActions)
  battle: Battle;

  @ManyToOne(type => Avenger, avenger => avenger.battleActions)
  avenger: Avenger;

  @ManyToOne(type => Villain, villain => villain.battleActions)
  villain: Villain;
}
