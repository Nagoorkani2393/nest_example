import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}
