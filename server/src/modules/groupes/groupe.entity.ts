import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Categorie from '../categories/categorie.entity';

@Entity()
class Groupe {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({nullable: false})
    public nom: string;

    @ManyToOne(() => Categorie, (categorie: Categorie) => categorie.groupes)
    public categorie: Categorie;
}

export default Groupe;