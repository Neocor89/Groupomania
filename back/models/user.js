"use strict";

//: Imports
const { Model } = require("sequelize");
const {
  CheckEncryptedPassword,
  addAuthentification
} = require("../services/authentification");
const { deleteFile } = require("../services/file-deleted");

//: Users Model
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, { foreignKey: "userId" });

    } //!  REAJOUTE => NOUVEAU TEST
    softDestroy() {
      return this.update({
        deleted: true,
        email: `deleted-user${this.id}@groupamania.com`,
        imageUrl: null,
        firstName: "Utilisateur",
        lastName: "Supprimé",
      });
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        // validate: {
        //   isEmail: true,
        //   //: méthode gestion affichage message d'erreur
        //   async ensureEmailIsUnique(email) {
        //     if (await User.findOne({ where: { email } }))
        //       throw new Error(
        //         "Un compte existe déjà avec cette adresse mail !"
        //       );
        //   },
        // },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          CheckEncryptedPassword
        },
      },
      imageUrl: DataTypes.STRING,
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  addAuthentification(User);
  User.afterUpdate(async (user) => {
    if (user.dataValues.imageUrl !== user._previousDataValues.imageUrl) {
      await deleteFile(user._previousDataValues.imageUrl);
    }
  });

  return User; 
};