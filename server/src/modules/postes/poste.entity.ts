import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';
import Groupe from '../groupes/groupe.entity';

@Entity()
class Poste extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ nullable: false, unique: true })
  public nom: string;

  @Column({ nullable: true })
  public object_id: number;

  @Column({ nullable: true, default: 0 })
  public hour: number;

  @Column({ nullable: true, default: 0 })
  public minute: number;

  @Column({ nullable: true, default: 0 })
  public second: number;

  @Column({ nullable: true, default: 0 })
  public gamer: number;

  @Column({ nullable: false })
  public status: string;

  @ManyToOne(() => Groupe, (groupe: Groupe) => groupe.postes)
  public groupe: Groupe;
}
export default Poste;
