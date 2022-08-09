import {
  IsString,
  IsNotEmpty,
  MinLength,
  Matches,
  IsArray,
} from 'class-validator';

export default class RegisterDto {
  @IsString()
  @IsNotEmpty({ message: 'this pseudo must be define' })
  pseudo: string;

  @IsString()
  @IsNotEmpty({ message: 'this nom must be define' })
  nom: string;

  @IsString()
  @IsNotEmpty({ message: 'this prenom must be define' })
  prenoms: string;

  @IsString()
  @IsNotEmpty({ message: 'this type must be define' })
  type: string;

  @IsArray()
  @IsNotEmpty({ message: 'this permission must be define' })
  permissions: string;

  @IsString()
  @IsNotEmpty({ message: 'this password must be define' })
  @MinLength(7)
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'this phone must be define' })
  @Matches(/^\+[1-9]\d{1,14}$/)
  phone: string;
}
