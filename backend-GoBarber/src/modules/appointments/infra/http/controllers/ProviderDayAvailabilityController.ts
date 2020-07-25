/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderMontAvailabilityController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { provider_id } = request.params;
        const { day, year, month } = request.body;

        const listProvidersDayAvailability = container.resolve(
            ListProviderDayAvailabilityService,
        );

        const availability = await listProvidersDayAvailability.execute({
            provider_id,
            day,
            month,
            year,
        });
        return response.json(availability);
    }
}
