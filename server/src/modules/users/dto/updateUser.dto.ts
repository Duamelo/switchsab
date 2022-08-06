import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  readonly nom: string;

  @IsNotEmpty()
  readonly prenoms: string;

  @IsNotEmpty()
  readonly pseudo: string;

  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  password: string;
}

export default UpdateUserDto;
