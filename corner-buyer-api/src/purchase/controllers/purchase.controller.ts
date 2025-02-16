import { Body, Controller, Post } from '@nestjs/common';
import { Response } from 'src/shared/dtos/Response';
import { PurchaseDto } from '../dto/purchase.dto';
import { PurchaseService } from '../services/purchase.service';

@Controller('purchase')
export class PurchaseController {
    constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  async create(@Body() createPurchaseDto: PurchaseDto): Promise<Response<void | string>> {
      return await this.purchaseService.create(createPurchaseDto);
  }
}
