import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { Purchase } from 'src/purchase/entities/purchase.entity';

@Table({
  tableName: 'users',
  timestamps: true, // Habilita createdAt y updatedAt
})
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  document: string;

  @HasOne(() => Purchase)  // Relación uno a uno
  purchase: Purchase;
}
