import { DataSource } from "typeorm";
import { Team } from "./entity/team.entity";

export class TeamsService { 

    constructor(
        private dataSource: DataSource
    ){}

    async create(payload: {
        groupId: string, 
        name: string,
        totalPlayers: number,
    }){
        const repository = this.dataSource.getRepository(Team)
        return repository.save(repository.create({
            ...payload,
            occuredAt: new Date('2024-08-08T20:25:00'),
            durationTime: 120
        }))
    }

}