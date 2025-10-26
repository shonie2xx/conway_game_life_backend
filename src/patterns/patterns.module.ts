import { Module } from '@nestjs/common';
import { PatternsService } from './patterns.service';
import { PatternsController } from './patterns.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pattern, PatternSchema } from './pattern.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pattern.name, schema: PatternSchema }]),
  ],
  providers: [PatternsService],
  controllers: [PatternsController],
})
export class PatternsModule {}
