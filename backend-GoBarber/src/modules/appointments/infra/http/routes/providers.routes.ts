/* eslint-disable import/no-unresolved */
import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilyController = new ProviderMonthAvailabilityController();
const providerDayAvailabilyController = new ProviderDayAvailabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);

providersRouter.get(
    '/:provider_id/month-availability',
    providerMonthAvailabilyController.index,
);
providersRouter.get(
    '/:provider_id/day-availability',
    providerDayAvailabilyController.index,
);

export default providersRouter;
