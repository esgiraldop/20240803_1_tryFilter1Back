import {
    Table,
    Model,
    PrimaryKey,
    Column,
    DataType,
    AutoIncrement,
    NotNull,
    AllowNull,
} from 'sequelize-typescript'

@Table({
    tableName: "users",
    timestamps: true,
})
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING
    })
    name!: string;

    @Column({
        type: DataType.STRING
    })
    email!: string;

    @Column({
        type: DataType.STRING
    })
    password!: string;
};
