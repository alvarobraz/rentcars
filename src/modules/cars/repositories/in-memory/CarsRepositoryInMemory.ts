import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Cars';

import { ICarsRepository } from '../ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
  private cars: Car[] = [];

  async create({
    name,
    description,
    brand,
    category_id,
    daily_rate,
    fine_amount,
    license_plate,
    id,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      brand,
      category_id,
      daily_rate,
      fine_amount,
      license_plate,
      id,
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = this.cars.find(car => car.license_plate === license_plate);

    return car;
  }

  async findAvaliable(
    name?: string,
    brand?: string,
    category_id?: string,
  ): Promise<Car[]> {
    let availableCars = this.cars.filter(car => car.available === true);
    if (name || brand || category_id) {
      availableCars = availableCars.filter(
        car =>
          car.name === name ||
          car.brand === brand ||
          car.category_id === category_id,
      );
    }

    return availableCars;
  }

  async findById(id: string): Promise<Car> {
    const car = this.cars.find(car => car.id === id);

    return car;
  }

  async updateAvailable(id: string, available: boolean): Promise<void> {
    const carIndex = this.cars.findIndex(car => car.id === id);

    this.cars[carIndex].available = available;
  }
}

export { CarsRepositoryInMemory };
