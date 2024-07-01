import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Country from "../entities/Country";
import { GraphQLError } from "graphql";
import { CreateCountryInput } from "../inputs/CountryInput";

@Resolver()
export default class CountryResolver {
  @Query(() => [Country])
  async getCountries(): Promise<Country[] | void> {
    const countries = await Country.find({ relations: { continent: true } });
    if (countries.length < 1) throw new GraphQLError("No countries found");
    return countries;
  }

  @Query(() => Country)
  async getCountryByCode(
    @Arg("code", () => String) code: string
  ): Promise<void | Country> {
    const country = await Country.findOne({
      where: {
        code: code,
      },
      relations: { continent: true },
    });

    if (!country) throw new GraphQLError("Country not found");
    return country;
  }

  @Query(() => [Country])
  async getCountriesByContinent(
    @Arg("continentCode", () => String) code: string
  ): Promise<void | Country[]> {
    const countries = await Country.find({
      where: {
        continent: {
          code: code,
        },
      },
      relations: { continent: true },
    });

    if (countries.length < 1)
      throw new GraphQLError("No country found with this continent code");
    return countries;
  }

  @Mutation(() => Country)
  async createCountry(
    @Arg("data", { validate: true }) data: CreateCountryInput
  ) {
    const newCountry = new Country();
    Object.assign(newCountry, data);
    const { id } = await newCountry.save();
    return Country.findOne({
      where: { id },
      relations: { continent: true },
    });
  }
}
