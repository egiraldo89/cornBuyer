import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { GENERAL_RESPONSES_MESSAGES } from 'src/shared/constants/generalConstants';
import { GeneralResponse } from 'src/shared/dtos/generalResponse';
import { Response } from 'src/shared/dtos/Response';
import { Setting } from 'src/shared/entities/Settings.entity';
import { User } from 'src/users/entities/user.entity';
import { PurchaseDto } from '../dto/purchase.dto';
import { Purchase } from '../entities/purchase.entity';

@Injectable()
export class PurchaseService {

    constructor(
        @InjectModel(User)
        private userRepository: typeof User,
        @InjectModel(Purchase)
        private purchaseRepository: typeof Purchase,
        @InjectModel(Setting)
        private settingRepository: typeof Setting,
        private readonly sequelize: Sequelize
    ) { }

    async create(createPurchaseDto: PurchaseDto): Promise<Response<void | string>> {
        try {

            const user = await this.verifyIfUserExist(createPurchaseDto.document)

            if (!user) throw Error

            console.log('user ', user);

            const rateLimiter = await this.settingRepository.findOne({
                where: { key: 'rateLimiter' },
                attributes: ['value']
            })

            const currentDate = Date.now()
            console.log('currentDate', currentDate);
            console.log('rateLimiter.dataValues.value', rateLimiter.dataValues.value);
            console.log('user.lastDateRequest', user.lastDateRequest);

            if (currentDate - rateLimiter.dataValues.value < user.lastDateRequest) {
                return GeneralResponse.TOO_MANY_REQUESTS()
            }
            console.log('user.numberOfPurchases++', user.numberOfPurchases + 1);

            await Purchase.update(
                {
                    lastDateRequest: currentDate,
                    numberOfPurchase: user.numberOfPurchases + 1
                }, // Datos a actualizar
                { where: { UserId: user.userId } } // Condición de búsqueda
            );

            return GeneralResponse.SUCCESFULL_RESPONSE('Tu compra fue exitosa', {
                lastDateRequest: currentDate,
                numberOfPurchase: user.numberOfPurchases + 1
            })

        } catch (error) {
            console.log(error);

            return GeneralResponse.BAD_REQUEST(
                GENERAL_RESPONSES_MESSAGES.BAD_REQUEST
            );
        }
    }

    async verifyIfUserExist(document: string) {
        let transaction;
        try {
            let userResponse = await this.userRepository.findOne({
                where: {
                    document: document
                },
                include: [
                    {
                        model: Purchase,
                        attributes: ['id', 'lastDateRequest', 'numberOfPurchase']
                    }
                ],
            });

            if (userResponse) {
                console.log('entro', userResponse.dataValues);

                return {
                    userId: userResponse.dataValues.id,
                    lastDateRequest: userResponse.dataValues.purchase.lastDateRequest,
                    numberOfPurchases: userResponse.dataValues.purchase.numberOfPurchase
                }
            }


            transaction = await this.sequelize.transaction();
            const newUser = await this.userRepository.create({
                document: document
            }, { transaction })

            const currentDate = Date.now()
            await this.purchaseRepository.create({
                UserId: newUser.id,
                lastDateRequest: currentDate,
                numberOfPurchase: 0,
            }, { transaction });

            await transaction.commit();
            return {
                userId: newUser.id,
                lastDateRequest: currentDate,
                numberOfPurchases: 0
            }


        } catch (error) {
            console.log(error);
            await transaction.rollback();
            return undefined
        }
    }
}
