import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from './gpt.service';
import { OrthogaphyDto } from './dtos';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('orthography-check')
  orthographyCheck(@Body() orthographyDto: OrthogaphyDto) {
    return this.gptService.orthographyCheck(orthographyDto);
  }
}
