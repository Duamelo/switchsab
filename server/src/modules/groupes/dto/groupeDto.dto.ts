import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class groupeDto {
  @IsString()
  @IsNotEmpty({ message: 'this nom must be define' })
  nom: string;

  @IsNumber()
  @IsNotEmpty({ message: 'this id must be define' })
  categorieId: number;
}
