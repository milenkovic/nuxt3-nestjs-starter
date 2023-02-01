import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('api')
  getApi() {
    return {
        message: 'Hello API'
    };
  }
}