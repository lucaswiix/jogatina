import { Entity, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm"

@Entity({
    name: 'teams'
})
export class Team {
    @Column({
        primary: true,
        unique: true
    })
    groupId: string

    @Column()
    name: string

    @Column({
        type: 'int'
    })
    totalPlayers: number

    @Column({
        type: 'timestamp without time zone'
    })
    occuredAt: Date

    @Column({
        type: Number
    })
    durationTime: number

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}