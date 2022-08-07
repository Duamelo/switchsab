import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class tarifDto {
    @IsString()
    @IsNotEmpty({message: "this label must be define"})
    label: string;

    @IsNumber()
    @IsNotEmpty({message: "this montant must be define"})
    montant: number;

    @IsNumber()
    @IsNotEmpty({message: "this duree must be define"})
    duree: number;
    
  }
  