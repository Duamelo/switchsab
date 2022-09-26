import { IsNotEmpty, IsNumber } from 'class-validator';

export default class FreePostDto {
  @IsNumber()
  @IsNotEmpty({ message: 'this id_object must be defined' })
  id_object: number;
}
