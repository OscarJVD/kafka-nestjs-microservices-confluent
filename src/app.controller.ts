import { Body, Controller, Inject, Logger, Post } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject("KAFKA")
    private readonly kafka: ClientProxy
  ) { }

  // Observe the topic_0 topic
  @MessagePattern("topic_0")
  public messageCreate(@Payload() payload: any) {
    // Logger.log(payload, AppController.name);
  }

  // Send a message to the topic_0 topic
  @Post("/send")
  sendMessage(
    @Body("message") message: string,
    @Body("user") user: string,
  ) {
    return firstValueFrom(
      this.kafka.emit("topic_0", {
        message, user
      })
    )
  }

}
