import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO enable cors, when deploy

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
