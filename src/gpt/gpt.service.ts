import { Injectable } from '@nestjs/common';
import {
  orthographyCheckUseCase,
  prosConstDiscusserStreamUseCase,
  prosConstDiscusserUseCase,
} from './use-cases';
import { OrthogaphyDto, ProsConsDiscusserDto } from './dtos';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async orthographyCheck(orthographyDto: OrthogaphyDto) {
    return await orthographyCheckUseCase(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }

  async prosConsDicusser({ prompt }: ProsConsDiscusserDto) {
    return await prosConstDiscusserUseCase(this.openai, { prompt });
  }

  async prosConsDicusserStream({ prompt }: ProsConsDiscusserDto) {
    return await prosConstDiscusserStreamUseCase(this.openai, { prompt });
  }
}
