import { IsArray, IsString } from 'class-validator';

export class CreatePatternDto {
  @IsString()
  name: string;

  @IsArray()
  grid: boolean[][];
}
