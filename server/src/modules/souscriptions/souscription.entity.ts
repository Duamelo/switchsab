import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Souscription extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ nullable: false })
  public clientId: number;

  @Column({ nullable: false })
  public groupeId: number;

  @Column({ nullable: false })
  public montant: number;

  @Column({ nullable: false })
  public duree: number;

  @Column({ nullable: false })
  public dureeRestante: number;
}

export default Souscription;
