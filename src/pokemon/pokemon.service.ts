import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { Model, isValidObjectId } from 'mongoose';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto) {
    try {
      createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase().trim();
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(`Pokemon exits ${JSON.stringify(error)}`);
      }
      throw new InternalServerErrorException(
        `Create Pokemon ${JSON.stringify(error)}`,
      );
    }
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  async findOne(term: string) {
    try {
      let pokemon: Pokemon;
      if (!isNaN(+term)) {
        pokemon = await this.pokemonModel.findOne({ no: term });
        return pokemon;
      }
      if (isValidObjectId(term)) {
        pokemon = await this.pokemonModel.findById(term);
        return pokemon;
      }
      if (!pokemon) {
        pokemon = await this.pokemonModel.findOne({ name: term.trim() });
        return pokemon;
      }
      throw new NotFoundException(`pokemon with 'id' or 'name' not exist`);
    } catch (error) {}
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
