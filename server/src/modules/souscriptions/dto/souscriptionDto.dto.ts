import { IsNotEmpty, IsNumber } from 'class-validator';

export default class souscriptionDto {
  @IsNumber()
  @IsNotEmpty({ message: 'this client must be define' })
  clientId: number;

  @IsNumber()
  @IsNotEmpty({ message: 'this tarif must be define' })
  tarifId: number;
}
