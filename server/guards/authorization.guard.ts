import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    return true;
  }
}