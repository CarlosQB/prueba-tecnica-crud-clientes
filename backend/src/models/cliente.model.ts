import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db/database.js";

interface ClienteAttributes {
  id: number;
  nombre_completo: string;
  email: string;
  telefono?: string | null;
  empresa: string;
}

interface ClienteCreationAttributes
  extends Optional<ClienteAttributes, "id"> {}

export class Cliente
  extends Model<ClienteAttributes, ClienteCreationAttributes>
  implements ClienteAttributes
{
  declare id: number;
  declare nombre_completo: string;
  declare email: string;
  declare telefono?: string | null;
  declare empresa: string;
}

Cliente.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre_completo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    empresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "clientes",
    timestamps: true,
  }
);