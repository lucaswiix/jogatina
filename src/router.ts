import { HealthCheckService } from "./healthcheck/healthcheck.service"

export const router = {
    '!ping': (msg:string) => { 
            const service = new HealthCheckService()
            return service.pong()            
        }
    }