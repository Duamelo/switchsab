import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class LogInDto {
  @IsString()
  pseudo: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password: string;
}

export default LogInDto;