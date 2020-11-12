import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

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
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerMonthAvailabilityControlle.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerDayAvailabilityControlle.index,
);

export default providersRouter;
