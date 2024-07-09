import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases';
import { OrthogaphyDto } from './dtos';

@Injectable()
export class GptService {
  async orthographyCheck(orthographyDto: OrthogaphyDto) {
    return await orthographyCheckUseCase({
      prompt: orthographyDto.prompt,
    });
  }
}
