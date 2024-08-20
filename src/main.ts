import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URLS],
        queue: process.env.RABBITMQ_QUEUE,
        queueOptions: {
          durable: false,
        },
        socketOptions: {
          heartbeatIntervalInSeconds: 60,
        },
      },
    });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  await microservice.listen();
}
bootstrap();
