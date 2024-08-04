import { Table, Model, Column, DataType, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo } from "sequelize-typescript";
import { Product } from "./product.model";
import { User } from "./user.model";

@Table({
    tableName: "Sale",
    timestamps: true
})
export class Sale extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!:number;

    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER
    })
    productID!:number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER
    })
    userID!:number;

    @Column({
        type: DataType.STRING
    })
    description?:string;

    @BelongsTo(() => Product)
    products!: Product;
   
    @BelongsTo(() => User)
    users!: User;
}