/* eslint-disable import/no-unresolved */
import { uuid } from 'uuidv4';

import IUserTokensRepository from '@modules/users/repositories/IUsersTokenRepository';

import UserToken from '../../infra/typeorm/entities/UserToken';

class FakeUserTokenRepository implements IUserTokensRepository {
    private usersTokens: UserToken[] = [];

    public async generate(user_id: string): Promise<UserToken> {
        const userToken = new UserToken();

        Object.assign(userToken, {
            id: uuid(),
            token: uuid(),
            user_id,
        });

        this.usersTokens.push(userToken);

        return userToken;
    }

    public async findyByToken(token: string): Promise<UserToken | undefined> {
        const userToken = this.usersTokens.find(
            findToken => findToken.token === token,
        );
        return userToken;
    }
}
export default FakeUserTokenRepository;
