import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
// import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

// import { categoriesRoutes } from './categories.routes';
// import { specificationsRoutes } from './specifications.routes';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
  const all = specificationsRepository.list();

  return response.json(all);
});

// router.use('/categories', categoriesRoutes);
// router.use('/specifications', specificationsRoutes);

export { specificationsRoutes };
