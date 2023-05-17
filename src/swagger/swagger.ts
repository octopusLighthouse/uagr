import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
export function swaggerInit(app) {
    const config = new DocumentBuilder()
    .setTitle('uagr')
    .setDescription('The uagr API description')
    .setVersion('1.0')
    .addTag('uagr')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}