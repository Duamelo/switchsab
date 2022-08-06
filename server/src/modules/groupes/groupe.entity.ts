import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Categorie from '../categories/categorie.entity';
import Poste from "../postes/poste.entity";

@Entity()
class Groupe {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ nullable: false })
  public nom: string;

    @ManyToOne(() => Categorie, (categorie: Categorie) => categorie.groupes)
    public categorie: Categorie;

    @OneToMany(() => Poste, (poste: Poste) => poste.groupe)
    public postes: Poste[];
}

export default Groupe;
