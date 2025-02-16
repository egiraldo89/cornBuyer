import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Response } from 'src/shared/dtos/Response';
import { GeneralResponse } from './shared/dtos/generalResponse';
import { Setting } from './shared/entities/Settings.entity';


@Injectable()
export class AppService {
  constructor(
    @InjectModel(Setting)
    private settingRepository: typeof Setting) { }

  async getRateLimit(): Promise<Response<void | string>> {
    try {
      const rateLimiter = await this.settingRepository.findOne({
        where: {
          key: 'rateLimiter'
        },
        attributes:['value']
      })
      console.log('rateLimiter', rateLimiter);
      

      if (rateLimiter) {
        return GeneralResponse.SUCCESFULL_RESPONSE('Se encontro la tasa limite',rateLimiter.dataValues.value)
      }

      return GeneralResponse.NOT_FOUND('No se encontro la tasa limite')

    } catch (error) {
      console.log(error);
      
      return GeneralResponse.BAD_REQUEST()
    }
  }
}
