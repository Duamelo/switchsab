import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Categorie from '../categories/categorie.entity';
import Poste from "../postes/poste.entity";
import Tarif from '../tarifs/tarif.entity';

@Entity()
class Groupe extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ nullable: false })
  public nom: string;

  @ManyToOne(() => Categorie, (categorie: Categorie) => categorie.groupes)
  public categorie: Categorie;

  @OneToMany(() => Poste, (poste: Poste) => poste.groupe)
  public postes: Poste[];

  @OneToMany(() => Tarif, (tarif: Tarif) => tarif.groupe)
  public tarifs: Tarif[];
}

export default Groupe;
