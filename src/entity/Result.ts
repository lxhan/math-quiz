import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Result extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'int'})
  problemId: number 

  @Column({type: 'text'})
  answer: string 

  @Column({type: 'int'})
  result: number 
}

