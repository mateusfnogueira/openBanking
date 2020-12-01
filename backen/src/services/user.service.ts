import User from "../models/User";

type incomingData = {
  id?: number;
  name: string;
  lastName: string;
  birthday: Date;
  email: string;
  login: string;
  password: string;
  balance: number;
};
class UserService {
  async findAll() {
    const users = await User.findAll();
    return users;
  }

  async find(id: string) {
    const user = await User.findOne({
      where: { id },
    });

    return user;
  }

  async create(data: incomingData) {
    const user = User.build(data);
    await user.save();
    return user;
  }

  async update(data: incomingData) {
    const user = await User.update(data, { where: { id: data.id } });
    return user;
  }

  async save(data: incomingData) {
    if (data.id) {
      return await this.update(data);
    }

    return await this.create(data);
  }

  async destroy(id: number) {
    await User.destroy({
      where: {
        id,
      },
    });
  }
}

export default new UserService();
