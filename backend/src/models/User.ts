import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

class User extends Model {}

export const init = async () => {
  User.init(
    {
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      birthday: DataTypes.DATE,
      email: { type: DataTypes.STRING, unique: true },
      login: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      balance: DataTypes.NUMBER,
    },
    { sequelize, modelName: "user" }
  );
  await User.sync({ force: true });
  console.log("The table for the User model was just (re)created!");
};

export default User;
