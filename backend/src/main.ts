import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // allow React frontend to connect

  // Swagger/OpenAPI setup
  const config = new DocumentBuilder()
    .setTitle('Todo List API')
    .setDescription('API documentation for the Todo List backend')
    .setVersion('1.0')
    .addTag('tasks')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log('🚀 Server running at http://localhost:3000');
  console.log('📚 Swagger UI available at http://localhost:3000/api-docs');
}

bootstrap();
