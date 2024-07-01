import { Field, InputType } from "type-graphql";
import { ObjectId } from "../types/ObjectId";

@InputType()
export class CreateCountryInput {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  emoji: string;

  @Field()
  continent: ObjectId;
}

@InputType()
export class UpdateCountryInput extends CreateCountryInput {}
