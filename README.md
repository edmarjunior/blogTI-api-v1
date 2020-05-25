
# blog-ti-api

This project was generated with [edapi CLI](https://github.com/edmarjunior/edapi-cli) 1.0.3

## Node application for REST API with:
  - folder/file structure template
  - express
  - ORM (sequelize)
  - CRUD Example using postgres
  - Example integration tests using sqlite
  - docker-compose up postgres + pgAdmin
  
 ## Prerequisites (installations)
  - node
  - yarn
  - docker e docker-compose
   
 ## Running application
  - create .env file and fill in the environment variables (hint: ctrl+C and ctrl+V from the .env.example file)
  - run the commands below at the end (at the root of the project): 
    ```
      yarn 
      docker-compose up -d
      yarn sequelize db:migrate
      yarn dev
    ```
    Description of the above commands:
      - yarn (install the application dependencies if necessary)
      - docker-compose up -d (up postgres + pgAdmin)
      - yarn sequelize db:migrate (create the migrations in the database)
      - yarn dev (start the application with nodemon at http://localhost:3333)
    
 ## Running tests
  - create .env.test file and fill in the environment variables (hint: ctrl+C and ctrl+V from the .env.test.example file)
  - run the commands below at the end (at the root of the project):  
    ```
      yarn
      yarn test
    ```
    Description of the above commands:
      - yarn (install the application dependencies if necessary)
      - yarn test (to run the tests located within the __tests__ directory)
