import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Groupe from "../groupes/groupe.entity";

@Entity()
class Poste {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({nullable: false})
    public nom: string;

    @Column({nullable: false})
    public status: number;

    @ManyToOne(() => Groupe, (groupe: Groupe) => groupe.postes)
    public groupe: Groupe;

}

export default Poste;