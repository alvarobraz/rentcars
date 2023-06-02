import { ICreateCarDTO } from 'modules/cars/dtos/ICreateCarDTO';

import { Car } from '../infra/typeorm/entities/Cars';

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;

  findByLicensePlate(license_plate: string);

  findAvaliable(
    brand?: string,
    category_id?: string,
    name?: string,
  ): Promise<Car[]>;

  findById(id: string): Promise<Car>;
  updateAvailable(id: string, available: boolean): Promise<void>;
}

export { ICarsRepository };
