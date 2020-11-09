import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IFinderProviderDTO from '../dtos/IFinderProviderDTO';

export default interface IUserRopository {
  findAllProviders(data: IFinderProviderDTO): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(User: User): Promise<User>;
}
