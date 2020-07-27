/* eslint-disable import/no-unresolved */
import { ObjectID } from 'mongodb';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

import Notification from '../../infra/typeorm/schemas/Notification';

class NotificationsRepository implements INotificationsRepository {
    private notifications: Notification[] = [];

    public async create({
        content,
        recipient_id,
    }: ICreateNotificationDTO): Promise<Notification> {
        const notificiation = new Notification();

        Object.assign(notificiation, {
            id: new ObjectID(),
            content,
            recipient_id,
        });

        this.notifications.push(notificiation);

        return notificiation;
    }
}
export default NotificationsRepository;
