import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "KAFKA",
        transport: Transport.KAFKA,
        options: {
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
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
