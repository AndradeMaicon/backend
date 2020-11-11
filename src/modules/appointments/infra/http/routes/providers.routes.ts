import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityControlle from '../controllers/ProviderMonthAvailabilityControlle';
import ProviderDayAvailabilityControlle from '../controllers/ProviderDayAvailabilityControlle';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityControlle = new ProviderMonthAvailabilityControlle();
const providerDayAvailabilityControlle = new ProviderDayAvailabilityControlle();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);
providersRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityControlle.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityControlle.index,
);

export default providersRouter;
