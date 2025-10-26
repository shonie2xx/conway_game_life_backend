import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Pattern extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [[Boolean]], required: true })
  grid: boolean[][];
}

export const PatternSchema = SchemaFactory.createForClass(Pattern);
