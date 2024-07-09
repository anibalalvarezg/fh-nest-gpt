import { IsInt, IsOptional, IsString } from 'class-validator';

export class OrthogaphyDto {
  @IsString()
  readonly prompt: string;

  @IsInt()
  @IsOptional()
  readonly maxTokens?: number;
}
