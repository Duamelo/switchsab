import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class posteDto {
    @IsNumber()
    @IsNotEmpty({message: "this client must be define"})
    clientId: number;

    @IsNumber()
    @IsNotEmpty({message: "this categorie must be define"})
    categorieId: number;
    
    @IsNumber()
    @IsNotEmpty({message: "this duree must be define"})
    duree: number;
  }
  