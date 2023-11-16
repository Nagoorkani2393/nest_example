import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('data')
class AppController2 {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getData();
  }
}

export { AppController2 };
