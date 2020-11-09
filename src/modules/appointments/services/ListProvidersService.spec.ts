import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProvidersService: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProvidersService = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list all users except the user who is listing ', async () => {
    const loggerUser = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const user01 = await fakeUsersRepository.create({
      name: 'Mary Doe',
      email: 'marydoe@example.com',
      password: '123456',
    });

    const user02 = await fakeUsersRepository.create({
      name: 'Paul Doe',
      email: 'pauldoe@example.com',
      password: '123456',
    });

    const user03 = await fakeUsersRepository.create({
      name: 'Rose Doe',
      email: 'rosedoe@example.com',
      password: '123456',
    });

    const providers = await listProvidersService.execute({
      user_id: loggerUser.id,
    });

    expect(providers).toEqual([user01, user02, user03]);
  });
});
