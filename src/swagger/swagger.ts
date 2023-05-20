import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
export function swaggerInit(app) {
    const config = new DocumentBuilder()
    .setTitle(`${process.env.APP_COMPANY}`)
    .setDescription(`The ${process.env.APP_COMPANY} API description`)
    .setVersion('1.0')
    .addTag(`${process.env.APP_COMPANY}`.toLowerCase())
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}