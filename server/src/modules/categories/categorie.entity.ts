import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Categorie {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({nullable: false})
    public nom: string;

    @Column({nullable: false})
    public tarif: number;
}

export default Categorie;