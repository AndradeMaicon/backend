import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

class UserAvatarController {
  public async upload(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const avatar = request.file.filename;

    const updateUserAvatarService = container.resolve(UpdateUserAvatarService);

    await updateUserAvatarService.execute({
      user_id,
      avatarFilename: avatar,
    });

    return response.status(204).json();
  }
}

export default UserAvatarController;
