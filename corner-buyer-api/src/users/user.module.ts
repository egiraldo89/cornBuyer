// user.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';


@Module({
  imports: [SequelizeModule.forFeature([User])],  // Registra el modelo User
  exports: [SequelizeModule],  // Exporta el SequelizeModule para compartir el modelo
})
export class UserModule {}
