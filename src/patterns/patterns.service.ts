import { Injectable } from '@nestjs/common';
import { Pattern } from './pattern.schema';
import { Model } from 'mongoose';
import { CreatePatternDto } from './dto/create-pattern.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PatternsService {
  constructor(
    @InjectModel(Pattern.name) private readonly patternModel: Model<Pattern>,
  ) {}

  async create(dto: CreatePatternDto): Promise<Pattern> {
    const newPattern = new this.patternModel(dto);
    return newPattern.save();
  }

  async findAll(): Promise<Pattern[]> {
    return this.patternModel.find().sort({ createdAt: -1 }).exec();
  }
}
