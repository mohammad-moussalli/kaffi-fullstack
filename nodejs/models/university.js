'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class University extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  University.init({
    university: DataTypes.STRING,
    major: DataTypes.STRING,
    university_id: DataTypes.STRING,
    enrollment_date: DataTypes.DATEONLY,
    expected_graduation: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'University',
  });
  return University;
};