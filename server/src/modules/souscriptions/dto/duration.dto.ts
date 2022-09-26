import { IsNotEmpty, IsNumber } from 'class-validator';

export default class durationDto {
  @IsNumber()
  @IsNotEmpty({ message: 'rest duration must be define' })
  rest_duration: number;
}
