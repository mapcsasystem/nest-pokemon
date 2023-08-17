import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class Pokemon extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;
  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}

const PokemonSchema = SchemaFactory.createForClass(Pokemon);
PokemonSchema.set('timestamps', true);
PokemonSchema.set('versionKey', false);
export { Pokemon, PokemonSchema };
