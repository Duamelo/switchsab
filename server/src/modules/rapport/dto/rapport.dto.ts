import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class CreateRapportDto {
  @IsString()
  @IsNotEmpty({ message: 'client must be define' })
  client: string;

  @IsBoolean()
  @IsNotEmpty({ message: 'amount must be define' })
  amount: number;

  @IsNumber()
  @IsNotEmpty({ message: 'duration must be define' })
  duration: number;

  @IsString()
  @IsNotEmpty({ message: 'category must be define' })
  category: string;

  @IsString()
  @IsNotEmpty({ message: 'cashier must be define' })
  cashier: string;
}
