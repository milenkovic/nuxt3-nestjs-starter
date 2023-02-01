import { NestFactory } from '@nestjs/core';
import { createRouter } from 'radix3';
import { parseExpressApp } from 'express-route-parser';
import { AppModule } from '~~/server/app.module';

export default defineNitroPlugin(async (nitroApp) => {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const router = createRouter();
  const express = app.getHttpAdapter().getInstance();

  parseExpressApp(express).forEach((route) => {
    router.insert(route.path, route);
  });
  
  nitroApp.h3App.stack.unshift({
    route: '/',
    match(url) {
      const r = router.lookup(url)
      return r !== null
    },
    handler: fromNodeMiddleware(express)
  });
});

