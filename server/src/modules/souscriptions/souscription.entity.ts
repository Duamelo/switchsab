import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Souscription {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ nullable: false })
  public clientId: number;

  @Column({ nullable: false })
  public categorieId: number;

  @Column({ nullable: false })
  public montant: number;

  @Column({ nullable: false })
  public duree: number;

  @Column({ nullable: false })
  public dureeRestante: number;
}

export default Souscription;
