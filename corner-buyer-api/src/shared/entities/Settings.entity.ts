import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'settings',
  timestamps: true, // Incluye createdAt y updatedAt
})
export class Setting extends Model<Setting> {
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
  key: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  value: number;
}
