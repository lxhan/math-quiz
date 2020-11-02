import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Problem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'text'})
  problemText: string

  @Column({type: 'int'})
  type: number

  @Column({type: 'text', nullable: true})
  choices: string

  @Column({type: 'text'})
  answer: string
}

