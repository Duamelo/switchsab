import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class posteCreateDto {
  @IsString()
  @IsNotEmpty({ message: 'this nom must be define' })
  nom: string;

  @IsBoolean()
  @IsNotEmpty({ message: 'this status must be define' })
  status: boolean;

  @IsNumber()
  object_id: number;

  @IsNumber()
  @IsNotEmpty({ message: 'this id must be define' })
  groupeId: number;
}
