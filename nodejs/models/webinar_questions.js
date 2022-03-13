'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Webinar_Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Webinar_Questions.init({
    
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    webinar_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Webinar_Questions',
  });
  return Webinar_Questions;
};