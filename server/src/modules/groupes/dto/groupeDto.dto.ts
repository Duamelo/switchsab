import { IsNotEmpty, IsString } from "class-validator";

export default class groupeDto {
    @IsString()
    @IsNotEmpty({message: "this nom must be define"})
    nom: string;
    
  }
  