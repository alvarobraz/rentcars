import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, driver_license, password, avatar, id } = request.body;

    console.log('request.body');
    console.log(request.body);

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      email,
      driver_license,
      password,
      avatar,
      id,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
