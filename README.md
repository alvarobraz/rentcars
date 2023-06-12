
<p align="center">
  Aplicação em NodeJS/TypeScript - Aluguel de carros 🚀
  <br>
  <br>

  <img alt="Language count" src="https://img.shields.io/github/repo-size/alvarobraz/rentcars"/>

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>

  <a href="https://www.linkedin.com/in/alvarobraz/">
    <img alt="Made by alvarobraz" src="https://img.shields.io/badge/made%20by-alvarobraz-%237519C1">
  </a>

  <a href="https://github.com/alvarobraz/rentcars/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alvarobraz/rentcars">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/alvarobraz/rentcars">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#estrutura">Estrurura</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a>
</p>

<br>

## :dart: Sobre ##

Aplicação em NodeJS/TypeScript de aluguel de carros, permite cadastro de usuários e administradores, algumas funcionalidaes são aplicar multa, não deixar alugar um carro indisponível, meddlwares de autenticação, avatar no s3, intância no SC2, TDD, Swagger, reatlimiter e sentry.

## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [Node.js](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org/)
- [@sentry/node](https://sentry.io/welcome/)
- [aws-sdk](https://aws.amazon.com/pt/sdk-for-javascript/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [csv-parse](https://www.npmjs.com/package/csv-parse)
- [dayjs](https://day.js.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://expressjs.com/pt-br/)
- [handlebars](https://handlebarsjs.com/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mime](https://www.npmjs.com/package/mime/v/2.5.2)
- [multer](https://www.npmjs.com/package/multer)
- [nodemailer](https://nodemailer.com/about/)
- [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible)
- [redis](https://redis.io/)
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
- [supertest](https://www.npmjs.com/package/supertest)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [tsyringe](https://github.com/microsoft/tsyringe)
- [typeorm](https://typeorm.io/)
- [jest](https://jestjs.io/pt-BR/)
- [babel](https://babeljs.io/)



## Estrutura ##
```
├── babel.config.js
├── comandos_docker.txt
├── docker-compose.yml
├── Dockerfile
├── jest.config.ts
├── ormconfig.example.json
├── ormconfig.json
├── package.json
├── prettier.config.js
├── README.md
├── src
│   ├── config
│   │   ├── auth.ts
│   │   └── upload.ts
│   ├── modules
│   │   ├── accounts
│   │   │   ├── dtos
│   │   │   │   ├── ICreateUserDTO.ts
│   │   │   │   ├── ICreateUserTokenDTO.ts
│   │   │   │   └── IUserResponseDTO.ts
│   │   │   ├── infra
│   │   │   │   └── typeorm
│   │   │   │       ├── entities
│   │   │   │       │   ├── UserToken.ts
│   │   │   │       │   └── User.ts
│   │   │   │       └── repositories
│   │   │   │           ├── UsersRepository.ts
│   │   │   │           └── UsersTokensRepository.ts
│   │   │   ├── mapper
│   │   │   │   └── UserMap.ts
│   │   │   ├── repositories
│   │   │   │   ├── in-memory
│   │   │   │   │   ├── UsersRepositoryInMemory.ts
│   │   │   │   │   └── UsersTokensRepositoryInMemory.ts
│   │   │   │   ├── IUsersRepository.ts
│   │   │   │   └── IUsersTokensRepository.ts
│   │   │   ├── useCases
│   │   │   │   ├── authenticateUser
│   │   │   │   │   ├── AuthenticateUserController.ts
│   │   │   │   │   ├── AuthenticateUserUseCase.spec.ts
│   │   │   │   │   └── AuthenticateUserUseCase.ts
│   │   │   │   ├── createUser
│   │   │   │   │   ├── CreateUserController.ts
│   │   │   │   │   └── CreateUserUseCase.ts
│   │   │   │   ├── profileUserUseCase
│   │   │   │   │   ├── ProfileUserController.ts
│   │   │   │   │   └── ProfileUserUseCase.ts
│   │   │   │   ├── refreshToken
│   │   │   │   │   ├── RefreshTokenController.ts
│   │   │   │   │   └── RefreshTokenUseCase.ts
│   │   │   │   ├── resetPasswordUser
│   │   │   │   │   ├── ResetPasswordUserController.ts
│   │   │   │   │   └── ResetPasswordUserUseCase.ts
│   │   │   │   ├── sendForgotPasswordMail
│   │   │   │   │   ├── SendForgotPasswordMailController.ts
│   │   │   │   │   ├── SendForgotPasswordMailUseCase.spec.ts
│   │   │   │   │   └── SendForgotPasswordMailUseCase.ts
│   │   │   │   └── updateUserAvatar
│   │   │   │       ├── UpdateUserAvatarController.ts
│   │   │   │       └── UpdateUserAvatarUseCase.ts
│   │   │   └── views
│   │   │       └── emails
│   │   │           └── forgotPassword.hbs
│   │   ├── cars
│   │   │   ├── dtos
│   │   │   │   └── ICreateCarDTO.ts
│   │   │   ├── infra
│   │   │   │   └── typeorm
│   │   │   │       ├── entities
│   │   │   │       │   ├── CarImage.ts
│   │   │   │       │   ├── Cars.ts
│   │   │   │       │   ├── Category.ts
│   │   │   │       │   └── Specification.ts
│   │   │   │       └── repositories
│   │   │   │           ├── CarsImagesRepository.ts
│   │   │   │           ├── CarsRepository.ts
│   │   │   │           ├── CategoriesRepository.ts
│   │   │   │           └── SpecificationRepository.ts
│   │   │   ├── repositories
│   │   │   │   ├── ICarsImagesRepository.ts
│   │   │   │   ├── ICarsRepository.ts
│   │   │   │   ├── ICategoriesRepository.ts
│   │   │   │   ├── in-memory
│   │   │   │   │   ├── CarsRepositoryInMemory.ts
│   │   │   │   │   ├── CategoriesRepositoryInMemory.ts
│   │   │   │   │   └── SpecificationsRepositoryInMemory.ts
│   │   │   │   └── ISpecificationRepository.ts
│   │   │   └── useCases
│   │   │       ├── createCar
│   │   │       │   ├── CreateCarController.ts
│   │   │       │   ├── CreateCarUseCase.spec.ts
│   │   │       │   └── CreateCarUseCase.ts
│   │   │       ├── CreateCarSpecification
│   │   │       │   ├── CreateCarSpecificationController.ts
│   │   │       │   ├── CreateCarSpecificationUseCase.ts
│   │   │       │   └── CreateCarSpecifictionUseCase.spec.ts
│   │   │       ├── createCategory
│   │   │       │   ├── CreateCategoryController.spec.ts
│   │   │       │   ├── CreateCategoryController.ts
│   │   │       │   ├── CreateCategoryUseCase.spec.ts
│   │   │       │   └── CreateCategoryUseCase.ts
│   │   │       ├── createSpecification
│   │   │       │   ├── CreateSpecificationController.ts
│   │   │       │   └── CreateSpecificationUseCase.ts
│   │   │       ├── importCategory
│   │   │       │   ├── ImportCategoryController.ts
│   │   │       │   └── ImportCategoryUseCase.ts
│   │   │       ├── listCars
│   │   │       │   ├── ListAvailableCarsController.ts
│   │   │       │   ├── ListAvailableCarsUseCase.spec.ts
│   │   │       │   └── ListAvailableCarsUseCase.ts
│   │   │       ├── listCategories
│   │   │       │   ├── ListCategoriesController.ts
│   │   │       │   └── ListCategoriesUseCase.ts
│   │   │       └── uploadCarImages
│   │   │           ├── UploadCarImagesController.ts
│   │   │           └── UploadCarImagesUseCase.ts
│   │   └── rentals
│   │       ├── dtos
│   │       │   └── ICreateRentalDTO.ts
│   │       ├── infra
│   │       │   └── typeorm
│   │       │       ├── entities
│   │       │       │   └── Rental.ts
│   │       │       └── repositories
│   │       │           └── RentalsRepository.ts
│   │       ├── repositories
│   │       │   ├── in-memory
│   │       │   │   └── RentalsRepositoryInMemory.ts
│   │       │   └── IRentalsRepository.ts
│   │       └── useCases
│   │           ├── createRental
│   │           │   ├── CreateRentalController.ts
│   │           │   ├── CreateRentalUseCase.spec.ts
│   │           │   └── CreateRentalUseCase.ts
│   │           ├── devolutionRental
│   │           │   ├── DevolutionRentalController.ts
│   │           │   └── DevolutionRentalUseCase.ts
│   │           └── listRentalsByUser
│   │               ├── ListRentalsByUserController.ts
│   │               └── ListRentalsByUserUseCase.ts
│   ├── shared
│   │   ├── container
│   │   │   ├── index.ts
│   │   │   └── providers
│   │   │       ├── Dateprovider
│   │   │       │   ├── IDateProvider.ts
│   │   │       │   ├── implementations
│   │   │       │   │   └── DayJsDateProvider.ts
│   │   │       │   └── index.ts
│   │   │       ├── index.ts
│   │   │       ├── MailProvider
│   │   │       │   ├── IMailProvider.ts
│   │   │       │   ├── implementations
│   │   │       │   │   ├── EtherealMailProvider.ts
│   │   │       │   │   └── SESMailProvider.ts
│   │   │       │   ├── index.ts
│   │   │       │   └── in-memory
│   │   │       │       └── MailProviderInMemory.ts
│   │   │       └── StorageProvider
│   │   │           ├── implementations
│   │   │           │   ├── LocalStorageProvider.ts
│   │   │           │   └── S3StorageProvider.ts
│   │   │           ├── index.ts
│   │   │           └── IStorageProvider.ts
│   │   ├── errors
│   │   │   └── AppErros.ts
│   │   └── infra
│   │       ├── http
│   │       │   ├── app.ts
│   │       │   ├── middlewares
│   │       │   │   ├── ensureAdmin.ts
│   │       │   │   └── ensureAuthenticated.ts
│   │       │   ├── routes
│   │       │   │   ├── authenticate.routes.ts
│   │       │   │   ├── cars.routes.ts
│   │       │   │   ├── categories.routes.ts
│   │       │   │   ├── index.ts
│   │       │   │   ├── password.routes.ts
│   │       │   │   ├── rental.routes.ts
│   │       │   │   ├── specifications.routes .ts
│   │       │   │   └── user.routes.ts
│   │       │   └── server.ts
│   │       └── typeorm
│   │           ├── index.ts
│   │           ├── migrations
│   │           │   ├── 1673147659412-CreateCategories.ts
│   │           │   ├── 1673317638981-CreateSpecifications.ts
│   │           │   ├── 1673318846577-CreateUsers.ts
│   │           │   ├── 1673721681825-CreateCars.ts
│   │           │   ├── 1674314120591-CreateUsers.ts
│   │           │   ├── 1674314339345-AlterUserAddAvatar.ts
│   │           │   ├── 1674329561430-CreateSpecificationsCars.ts
│   │           │   ├── 1674333764874-CreateCarImages.ts
│   │           │   ├── 1685675920359-CreateRentals.ts
│   │           │   └── 1685996645302-CreateUsersToken.ts
│   │           └── seed
│   │               └── admin.ts
│   ├── swagger.json
│   ├── @types
│   │   └── express
│   │       └── index.d.ts
│   └── utils
│       └── file.ts
├── tmp
│   ├── avatar
│   ├── cars
├── tsconfig.json
├── yarn-error.log
└── yarn.lock

```

## :white_check_mark: Requerimentos ##

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/alvarobraz/rentcars

# Access
$ cd rentcars

# Install dependencies
$ yarn install

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:3333>
```