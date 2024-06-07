'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeProfile extends Model {
    static associate(models) {
      EmployeeProfile.belongsTo(models.Employee, { foreignKey: 'employeeId' });
    }
  }
  EmployeeProfile.init({
    employeeId: DataTypes.INTEGER,
    profileInfo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EmployeeProfile',
  });
  return EmployeeProfile;
};
