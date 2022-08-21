import { IsNotEmpty, IsString } from 'class-validator';

export default class categorieDto {
  @IsString()
  @IsNotEmpty({ message: 'this nom must be define' })
  nom: string;
}
