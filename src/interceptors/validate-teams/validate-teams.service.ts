import { DataSource, Repository } from "typeorm";
import { Team } from "../../teams/entity/team.entity";

export class ValidateTeamsService { 

    constructor(
       private dataSource: DataSource
    ){
        
    }


    async validate(groupId: string){
        const teamRepository = this.dataSource.getRepository(Team) 
         const isExist = await teamRepository.exists({
            where: {
                groupId
            }
        })

        if(!isExist) {
            throw new Error('Grupo não encontrado.')
            
        }

        return true;
    }

}