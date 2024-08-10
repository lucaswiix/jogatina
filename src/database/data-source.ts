import "reflect-metadata"
import { DataSource } from "typeorm"
import { SnakeNamingStrategy } from "typeorm-naming-strategies"

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT
      ? parseInt(process.env.DATABASE_PORT, 10)
      : 5432,
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'secret',
    database: process.env.DATABASE_NAME || 'api',
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
    namingStrategy: new SnakeNamingStrategy(),
    logging: false,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],    
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    subscribers: [],    
})
