# Shipping Service with build with Clean Architecture
![Clean Architecture](./CleanArchitecture.jpg)

## Clean Architecture 
Clean architecture is an architectural style that ment to build resilient software , with a main intent of separating our core business logic from the technical details. 
it compines **hexagonal**, **union**,**screaming** architectrual styels  

**To make our system:**  
 
1. **Independent of Frameworks**. Libraries and frameworks should be treated as tools and not dependencies.
2. **Testable**. Can be tested without external dependencies.
3. **Independent of UI**. You can easily switch CLI for Web or RasberryPi.
4. **Independent of Database**. Switch out SQL for MongoDB.
5. **Independent of any external agency**. Business rules don't know anything about outside world.

for more details click the link to uncle bob's blog :  
[uncle bob clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) 

# Software : 
## Logistics: Shipping Service 
This is a basic shipping service that takes an abstract item (shipping target) and do some processing for example , calculate the price, calculate the destinace from it's destination, 
then produce a shipment object which then sent to delivery . 
___  

### Software Layers : 
The application is separated into three main Ciercle: 

- **Core Ciercle**
  - **Entities**  
  Entities are our core domain objects which represents business rules in our software, entities are independant from  other ciercles.

- **Middle Ciercle**
    - **Usecases** 
Use cases represent all our business operations, and it contains the core logic of our software, usecases handles objects creation and manipulation and state changes to fit the business rules 
    - **Data Accesss**
Data access is our abstraction of the persistence mechanism in the application, usecases uses this abstraction layer to handle database operations.
- **Outer Ciercle**
  - **Interfaces:  Databases, Freameworks, UI**. 
in this layer we handle all the technical details and core technology implementations that surround our business logic, all elements of this circle they depend on our logic, not the other way around, so database, frameworks and presentation can be replaced and changed without effecting the inner circles

___ 

## Files structure: 
```bash 
>__test__: contain our unit tests
> src
    > domain : contains our entities
        > item  
            example: 
            > item.js
            > index.js
        > shipment
        > delivery 
    > usecases: contain our usecases
         > item  
            example: 
            > addItem.js
            > processItem.js
            > markBreakable.js
        > shipment
        > delivery 
    > data // contains our data access layer
        > item 
            example: 
            > item.data.js
            > index.js
        > shipment
        > delivery
    > infra 
        > db 
            > models 
                > item.js
                > shipment.js
                > delivery.js
            > db.js
    > interfaces 
        > web 
            > contrllers 
            > routers
    > utils 
    
    > index.js // entry point server code 
```
___
## Technologies Used 

  Nodejs, express freamework,  mysql database, sequelize orm
and jest for testing . 

## Run the app : 
1. install nodejs on your machine
2. git clone the code repository 
    ```bash 
    $ git clone repository_link 
    ```
3. navigate to the project directory and run to install dependancies  :
    ```bash
     npm install  
     ```  
4. create .env file with your credintails : 
    ```
    DATABASE_NAME=yourdbname
    DATABASE_USER=yourdbuser
    DATABASE_PASSWORD=yourdbpassword 
    ``` 

4. run the aplication :  
    ```bash
     npm start   
5. run the test cases: 
    ```bash 
    npm test 
    ```
    ___
