import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';
import Groupe from '../groupes/groupe.entity';

@Entity()
class Tarif extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ nullable: false, unique: true })
  public label: string;

  @Column({ nullable: false })
  public montant: number;

  @Column({ nullable: false })
  public duree: number;

  @ManyToOne(() => Groupe, (groupe: Groupe) => groupe.tarifs)
  public groupe: Groupe;
}

export default Tarif;
