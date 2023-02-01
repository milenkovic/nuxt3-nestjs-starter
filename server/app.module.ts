import { APP_GUARD } from '@nestjs/core';
import { Module} from '@nestjs/common';
import { AuthorizationGuard } from '~~/server/guards/authorization.guard';
import { AppController } from './app.controller';

@Module({
    imports: [
    ],
    controllers: [AppController],
    providers: [
      {
        provide: APP_GUARD,
        useExisting: AuthorizationGuard,
      },
      AuthorizationGuard
    ],
  })
export class AppModule {}