import { Specifications } from '@modules/cars/infra/typeorm/entities/Specification';

import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from '../ISpecificationRepository';

class SpecificationsRepositoryInMemory implements ISpecificationRepository {
  specifications: Specifications[] = [];

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specifications> {
    const specification = new Specifications();

    Object.assign(specification, {
      name,
      description,
    });

    return specification;
  }

  async findByName(name: string): Promise<Specifications> {
    return this.specifications.find(
      specification => specification.name === name,
    );
  }

  async findByIds(ids: string[]): Promise<Specifications[]> {
    const specifications = this.specifications.filter(specification =>
      ids.includes(specification.id),
    );
    return specifications;
  }
}

export { SpecificationsRepositoryInMemory };
