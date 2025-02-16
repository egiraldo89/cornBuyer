import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataBaseConfig } from './database/database.config';
import { Purchase } from './purchase/entities/purchase.entity';
import { PurchaseModule } from './purchase/purchase.module';
import { Setting } from './shared/entities/Settings.entity';
import { User } from './users/entities/user.entity';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot(dataBaseConfig),
    SequelizeModule.forFeature([
      User,
      Purchase,
      Setting
    ]),
    PurchaseModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
