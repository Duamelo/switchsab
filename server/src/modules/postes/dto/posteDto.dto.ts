import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class posteDto {
  @IsString()
  @IsNotEmpty({ message: 'this nom must be define' })
  nom: string;

  @IsString()
  @IsNotEmpty({ message: 'this status must be define' })
  status: string;
}
