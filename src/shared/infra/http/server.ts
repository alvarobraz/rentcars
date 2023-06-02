import { app } from './app';

const url = 'http://localhost:';
const PORT = process.env.PORT || 3333;

app.listen(3333, () => {
  console.log(
    `Server is running on port ${PORT}\nGet access here: ${url}${PORT}`,
  );
});
// import 'reflect-metadata';
// import express, { NextFunction, Request, Response } from 'express';
// import 'express-async-errors';
// import swaggerUi from 'swagger-ui-express';

// import '@shared/container';
// import { AppError } from '@shared/errors/AppErros';
// import createConnection from '@shared/infra/typeorm/';

// import swaggerFile from '../../../swagger.json';
// import { router } from './routes';

// createConnection();
// const app = express();

// app.use(express.json());

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// app.use(router);

// app.use(
//   (err: Error, request: Request, response: Response, next: NextFunction) => {
//     if (err instanceof AppError) {
//       return response.status(err.statusCode).json({
//         message: err.message,
//       });
//     }
//     console.log('err');
//     console.log(err);
//     return response.status(500).json({
//       status: 'error',
//       message: `Interna server error = ${err.message}`,
//     });
//   },
// );

// app.listen(3333, () => console.log('Server running on port 3333'));
