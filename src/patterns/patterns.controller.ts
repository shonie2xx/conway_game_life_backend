import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PatternsService } from './patterns.service';
import { CreatePatternDto } from './dto/create-pattern.dto';

@Controller('patterns')
export class PatternsController {
  constructor(private readonly patternService: PatternsService) {}

  @Post()
  create(@Body() dto: CreatePatternDto) {
    return this.patternService.create(dto);
  }

  @Get()
  findAll() {
    return this.patternService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patternService.findOne(id);
  }
}
