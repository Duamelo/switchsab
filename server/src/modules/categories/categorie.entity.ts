import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Groupe from '../groupes/groupe.entity';
import User from '../users/user.entity';

@Entity()
class Categorie {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ nullable: false })
  public nom: string;

  @OneToMany(() => Groupe, (groupe: Groupe) => groupe.categorie)
  public groupes: Groupe[];

  @ManyToMany(() => User, (user: User) => user.categories)
  public users: User[];
}

export default Categorie;
