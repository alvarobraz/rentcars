import { inject, injectable } from 'tsyringe';

import { Car } from '@modules/cars/infra/typeorm/entities/Cars';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationRepository';
import { AppError } from '@shared/errors/AppErros';

// interface IRequest {
//   car_id: string;
//   specifications_id: string[];
// }

@injectable()
class CreateCarSpecificationUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,

    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationRepository,
  ) {}

  async execute({ car_id, specifications_id }): Promise<Car> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError('Car does not exists.');
    }

    const specifications = await this.specificationsRepository.findByIds(
      specifications_id,
    );

    carExists.specifications = specifications;

    await this.carsRepository.create(carExists);

    return carExists;
  }
}

export { CreateCarSpecificationUseCase };