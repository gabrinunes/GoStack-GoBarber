/* eslint-disable import/no-unresolved */
import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfileService: ShowProfileService;

describe('CreateUser', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();

        showProfileService = new ShowProfileService(fakeUsersRepository);
    });
    it('should be able show the profile', async () => {
        const user = await fakeUsersRepository.create({
            name: 'Jonh Doe',
            email: 'jonhdoe@gmail.com',
            password: '123456',
        });

        const profile = await showProfileService.execute({
            user_id: user.id,
        });
        expect(profile.name).toBe('Jonh Doe');
        expect(profile.email).toBe('jonhdoe@gmail.com');
    });

    it('should be able show the profile from non-existing user', async () => {
        expect(
            showProfileService.execute({
                user_id: 'user-no-exists',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
