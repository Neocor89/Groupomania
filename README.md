# Groupomania

![badge-Groupomania](https://badgen.net/badge/Goupomania/Chat/orange) 
![OpenClassRooms](https://badgen.net/badge/Projet_7/OC/purple)

Est une entreprise spécialisée dans la grande distribution, est en pleine expansion et compte actuellementplus de 600 collaborateurs.


    C O N T E X T E
Suite à un un ralentissement de la productivité et une baisse de la motivation et de l’implication des employés. 

La direction a réagi et a mis en place et a optée pour des mesures d’
amélioration de la communication entre collègues, via un nouveau projet numérique. 

La création d’un réseau social interne, moderne et ludique, qui permettra aux employés de se connaître dans un cadre plus informel.

    P E R I M È T R E
**Les exigences émises par le comité de pilotage sont les suivantes** :

* la présentation des fonctionnalités doit être simple ;
* la création d’un compte doit être simple et possible depuis un téléphone mobile;
* le profil doit contenir très peu d’informations pour que sa complétion soit rapide;
* la suppression du compte doit être possible;
* l’accès à un forum où les salariés publient des contenus multimédias doit être présent;
* l’accès à un forum où les salariés publient des textes doit être présent;
* les utilisateurs doivent pouvoir facilement repérer les dernières participations des employés;
* le ou la chargé-e de communication Groupomania doit pouvoir modérer les interactions entre
employés 
* la chargé-e de communication **Groupomania** doit pouvoir afficher les dernières **messages** des salariés ;

## Setup

**Back-end**  

Build with:  

![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?-style=for-the-badge&logo=mysql&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?-style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?-style=for-the-badge&logo=node.js&logoColor=white)  

To launch the back you must go via your terminal in the folder :
```
cd groupomania back
```
`Dependencies`  
Start by installing the *dependencies* needed to run the project : 🏃‍♂️
```
npm install 
```

`Database`  
Log in to *MySQL* with your usual login and password  
[For more Information 🤔](https://dev.mysql.com/doc/)

when you are connected create the **groupomania database** with :

```sql
CREATE DATABASE Groupomania;
```

then selected with :

```sql
USE Groupomania;
```

or 

### Use Sequelize and Sequelize-cli 🧬

*Sequelize* is a promise-based Node.js ORM for 

- **Postgres**, 
- **MySQL**, 
- **MariaDB**, 
- **SQLite**,
- **Microsoft SQL Server**. 

It features solid transaction support, relations, eager and lazy loading, read replication and more.

Sequelize follows Semantic Versioning and supports *Node v10* and above.

*Sequelize-cli* is the command interface of *Sequelize*, and ships support for **migrations** and project **bootstrapping**.

### Initializing a database project with Sequelize

To initialize the database go back to the project terminal and run the command :

```sql
sequelize-cli init
```

In the json file of the config folder created by the previous command, replace the default info by :

```json
 "development": {
    "username": "root",
    "password": null,
    "database": "groupomania",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
```

You can enter a password, but **don't forget** to create an `.env` file in the root of the project to **protect your information**.

### Create database

If you have not yet created a database you can do so using Seq with :
```
sequelize db:create
```

### Sequelize syntax and Command 
#### sequelize **:** `name_of_the_command`

🧾 list and description of possible actions

```
sequelize db:migrate                        Run pending migrations

sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps

sequelize db:migrate:status                 List the status of all migrations

sequelize db:migrate:undo                   Reverts a migration

sequelize db:migrate:undo:all               Revert all migrations ran

sequelize db:seed                           Run specified seeder

sequelize db:seed:undo                      Deletes data from the database

sequelize db:seed:all                       Run every seeder

sequelize db:seed:undo:all                  Deletes data from the database

sequelize db:create                         Create database specified by configuration

sequelize db:drop                           Drop database specified by configuration

sequelize init                              Initializes project

sequelize init:config                       Initializes configuration

sequelize init:migrations                   Initializes migrations

sequelize init:models                       Initializes models

sequelize init:seeders                      Initializes seeders

sequelize migration:generate                Generates a new migration file

sequelize migration:create                  Generates a new migration file

sequelize model:generate                    Generates a model and its migration

sequelize model:create                      Generates a model and its migration

sequelize seed:generate                     Generates a new seed file

sequelize seed:create      
```

### Create database

when your database is created generate the models of the users and message table. 

run the following command:

```
sequelize-cli model:generate --name User --attributes firstName:string, lastName:string, email:string, password:string, isAdmin:boolean
```

This will create the config and model folders in the config/config.json file

### 

___


`Launch server 🚀`
```node
npm run start
```




## Setup

**Front-end**  

Build with:  