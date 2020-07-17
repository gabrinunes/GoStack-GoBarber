import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'
import AuthtenticateUserService from './AuthenticateUserService'
import CreateUserService from './CreateUserService'

describe('CreateUser',()=>{
    it('should be able to create a new user', async ()=>{
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeHashProvider = new FakeHashProvider();

        const createUser = new CreateUserService(fakeUsersRepository,fakeHashProvider)
        const authtenticateUser = new AuthtenticateUserService(fakeUsersRepository,fakeHashProvider);

        const user = await createUser.execute({
            name:'John Doe',
            email:'johndoe@gmail.com',
            password:'123456',
        });

        const response = await authtenticateUser.execute({
            email:'johndoe@gmail.com',
            password:'123456'
        });
          expect(response).toHaveProperty('token');
          expect(response.user).toEqual(user);

    })

    it('should not be able to authenticate with non existing user', async ()=>{
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeHashProvider = new FakeHashProvider();

        const createUser = new CreateUserService(fakeUsersRepository,fakeHashProvider)
        const authtenticateUser = new AuthtenticateUserService(fakeUsersRepository,fakeHashProvider);

          expect(authtenticateUser.execute({
            email:'johndoe@gmail.com',
            password:'123456'
          })).rejects.toBeInstanceOf(AppError);

    })

    it('should be able to authenticate with wrong password', async ()=>{
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeHashProvider = new FakeHashProvider();

        const createUser = new CreateUserService(fakeUsersRepository,fakeHashProvider)
        const authtenticateUser = new AuthtenticateUserService(fakeUsersRepository,fakeHashProvider);

         await createUser.execute({
            name:'John Doe',
            email:'johndoe@gmail.com',
            password:'123456',
        });

          expect(authtenticateUser.execute({
            email:'johndoe@gmail.com',
            password:'wrong-password',
          })).rejects.toBeInstanceOf(AppError);

    })

})
