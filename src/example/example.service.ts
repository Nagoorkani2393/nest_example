import { HttpService } from '@nestjs/axios';
import { Dependencies, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
@Dependencies(HttpService)
export class ExampleService {
  constructor(private readonly httpService: HttpService) {}

  getHello(id: string): string {
    return `Hello World from example ${id}!`;
  }

  async getData(): Promise<AxiosResponse<any, any>> {
    const response: AxiosResponse<any, any> = await firstValueFrom(
      this.httpService.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
        catchError((error) => {
          console.log(error);
          throw error;
        }),
      ),
    );
    return response;
  }
}
