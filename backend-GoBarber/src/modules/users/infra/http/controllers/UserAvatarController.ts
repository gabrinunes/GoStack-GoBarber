/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import UpdateAvatarUserService from '@modules/users/services/UpdateUserAvatarService';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

export default class UserAvatarController {
    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const updateUserAvatar = container.resolve(UpdateAvatarUserService);

        const user = await updateUserAvatar.execute({
            user_id: request.user.id,
            avatarFilename: request.file.filename,
        });
        return response.json(classToClass(user));
    }
}
