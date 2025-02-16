import { Controller, Get } from '@nestjs/common';
import { Response } from 'src/shared/dtos/Response';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRateLimit(): Promise<Response<void | string>>  {
    return this.appService.getRateLimit();
  }
}
