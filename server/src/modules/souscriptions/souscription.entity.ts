import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
class Poste {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({nullable: false})
    public clientId: number;

    @Column({nullable: false})
    public categorieId: number;

    @Column({nullable: false})
    public montant: number;

    @Column({nullable: false})
    public duree: number;

    @Column({nullable: false})
    public dureeRestante: number;

    @Column({nullable: false})
    public dureeAncienne: number;
}

export default Poste;