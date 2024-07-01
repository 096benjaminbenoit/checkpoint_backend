import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Continent from "./Continent";

@Entity()
@ObjectType()
export default class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  code: string;

  @Column()
  @Field()
  emoji: string;

  @ManyToOne(() => Continent, (continent) => continent.countries)
  @Field(() => Continent)
  continent: Continent;
}
