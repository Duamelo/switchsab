import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column()
  public nom: string;

  @Column()
  public prenoms: string;

  @Column({unique : true})
  public pseudo: string;

  @Column()
  public phone: string;
 
  @Column()
  public password: string;
}
 
export default User;
