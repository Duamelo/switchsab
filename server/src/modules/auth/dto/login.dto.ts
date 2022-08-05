import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export default class LogInDto {
  @IsString()
  pseudo: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password: string;
}
