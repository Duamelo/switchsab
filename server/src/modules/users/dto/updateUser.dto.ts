import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  // @IsNotEmpty()
  readonly nom: string;

  // @IsNotEmpty()
  readonly prenoms: string;

  @IsNotEmpty()
  readonly pseudo: string;

  // @IsNotEmpty()
  readonly phone: string;

  // @IsNotEmpty()
  password: string;

  access_report: boolean;
}
export default UpdateUserDto;
