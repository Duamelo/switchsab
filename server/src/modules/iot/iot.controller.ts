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
}
