import { Field, InputType } from "type-graphql";

@InputType()
export class CreateContinentInput {
  @Field()
  name: string;

  @Field()
  code: string;
}

@InputType()
export class UpdateContinentInput extends CreateContinentInput {}
