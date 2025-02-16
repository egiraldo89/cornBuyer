import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Setting } from 'src/shared/entities/Settings.entity';
import { UserModule } from 'src/users/user.module';
import { PurchaseController } from './controllers/purchase.controller';
import { Purchase } from './entities/purchase.entity';
import { PurchaseService } from './services/purchase.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Purchase,
      Setting
    ]),
    forwardRef(() => UserModule)
  ],
  providers: [PurchaseService],
  controllers: [PurchaseController]
})
export class PurchaseModule { }
