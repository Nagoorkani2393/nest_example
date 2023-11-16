import { Controller, Get, Query } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
  constructor(private readonly appService: ExampleService) {}

  @Get()
  getHello(@Query('id') param: string): string {
    return this.appService.getHello(param);
  }
  @Get('data')
  async getData(): Promise<void> {
    this.appService.getData().then((res) => {
      console.log(res.data);
    });
  }
}
