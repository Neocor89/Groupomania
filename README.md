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
Log in to MySQL with your usual login and password  
[For more Information 🤔](https://dev.mysql.com/doc/)

Once connected, create the **Groupomania** database :
```sql
CREATE DATABASE Groupomania;
```
then selected with :
```sql
USE Groupomania;
```
To initialize the database go back to the project terminal and run the command :
```sql
sequelize init
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

`Launch server 🚀`
```node
npm run start
```

