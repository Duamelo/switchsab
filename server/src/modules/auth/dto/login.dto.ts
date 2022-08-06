import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export default class LogInDto {
  @IsString()
  @IsNotEmpty({message: "this pseudo must  be define"})
  pseudo: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password: string;
}
