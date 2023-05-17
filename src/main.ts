import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerInit } from './swagger/swagger';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swaggerInit(app);
  app.use(cors());
  await app.listen(process.env.APP_PORT);
}
bootstrap();
