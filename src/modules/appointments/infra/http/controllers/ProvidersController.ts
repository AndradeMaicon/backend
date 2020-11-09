import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProvidersService from '@modules/appointments/services/ListProvidersService';

class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listProvides = container.resolve(ListProvidersService);

    const providers = await listProvides.execute({
      user_id,
    });

    return response.json(providers);
  }
}

export default ProvidersController;
