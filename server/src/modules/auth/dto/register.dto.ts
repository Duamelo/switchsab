import { IsString, IsNotEmpty, MinLength, Matches } from 'class-validator';

export default class RegisterDto {
  @IsString()
  pseudo: string;

  @IsString()
  @IsNotEmpty()
  nom: string;

  prenoms: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\+[1-9]\d{1,14}$/)
  phone: string;
}
