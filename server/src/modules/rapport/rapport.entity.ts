import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
} from 'typeorm';

@Entity('rapport')
class Rapport extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @CreateDateColumn()
  public created_at: Date;

  @CreateDateColumn()
  public hour: Date;

  @Column({ nullable: false })
  public client: string;

  @Column({ nullable: false })
  public amount: number;

  @Column({ nullable: false })
  public duration: number;

  @Column({ nullable: false })
  public category: string;

  @Column({ nullable: false })
  public cashier: string;
}
export default Rapport;
