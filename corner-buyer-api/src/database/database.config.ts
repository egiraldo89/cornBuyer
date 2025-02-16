import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const dataBaseConfig: SequelizeModuleOptions = {
    "username": "postgres",
    "password": "65452589",
    "database": "corn_store",
    "host": "localhost",
    "dialect": "postgres",
    autoLoadModels: true,
    synchronize: true
}