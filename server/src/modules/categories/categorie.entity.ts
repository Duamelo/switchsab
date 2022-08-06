import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Groupe from '../groupes/groupe.entity';

@Entity()
class Categorie {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({nullable: false})
    public nom: string;

    @Column({nullable: false})
    public tarif: number;

    @OneToMany(() => Groupe, (groupe: Groupe) => groupe.categorie)
    public groupes: Groupe[];
}

export default Categorie;