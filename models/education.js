'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
    static associate(models) {
      Education.belongsTo(models.Employee, { foreignKey: 'employeeId' });
    }
  }
  Education.init({
    employeeId: DataTypes.INTEGER,
    educationInfo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Education',
  });
  return Education;
};
