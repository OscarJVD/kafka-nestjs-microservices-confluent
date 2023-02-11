import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      subscribe: {
        fromBeginning: true
      },
      consumer: {
        groupId: "any-name-for-consumer-group-kafka"
      },
      client: {
        brokers: ["pkc-6ojv2.us-west4.gcp.confluent.cloud:9092"],
        ssl: true,
        sasl: {
          mechanism: "plain",
          username: "QZPWFG5D46BYRE5X",
          password: "Zu1+6TcWFQpyUmF+PkuXwPcg+6oXOauTQJu9VbeSnIqB36MBJI8JYItP3HBcowPm"
        }
      }
    }
  } as MicroserviceOptions)

  app.startAllMicroservices();

  await app.listen(3000);
}

bootstrap();
