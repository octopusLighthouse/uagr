import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerInit } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swaggerInit(app);
  await app.listen(process.env.APP_PORT);
}
bootstrap();
