import { Arg, Mutation, Resolver } from "type-graphql";
import Continent from "../entities/Continent";
import { CreateContinentInput } from "../inputs/ContinentInput";

@Resolver()
export default class ContinentResolver {
  @Mutation(() => Continent)
  async createContinent(
    @Arg("data", { validate: true }) data: CreateContinentInput
  ) {
    const newContinent = new Continent();
    Object.assign(newContinent, data);
    const { id } = await newContinent.save();
    return Continent.findOne({
      where: { id },
    });
  }
}
