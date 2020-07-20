import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider'
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService'

describe('CreateUser',()=>{
    it('should be able to create a new user', async ()=>{
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeMailProvider = new FakeMailProvider();

        const sendMail =  jest.spyOn(fakeMailProvider,'sendMail');

        const sendForgotPasswordEmail = new SendForgotPasswordEmailService(fakeUsersRepository,fakeMailProvider);

        await fakeUsersRepository.create({
            name: 'Jonh Doe',
            email:'jonhdoe@example.com',
            password:'123456'
        })



        await sendForgotPasswordEmail.execute({
            email:'jonhdoe@example.com'
        });

        expect(sendMail).toHaveBeenCalled();
    })
})
