import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { IotService } from './iot.service';

@Controller('iot')
export class IotController {
  constructor(private readonly iotService: IotService) {}

  @Post('/decompte/start/:clientId/:posteId')
  @HttpCode(200)
  async start(
    @Param('clientId', ParseIntPipe) clientId: number,
    @Param('posteId', ParseIntPipe) posteId: number,
  ) {
    return await this.iotService.startDecompte(clientId, posteId);
  }

  @Post('/decompte/end/:clientId/:posteId')
  @HttpCode(200)
  async ends(
    @Param('clientId', ParseIntPipe) clientId: number,
    @Param('posteId', ParseIntPipe) posteId: number,
  ) {
    return await this.iotService.endsDecompte(clientId, posteId);
  }
}
