import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Permission from './permissions/permission.type';
import Categorie from '../categories/categorie.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ nullable: true })
  public nom: string;

  @Column({ nullable: true })
  public prenoms: string;

  @Column({ unique: true })
  public pseudo: string;

  @Column({ nullable: false })
  public type: string;

  @Column({ nullable: false, default: false })
  public access_report: boolean;

  @Column({ nullable: true })
  public phone: string;

  @Column({
    type: 'enum',
    enum: Permission,
    array: true,
    default: [],
  })
  public permissions: Permission[];

  @Column({ nullable: false })
  public password: string;

  @Column({ nullable: true })
  public currentHashedRefreshToken: string;

  @ManyToMany(() => Categorie, (categorie: Categorie) => categorie.users)
  @JoinTable()
  public categories: Categorie[];
}

export default User;
