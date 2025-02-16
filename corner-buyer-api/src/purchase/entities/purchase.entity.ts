import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';

@Table({
  tableName: 'purchases',
  timestamps: true,
})
export class Purchase extends Model<Purchase> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  lastDateRequest: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  numberOfPurchase: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
  })
  UserId: number;

  @BelongsTo(() => User)
  user: User;
}
